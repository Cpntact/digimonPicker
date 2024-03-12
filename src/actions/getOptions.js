import supabase from "../config/supabaseClient";

const OPTIONS = 4;
const LEN = 10;

export async function getOptions () {
    let set = new Set();
    while (set.size < OPTIONS) {
        set.add(Math.floor(Math.random() * LEN) + 1);
    }
    let l = Array.from(set);
    let arr = [];
    const promises = l.map(async (e) => {
        const { data, error } = await supabase.rpc('getrandom', {_id: e});
        const { data: correct, error: correctError } = await supabase.from('digimon').select('name, shadow_path').eq('id', e);
        const { data: imageData } = await supabase.storage.from('shadow').getPublicUrl(correct[0].shadow_path);
        data.push(correct[0].name)
        arr.push({
            set: data,
            correct: correct[0].name,
            publicUrl: imageData.publicUrl,
        })

    })
    await Promise.all(promises);
    return arr;
}


export default getOptions;

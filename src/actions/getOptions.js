import supabase from "../config/supabaseClient";

const OPTIONS = 4;
export const LEN = 10;

export async function getOptions () {
    let set = new Set();
    while (set.size < LEN) {
        set.add(Math.floor(Math.random() * LEN) + 1);
    }
    let l = Array.from(set);
    let arr = [];
    const promises = l.map(async (e) => {
        const { data, error } = await supabase.rpc('getrandom', {_id: e});
        const { data: correct, error: correctError } = await supabase.from('digimon').select('name, shadow_path, image_path').eq('id', e);
        const { data: imageData, error:PublicError} = supabase.storage.from('shadow').getPublicUrl(correct[0].shadow_path);
        data.push(correct[0].name)
        shuffle(data)
        arr.push({
            set: data,
            correct: correct[0].name,
            publicUrl: imageData.publicUrl,
            img_path: correct[0].image_path

        })

    })
    await Promise.all(promises);
    console.log(arr)
    return arr;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


export default getOptions;

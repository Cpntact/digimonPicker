
import supabase from "../config/supabaseClient"
import toast from "react-hot-toast";


const getShadowById = async (id) => {
    const { data: digimonData, error: digimonError} = await supabase.from('digimon').select('*').eq('id', id);
    if (digimonError) {
        toast.error(`There was an issue retreiving the id ${id}`)
    }
    return digimonData[0];
}
export default getShadowById
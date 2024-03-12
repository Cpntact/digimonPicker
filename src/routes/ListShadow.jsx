import { useLoaderData } from "react-router-dom";

import { getOptions } from "../actions/getOptions";

import SelectionCard from "../components/SelectionCard";



export const loader = () => {
  return getOptions();
}
function ListShadow() {
  const loader = useLoaderData();
  console.log(loader)
  //const { data: imgdata} = supabase.storage.from('shadow').getPublicUrl(loader.shadow_path);
  return (
    <div>            
      <img src={loader[0].publicUrl}></img>
      <SelectionCard loader={loader} />
    </div>
  )
}

export default ListShadow


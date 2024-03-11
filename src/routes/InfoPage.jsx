import { useLoaderData } from 'react-router-dom';

import NextEvolution from '../components/NextEvolution';
import InfoCard from '../components/InfoCard';

import getDigimon from '../actions/getDigimon';
import getEvolution from '../actions/getEvolutions';

export const loader = async ({params}) => {
  const data = await getDigimon(params.digimon)
  const evolution = getEvolution(data);
  return Promise.all([data, evolution])
}

function InfoPage() {
  const [data, evolution] = useLoaderData();
  
  return (
    <div className='flex flex-col w-full justify-center items-center gap-y-10 mt-10'>
        <InfoCard data={data} />
        <NextEvolution evolution={evolution} />
    </div>
  )
}

export default InfoPage
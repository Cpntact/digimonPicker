import { useLoaderData } from 'react-router-dom';

import NextEvolution from '../components/NextEvolution';
import InfoCard from '../components/InfoCard';
import CardPage from '../components/CardPage';

import getDigimon from '../actions/getDigimon';
import getEvolution from '../actions/getEvolutions';
import getCardImages from '../actions/getCard';

export const loader = async ({params}) => {
  const data = await getDigimon(params.digimon)
  const evolution = getEvolution(data);
  const cards = await getCardImages(params.digimon.charAt(0).toUpperCase() + params.digimon.slice(1));
  return Promise.all([data, evolution, cards])
}

function InfoPage() {
  const [data, evolution, cards] = useLoaderData();
  return (
    <div className='flex flex-col w-full justify-center items-center gap-y-5 mt-10'>
        <InfoCard data={data}/>
        <NextEvolution evolution={evolution}/>
        <CardPage cards={cards} />
    </div>
  )
}

export default InfoPage
import {Outlet} from 'react-router-dom'
import { useNavigation } from 'react-router-dom'

import Head from '../components/Head'
import LoadingScreen from '../components/LoadingScreen'

const Root = () => {
  const navigate = useNavigation();
  console.log(navigate.state)
  return (
    <div>
      <Head />
      {navigate.state === "loading" ? <LoadingScreen /> : <Outlet/> }
    </div>
  )
}

export default Root
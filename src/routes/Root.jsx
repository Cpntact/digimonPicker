
import {Outlet} from 'react-router-dom';
import "../index.css"

const Root = () => {
  //const onUploadClick = () => {
  //    return uploadModel.onOpen();
  //}
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Root
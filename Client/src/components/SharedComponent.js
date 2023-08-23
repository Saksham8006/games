import React from 'react'
import { Outlet } from 'react-router-dom'


const SharedComponent = () => {
  return (
  <>
  
{/* <Sidebar/>
<Header/> */}
<Outlet/>

  </>
  )
}

export default SharedComponent
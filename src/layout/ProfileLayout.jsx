import React from 'react'
import EkskulContainer from '../components/molecules/EkskulContainer'
import VisiMisiContainer from '../components/molecules/VisiMisiContainer'
import DaftarGuruContainer from '../components/molecules/DaftarGuruContainer'
import Nav from '../components/molecules/Nav'


const ProfileLayout = () => {
  return (
    <div>
      <Nav />
      <DaftarGuruContainer/>
      <VisiMisiContainer/>
      <EkskulContainer/>
    </div>
  )
}

export default ProfileLayout

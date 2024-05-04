import React from 'react'
import EkskulContainer from '../components/molecules/EkskulContainer'
import VisiMisiContainer from '../components/molecules/VisiMisiContainer'
import DaftarGuruContainer from '../components/molecules/DaftarGuruContainer'
import Nav from "../components/molecules/Nav"
import Footer from "../components/molecules/Footer"

const ProfileLayout = () => {
  return (
    <div>
      <Nav/>
      <DaftarGuruContainer/>
      <VisiMisiContainer/>
      <EkskulContainer/>
      <Footer />
    </div>
  )
}

export default ProfileLayout

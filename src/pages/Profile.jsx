import React from 'react';
import StrukturOrganisasi from '../layout/StrukturOrganisasiLayout';
import TentangKami from '../layout/TentangKamiLayout';

 const Profile = () => {
  return (
    <div className="container mx-auto p-4 ">
      
            <h1 className="text-3xl font-bold text-black text-center mb-8">Tentang Kami</h1>
            <TentangKami />
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">Struktur Organisasi</h2>
            <StrukturOrganisasi />          
        </div>

        
  );
}

export default Profile;

 

import React from 'react'
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader';

const AdminPage = () => {
  return (
    <>
    <AdminHeader/>

    <div className='text-center'>
      <h1>Admin Dashboard + eventos con editar y eliminar</h1>
    </div>

    <Footer/>
    </>
  )
}

export default AdminPage

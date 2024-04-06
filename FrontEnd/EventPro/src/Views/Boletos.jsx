import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/AuthContext'
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';

function Boletos() {
  const { user } = useAuth();

  return (
    <>
      <Header />

      {user.role === 'admin' ? (
        <>
          <h1 className='text-center py-52'>Boletos comprados por evento</h1>
        </>
      ) : (
        <>
          <h1 className='text-center py-52'>Boletos comprados por el usuario</h1>
        </>
      )}

      <Footer />
      <ScrollToTopButton/>
    </>
  )
}

export default Boletos

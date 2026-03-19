import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='main min-h-screen bg-(--color-primary) p-(--space-lg) text-(--color-light) flex flex-col gap-7'>
      <Navbar />
      <MainRoutes />
      <ToastContainer
        position='top-right'
        autoClose={1200}  
        theme='dark'
        hideProgressBar={false}
      />
    </div>
  )
}

export default App
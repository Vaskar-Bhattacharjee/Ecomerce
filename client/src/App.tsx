import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import { productsData } from './api/Api';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';



const Layout = () => {
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
      loader: productsData
    },
    {
      path: "/product/:id",
      element: <ProductPage />
    },
    {
      path: "/cart",
      element: <CartPage />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
 } 
])
function App() {


  return (
    <div className=''>
      <RouterProvider router={router} />     
    </div>
  )
}

export default App
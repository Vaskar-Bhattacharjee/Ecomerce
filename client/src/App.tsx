import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import { productsData } from './api/Api';
import CartPage from './pages/CartPage';
import Login from './pages/LoginPage';
import Precover from './pages/Precover';
import TermService from './pages/TermService';
import ElementPage from './pages/ElementPage';
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';
import ShopPage from './pages/ShopPage';



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
    },
    {
      path: "/shop",
      element: <ShopPage />
    },
    {
      path: "/password-recovery",
      element: <Precover />
    },
    {
      path: "/TermsAndPrivacy",
      element: <TermService />
    },
    {
      path: "/element",
      element: <ElementPage />
    }
  ]
 } 
])
function App() {


  return (
    <div className='bg-githubColor'>
      <RouterProvider router={router} />     
    </div>
  )
}

export default App
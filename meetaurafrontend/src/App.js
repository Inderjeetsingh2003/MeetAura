
import './App.css';
import Googleauth from './components/Googleauth';
import Login from './pages/Login';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Singup from './pages/Singup';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
const router=createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:"/",
    element:<Singup/>
  },
  {
    path:'/home',
    element:<Home/>
  }
])



  return (
   <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;

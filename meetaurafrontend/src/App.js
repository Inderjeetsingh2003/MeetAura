
import './css/App.css';
import Googleauth from './components/Googleauth';
import Login from './pages/Login';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Singup from './pages/Singup';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ChatRoom from './pages/ChatRoom';
import UserProfile from './components/UserProfile';
import Alert from './components/Alert';

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
  },
  {
    path:'room/:id',
    element:<ChatRoom/>
  },
  {
    path:"/profile",
    element:<UserProfile/>
  },
  {
    path:'/alert',
    element:<Alert/>
  }

])



  return (
   <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;

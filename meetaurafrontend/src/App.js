
import './App.css';
import Googleauth from './components/Googleauth';
import Login from './pages/Login';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Singup from './pages/Singup';
function App() {
const router=createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:"/",
    element:<Singup/>
  }
])



  return (
   <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;

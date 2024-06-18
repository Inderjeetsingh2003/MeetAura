import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Usercontext } from '../context/Usercontext';
import Alert from './Alert';
// import '../css/userDetail.css';

export default function UserProfile() {
    const { getuserdetails, userdetail, updateuser, alert } = useContext(Usercontext);
    const [formdata, setformdata] = useState({ username: '', email: '' });

    useEffect(() => {
        getuserdetails();
    }, []);

    useEffect(() => {
        if (userdetail) {
            setformdata({
                username: userdetail.username,
                email: userdetail.email
            });
        }
    }, [userdetail]);

    const handlechange = (e) => {
        setformdata((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const handleclick = (e) => {
        e.preventDefault();
        console.log("the updated user data is:", formdata);
        updateuser(formdata);
    };

    return (
        <>
            <Navbar />
            <Alert alert={alert} />
            {console.log("user details in the user profile component", userdetail)}
            <div className='container my-5 d-flex justify-content-center align-items-center' style={{ height: '50vh', paddingTop: '50px' }}>
                <form className="text-center">
                    {/* Profile Picture */}
                    <div style={{ marginBottom: '20px' }}>
                        <img 
                            src="https://via.placeholder.com/100" 
                            alt="Profile" 
                            className="rounded-circle"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" name='username' style={{ width: '300px', margin: 'auto' }} value={formdata.username} onChange={handlechange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail" style={{ width: '300px', margin: 'auto' }} name='email' value={formdata.email} onChange={handlechange} />
                    </div>

                    <button type="button" className="btn btn-primary" onClick={handleclick}>Update</button>
                </form>
            </div>
        </>
    );
}







// import React, { useContext,useEffect, useState } from 'react'
// import Navbar from './Navbar'
// import { Usercontext } from '../context/Usercontext'
// import Alert from './Alert'
// // import '../css/userDetail.css'


// export default function UserProfile() {
//     const{getuserdetails,userdetail,updateuser,alert}=useContext(Usercontext)
// const[formdata,setformdata]=useState({username:'',email:''})
// useEffect(() => {
//  getuserdetails()
// }, [])

// useEffect(()=>
// {
// if(userdetail)
//     {
//             setformdata({
//                 username:userdetail.username,
//                 email:userdetail.email
//             })
//     }
// },[userdetail])

// const handlechange=(e)=>
//     {
//         setformdata((prevData) => ({
//             ...prevData,
//             [e.target.name]: e.target.value
//           }));
//     }

//     const handleclick=(e)=>
//         {
//             e.preventDefault()
//             console.log("the updated user data is:",formdata)
//             updateuser(formdata)
//         }
//   return (

//     <>

//     <Navbar/>
//     <Alert alert={alert}/>
//     {console.log("user details in the user profile component",userdetail)}
//     <div  className='container my-5 d-flex justify-content-center align-items-center ' style={{ height: '50vh', paddingTop: '50px' }}><form>
//     <div class="mb-3">
//       <label for="exampleInputEmail1" class="form-label">Username</label>
//       <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" name='username' style={{ width: '300px' }} value={formdata.username} onChange={handlechange} />
     
//     </div>
//     <div class="mb-3">
//       <label for="exampleInputPassword1" class="form-label">Email</label>
//       <input type="email" class="form-control " id="exampleInputEmail"  style={{ width: '300px' }} name='email' value={formdata.email} onChange={handlechange}/>
//     </div>
   
//     <button type="button" class="btn btn-primary" onClick={handleclick}>update</button>
//   </form></div>
//     </>
//   )
// }

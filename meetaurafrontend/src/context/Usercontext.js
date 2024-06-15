import { Children, createContext, useState } from "react";

const Usercontext = createContext();

const UserProvider = (props) => {
  const [userdetail, setuserdetail] = useState();
  const url = `http://localhost:4000/user/`;

  const getuserdetails = async () => {
    const response = await fetch(`${url}/getuserdetails`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("user-token"),
      },
    });
    const json = await response.json();
    if (json.success) {
      console.log("it is loging in the getuserdetails inside the user context");
      console.log(json.user);
      setuserdetail(json.user);
    } else {
      alert(json.message);
    }
  };


  const updateuser=async(formdata)=>
  {
    const response=await fetch (`${url}/updateuser`,
        {
            mode:'cors',
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                'access-token':localStorage.getItem('user-token')
            },
            body:JSON.stringify({username:formdata.username,email:formdata.email})
        }    
    )
    const json=await response.json()
    if(json.success)
        {
            console.log('in the updateuser context',json.message)
            showalert(json.message,"success")
        }
        else{
            
            showalert(json.message,"danger")
        }
  }

  const[alert,setalert]=useState()
  const showalert=(message,type)=>
  {
    setalert({
        message:message,
        type:type
    })
    setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  return (
    <Usercontext.Provider value={{ getuserdetails, userdetail,updateuser,alert,showalert}}>
      {props.children}
    </Usercontext.Provider>
  );
};
export { UserProvider, Usercontext };

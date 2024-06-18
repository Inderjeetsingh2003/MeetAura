import { createContext, useState } from "react";

const Roomcontext = createContext();

const Roomprovider = (props) => {

    const[PublicRooms,SetPublicRooms]=useState()
    const host=`http://localhost:4000/room`
    const getpublicrooms=async()=>
        {
            console.log("get public room is gettng called")
            const response= await fetch(`${host}/getallpublicrooms`,
                {
                    mode:'cors',
                    method:'GET',
                    headers:{
                        'Content-TYPE':'application/json',
                        'access-token':localStorage.getItem('user-token')
                    }
                }
            )
            //console.log(response)
            const json=await response.json()
            //console.log(json)
            if(json.success)
                {
                    console.log("in the room context",json.rooms)
                    SetPublicRooms(json.rooms)
                }
                else{
                    alert(json.message)
                }
        }


        const[privateroominfo,setprivateroominfo]=useState()
        const getprivatechatroom=async()=>
            {
                const response=await fetch(`${host}/getprivatechatroom`,
                    {
                        mode:'cors',
                        method:'GET',
                        headers:{
                            'Content-Type':'application/json',
                            'access-token':localStorage.getItem('user-token')
                        }
                    }
                )
                const json=await response.json()
                if(json.success)
                    {
                        console.log("the privatechat room details in the private room context are:",json.rooms)
                        setprivateroominfo(json.rooms)
                    }
                    else{
                        console.log(json.message)
                    }
            }

  return <Roomcontext.Provider value={{getpublicrooms,PublicRooms,getprivatechatroom,privateroominfo}}>
    {props.children}
    </Roomcontext.Provider>;
};

export{Roomcontext,Roomprovider}
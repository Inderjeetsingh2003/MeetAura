import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateRoom.css'; // Ensure you create this CSS file

export default function CreateRoom(props) {
    const [Roomdetails, SetRoomdetails] = useState({
        title: '',
        description: '',
        accesstype: 'public',
        roomtype: 'chat',
    });

    const handleclick = async (e) => {
        e.preventDefault();
        console.log("The room details are:", Roomdetails);

        // Sending the data to backend
        const response = await fetch('http://localhost:4000/room/createroom', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'access-token': localStorage.getItem('user-token'),
            },
            body: JSON.stringify({
                title: Roomdetails.title,
                description: Roomdetails.description,
                accesstype: Roomdetails.accesstype,
                roomtype: Roomdetails.roomtype,
            }),
        });

        const json = await response.json();
        if (json.success) {
            props.handleclick();
            alert(json.message);
        } else {
            alert(json.message);
        }
    };

    const handlechange = (e) => {
        SetRoomdetails({ ...Roomdetails, [e.target.name]: e.target.value });
    };

    return (
        <form className="create-room-form">
            <div className="form-group">
                <label htmlFor="title" className="form-label">Room Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={handlechange}
                    value={Roomdetails.title}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={handlechange}
                    value={Roomdetails.description}
                />
            </div>
            <div className="form-group">
                <label htmlFor="accesstype" className="form-label">Access Type</label>
                <select
                    className="form-select"
                    id="accesstype"
                    name="accesstype"
                    onChange={handlechange}
                    value={Roomdetails.accesstype}
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="roomtype" className="form-label">Room Type</label>
                <select
                    className="form-select"
                    id="roomtype"
                    name="roomtype"
                    onChange={handlechange}
                    value={Roomdetails.roomtype}
                >
                    <option value="chat">Chat</option>
                    <option value="audio/video">Audio/Video</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
        </form>
    );
}








// import React, { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function CreateRoom(props) {

//     const[Roomdetails,SetRoomdetails]=useState({title:'',description:'',accesstype:'public',roomtype:'chat'})

    

// const handleclick=async(e)=>
//     {
//         e.preventDefault();
//         console.log("the room details are mentioned as:",Roomdetails)

//         //sending the data to backend
//         const response=await fetch('http://localhost:4000/room/createroom',
//             {
//                 mode:'cors',
//                 method:'POST',
//                 headers:{
//                     'Content-Type':"application/json",
//                     'access-token':localStorage.getItem('user-token')
//                 },
//                 body:JSON.stringify({"title":Roomdetails.title,"description":Roomdetails.description,"accesstype":Roomdetails.accesstype,"roomtype":Roomdetails.roomtype})
//             }
//         )

//         const json=await response.json()
//         if(json.success)
//             {
//               props.handleclick()
//                 alert(json.message)

//             }
//             else{
//                 alert(json.message)
//             }
//     }

//     const handlechange=(e)=>
//         {
//                 SetRoomdetails({...Roomdetails,[e.target.name]:e.target.value})
//         }
//   return (
//     <form>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label" >Room Name</label>
//     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='title' onChange={handlechange} value={Roomdetails.title}/>
   
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label" >Description</label>
//     <input type="text" className="form-control" id="exampleInputPassword1" name='description' onChange={handlechange} value={Roomdetails.description}/>
//   </div>
//   <div className="mb-3">

//   <select class="form-select" aria-label="Default select example" name='accesstype' onChange={handlechange} value={Roomdetails.accesstype}>
//   <option value="public">public</option>
//   <option value="private">private</option>
  
// </select>
//   </div>
//   <div className="mb-3">

//   <select class="form-select" aria-label="Default select example" name='roomtype' onChange={handlechange} value={Roomdetails.roomtype}>
 
//   <option value="chat" >chat</option>
//   <option value="audio/video">audio/video</option>

// </select>
//   </div>
//   <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
// </form>
//   )
// }

import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateRoom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function CreateRoom(props) {
    const [Roomdetails, SetRoomdetails] = useState({
        title: '',
        description: '',
        accesstype: 'public',
        roomtype: 'chat',
    });

    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }, []);

    const handleclick = async (e) => {
        e.preventDefault();
        console.log("The room details are:", Roomdetails);

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
            props.handleClick();
            alert(json.message);
        } else {
            alert(json.message);
        }
    };

    const handlechange = (e) => {
        SetRoomdetails({ ...Roomdetails, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal fade" ref={modalRef} id="createRoomModal" tabIndex="-1" aria-labelledby="createRoomModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="createRoomModalLabel">Create Room</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="create-room-form">
                            <div className="mb-3">
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
                            <div className="mb-3">
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
                            <div className="mb-3">
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
                            <div className="mb-3">
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
                    </div>
                </div>
            </div>
        </div>
    );
}



// import React, { useState, useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './CreateRoom.css';

// export default function CreateRoom(props) {
//     const [Roomdetails, SetRoomdetails] = useState({
//         title: '',
//         description: '',
//         accesstype: 'public',
//         roomtype: 'chat',
//     });

//     const modalRef = useRef(null);

//     useEffect(() => {
//         const modal = new bootstrap.Modal(modalRef.current);
//         modal.show();
//     }, []);

//     const handleclick = async (e) => {
//         e.preventDefault();
//         console.log("The room details are:", Roomdetails);

//         const response = await fetch('http://localhost:4000/room/createroom', {
//             mode: 'cors',
//             method: 'POST',
//             headers: {
//                 'Content-Type': "application/json",
//                 'access-token': localStorage.getItem('user-token'),
//             },
//             body: JSON.stringify({
//                 title: Roomdetails.title,
//                 description: Roomdetails.description,
//                 accesstype: Roomdetails.accesstype,
//                 roomtype: Roomdetails.roomtype,
//             }),
//         });

//         const json = await response.json();
//         if (json.success) {
//             props.handleclick();
//             alert(json.message);
//         } else {
//             alert(json.message);
//         }
//     };

//     const handlechange = (e) => {
//         SetRoomdetails({ ...Roomdetails, [e.target.name]: e.target.value });
//     };

//     return (
//         <>
//             <div className="modal fade" ref={modalRef} id="createRoomModal" tabIndex="-1" aria-labelledby="createRoomModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="createRoomModalLabel">Create Room</h5>
//                             <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <form className="create-room-form">
//                                 <div className="form-group">
//                                     <label htmlFor="title" className="form-label">Room Name</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="title"
//                                         name="title"
//                                         onChange={handlechange}
//                                         value={Roomdetails.title}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="description" className="form-label">Description</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="description"
//                                         name="description"
//                                         onChange={handlechange}
//                                         value={Roomdetails.description}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="accesstype" className="form-label">Access Type</label>
//                                     <select
//                                         className="form-select"
//                                         id="accesstype"
//                                         name="accesstype"
//                                         onChange={handlechange}
//                                         value={Roomdetails.accesstype}
//                                     >
//                                         <option value="public">Public</option>
//                                         <option value="private">Private</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="roomtype" className="form-label">Room Type</label>
//                                     <select
//                                         className="form-select"
//                                         id="roomtype"
//                                         name="roomtype"
//                                         onChange={handlechange}
//                                         value={Roomdetails.roomtype}
//                                     >
//                                         <option value="chat">Chat</option>
//                                         <option value="audio/video">Audio/Video</option>
//                                     </select>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

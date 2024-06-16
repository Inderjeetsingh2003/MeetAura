import React, { useState } from 'react';
import '../css/ForgetPassword.css';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(async () => {
      try {
        const response = await fetch('http://localhost:4000/user/forgotpassword/', {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const json = await response.json();
        setLoading(false);
        if (json.success) {
          alert('A link to reset your password has been sent to your email.');
        } else {
          setError('Invalid email');
        }
      } catch (error) {
        setLoading(false);
        setError('An error occurred. Please try again.');
      }
    }, 2000); // Simulate delay for 2 seconds
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${error && 'error'}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <div className="error-text">{error}</div>}
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            <span className="spinner"></span>
          ) : (
            'Click to Get Token'
          )}
        </button>
      </form>
    </div>
  );
}






// import React, { useState } from 'react';
// import '../css/ForgetPassword.css';

// export default function ForgetPassword() {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleClick = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(async () => {
//       try {
//         const response = await fetch('http://localhost:4000/user/forgotpassword/', {
//           mode: 'cors',
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
//         const json = await response.json();
//         setLoading(false);
//         if (json.success) {
//           alert('A link to reset your password has been sent to your email.');
//         } else {
//           alert(json.message);
//         }
//       } catch (error) {
//         setLoading(false);
//         alert('An error occurred. Please try again.');
//       }
//     }, 2000); // Simulate delay for 2 seconds
//   };

//   return (
//     <div className="container">
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleClick}
//           disabled={loading}
//         >
//           {loading ? (
//             <span className="spinner active"></span>
//           ) : (
//             'Click to Get Token'
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }







 
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const CaptainLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
        
//         if (!email || !password) {
//             toast.error("Please fill in all fields");
//             setLoading(false);
//             return;
//         }
        
//         try {
//             const response = await axios.post('http://localhost:8000/captain/login', { email, password });
//             toast.success("Login successful!");
//             console.log(response.data);
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Login failed. Try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
//                 <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Captain Login</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <input 
//                         type="email" 
//                         placeholder="Email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <input 
//                         type="password" 
//                         placeholder="Password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <button 
//                         type="submit" 
//                         disabled={loading} 
//                         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//                     >
//                         {loading ? "Logging in..." : "Login"}
//                     </button>
//                 </form>
//             </div>
//             <ToastContainer position="top-right" autoClose={3000} />
//         </div>
//     );
// };

// export default CaptainLogin;

// import React, { useState } from 'react';


// import axios from 'axios';

// const CaptainLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
        
//         if (!email || !password) {
            
//             setLoading(false);
//             return;
//         }
        
//         try {
//             const response = await axios.post('http://localhost:8000/captain/login', { email, password });
          
//            alert("Login successful!");
//             console.log(response.data);
//         } catch (error) {
//             alert(error.response?.data?.message || "Login failed. Try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
//                 <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Captain Login</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <input 
//                         type="email" 
//                         placeholder="Email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <input 
//                         type="password" 
//                         placeholder="Password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required
//                         className="p-2 border rounded-md w-full"
//                     />
//                     <button 
//                         type="submit" 
//                         disabled={loading} 
//                         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//                     >
//                         {loading ? "Logging in..." : "Login"}
//                     </button>
//                 </form>
//             </div>
  
//         </div>
//     );
// };

// export default CaptainLogin;

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const CaptainLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        if (!email || !password) {
            alert('please fill in all fields');
            setLoading(false);
            return;
        }
        
        try {
            const response = await axios.post(`${process.env.URI}/captain/login`, { email, password });
          
         alert('login successful')
            navigate('/')
        } catch (error) {
          alert('login failed')
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Captain Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        className="p-2 border rounded-md w-full"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                        className="p-2 border rounded-md w-full"
                    />
                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
           
        </div>
    );
};

export default CaptainLogin;
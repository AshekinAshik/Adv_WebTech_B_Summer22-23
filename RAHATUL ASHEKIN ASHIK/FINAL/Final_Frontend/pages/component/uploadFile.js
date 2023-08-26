// import axios from "axios";
// import React, { useState } from 'react';
// import SessionCheck from "../utils/sessionCheck";
// // import Form from 'react-bootstrap/Form';

// const UploadFile = () => {
//     // const [fileData, setFileData] = useState({
//     //     filename: "",
//     // });

//     const [file, setFile] = useState(null);

//     const handleChange = (e) => {
//         console.log(e.target.files[0]);
//         setFile({ ...file, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(file);

//         const formData = new FormData();
//         formData.append("myfile", file, file.name);

//         try {
//             const response = await axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + '/uploadfile', formData,
//                 {
//                     headers : {
//                         "Content-Type" : "multipart/form-data"
//                     },
//                     withCredentials: true
//                 });

//             console.log(response);
//             alert('File Successful!');
//         } catch (error) {
//             console.error(error);
//             alert('File Failed!');
//         }
//     };

//     return (
//         <>
//             {/* <SessionCheck /> */}

//             <br></br> <br></br>
//             <form class="mt-4" onSubmit={handleSubmit}>
//                 <div class="w-80">
//                     <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
//                     <input name="file" id="file_input" type="file" onChange={(e) => handleChange(e)} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" />
//                     <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
//                 </div>

//                 <div>
//                     <center>
//                         <button type="submit" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DONE</button>
//                     </center>
//                 </div>
//             </form>
//         </>
//     );
// };

// export default UploadFile;

import axios from "axios";
import React, { useState } from 'react';
import SessionCheck from "../utils/sessionCheck";
import { useRouter } from 'next/router';

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + '/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });

            alert('Profile picture update Successfully!')
            console.log(response.data); // Response from the backend
        } catch (error) {
            console.error('Error uploading file:', error);
            console.error('Axios error details:', error.response); // Log the error response
        }
    };

    return (
        <>
            <input type="file" accept=".jpg, .jpeg, .png, .webp, .gif" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </>
    );
};

export default UploadFile;
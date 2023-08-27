import Link from "next/link";
import Meta from "../meta";
import axios from "axios";
import { useState , useEffect} from "react";
import SessionCheck from "../Component/session";
import { useRouter } from "next/router";

const TourguidAllData =  ( ) => {

  const [jsonData, setJsonData] = useState([]);
   const router = useRouter();

  useEffect(() => {
    loadAllData();
    }, []);
    

    const deleteData = async (tourguidId) => {
        try {
  
            const tourguidId = window.prompt("Enter Tourguid ID : ")
        const response = await axios.delete('http://localhost:3000/traveller/delete/tourguid/' +tourguidId, {

        withCredentials: true

      });
        console.log(response);
        } catch (error) {
        console.error(error);
        }
      }

   
  const loadAllData = async () =>{
    try{
      const respons = await axios.get('http://localhost:3000/traveller/searchtourguid' , {

      withCredentials: true

    });
      const jsonData = respons.data;
      setJsonData(jsonData);
      console.log(jsonData);
      //console.log(respons)
    }catch(error){
      console.log(error);
    }
  }

    return (
      <div>
        <center>
       <SessionCheck/>
       <Meta title="Tourguid List" keywords="ashik" description ="Ashik" />
       <div className="bg-blue-700 p-10 text-white p-4">

<h6 className=" font-bold ">
  TourGuid All Data
</h6>


</div><br></br>
        {/* <Link href="add_tourguid">Add Tourguid By  Traveller</Link><br></br><br></br> */}
        {/* <Link href="delete_tourguid">Delete Tourguid By  Traveller ID</Link><br></br><br></br> */}
        <Link href="update_tourguid"><button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update TourGuid Data</button></Link><br></br><br></br>
        <Link href="tourguid_list"><button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tourguid List</button></Link><br></br><br></br>
        <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link><br></br><br></br>
        {/* <button onClick={loadAllData}> Show Tourguid All Data</button> */}

        <h6><p class="text-4xl text-gray-900 dark:text-white">Show TourGuid All Data</p></h6><br></br>
        {jsonData !== null && (
          <div>
          {Array.isArray(jsonData) ? (
          <div>
          <p></p>
          <ul>
          {jsonData.map((item, index) => (
          <li key={index}>
              {/* ID :{item.id}<br></br>
              Fast Name : {item.fastname} <br></br>
              Last Name :{item.lastname}<br></br>
              Email : {item.email}<br></br>
              Phone : {item.contact}<br></br>
              <b>traveller info ID : {item.travellerID} Number traveller add this tourguid <button type="submit" onClick={(deleteData)} ><button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button></button></b> <br></br>
               */}
              <Link className="w-48 ml-6 h-auto bg-indigo-400 block text-center mt-6" href={"" + item.id}>Nmae : {item.fastname} {item.lastname}  <p className="text-red-600">More info</p></Link>
              <br></br>
          </li>
          ))}
          </ul>
          </div>
          ) : (
          <div>
          <p></p>
          <p>{jsonData}</p>
          </div>
          )}
          </div>
          )}

</center>
      </div>
    )
  }

export default  TourguidAllData

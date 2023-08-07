import Link from "next/link";
import Meta from "../meta";
import axios from "axios";
import { useState , useEffect} from "react";

const ManagerAllData =  () => {

  const [jsonData, setJsonData] = useState([]);


  useEffect(() => {
    loadAllData();
    }, []);
    

    const deleteData = async (managerId) => {
      try {
        const managerId = window.prompt("Enter Manager ID :");
        const response = await axios.delete('http://localhost:3000/admin/delete/manager/'+managerId);
        console.log(response);
      } catch (error) {
      console.error(error);
      }
    }

  const loadAllData = async () =>{
    try{
      const respons = await axios.get('http://localhost:3000/admin/allmanager');
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
       
       <Meta title="Manager List" keywords="fahad" description ="Fahad" />
        <h1>This is manager data</h1>
        <Link href="add_manager">Add Manager By  Admin</Link><br></br><br></br>
        <Link href="delete_manager">Delete Manager By  Admin ID</Link><br></br><br></br>
        <Link href="update_manager">Update Manager Data</Link><br></br><br></br>
        <Link href="/home">Home</Link><br></br><br></br>
        <button onClick={loadAllData}> Show Manager All Data</button>

        <h1>Manager Data</h1>
        {jsonData !== null && (
          <div>
          {Array.isArray(jsonData) ? (
          <div>
          <p>Response is an array:</p>
          <ul>
          {jsonData.map((item, index) => (
          <li key={index}>
              ID :{item.id}<br></br>
              Fast Name : {item.fastname} <br></br>
              Last Name :{item.lastname}<br></br>
              Email : {item.email}<br></br>
              Phone : {item.contact}<br></br>
              <b>admin info ID : {item.adminID} Number admin add this manager </b><Link href="update_manager"><button type="submit">update</button></Link>  <button type="submit" onClick={() => deleteData(9)}>Delete</button> <br></br>
              
              
              <br></br>
          </li>
          ))}
          </ul>
          </div>
          ) : (
          <div>
          <p>Response is an object:</p>
          <p>{jsonData}</p>
          </div>
          )}
          </div>
          )}

        
      </div>
    )
  }

export default  ManagerAllData

              
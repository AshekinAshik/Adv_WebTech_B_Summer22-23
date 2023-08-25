import Link from "next/link";
import Meta from "../meta";
import { NextRequest } from "next/server";
import SessionCheck from "../Component/session";

const TravellerProfile = () => {




    return (
      <center>
      <div>
      <SessionCheck/>
        <Meta title="Profile Page" keywords="ashik" description ="Ashik" />
        <div className="bg-blue-700 p-10 text-white p-4">

          <h6 className=" font-bold ">
            THIS IS TRAVELLER PROFILE
          </h6>


        </div><br></br>

        <Link href="traveller_update"><button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Traveller Data</button></Link><br></br><br></br>
        <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link>

        
      
      </div>
      </center>
    );
  }

export default  TravellerProfile

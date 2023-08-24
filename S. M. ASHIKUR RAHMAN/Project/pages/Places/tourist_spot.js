import Image from "next/image";
import Link from "next/link";
import SessionCheck from "../Component/session";
export default function Content() {
  return (

    
    <center>
      <SessionCheck/>
    <div>
      <div>
        <div>
          <Image
            src="/nature.jpeg"
            alt="Photo"
            height={300}
            width={500}
          />
        </div>
        <div>
           <div>
          <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link>
          </div>
        </div>
      </div>
    </div>
    </center>
  );
}

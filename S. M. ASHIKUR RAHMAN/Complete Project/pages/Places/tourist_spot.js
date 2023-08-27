import Image from "next/image";
import Link from "next/link";
import SessionCheck from "../Component/session";
export default function Content() {
  return (

    
    <center>
      
    <div>
      <div><br></br>
        
        {/* <div>
          <Image
            src="/nature.jpeg"
            alt="Photo"
            height={300}
            width={500}
          />
        </div> */}
        
  

        

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/joss.jpg" alt="">
        </img> </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/cox bazar.jpg" alt="">
        </img></div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/11.jpg" alt="">
        </img></div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/12.jpg" alt="">
        </img> </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/15.webp" alt="">
        </img></div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/45.jpg" alt="">
        </img></div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/56.jpg" alt="">
        </img></div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="/89.jpg" alt="">
        </img> </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="123.jpeg" alt="">
        </img></div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="home.jpg" alt="">
        </img> </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="homee.jpeg" alt="">
        </img> </div>
        <div>
        <img class="h-auto max-w-full rounded-lg" src="nature.jpeg" alt="">
        </img> </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="chair.jpg" alt="">
        </img> </div>
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

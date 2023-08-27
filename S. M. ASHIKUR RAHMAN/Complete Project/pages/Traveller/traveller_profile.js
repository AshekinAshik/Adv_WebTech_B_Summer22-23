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


        

        <div id="default-carousel" class="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-00 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/cox bazar.jpg" alt="...">
            </img></div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/joss.jpg"  alt="...">
            </img></div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/89.jpg"  alt="...">
            </img></div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/15.webp"  alt="...">
            </img> </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/chair.jpg"  alt="...">
            </img></div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
      
      </div>
      </center>
    );
  }

export default  TravellerProfile

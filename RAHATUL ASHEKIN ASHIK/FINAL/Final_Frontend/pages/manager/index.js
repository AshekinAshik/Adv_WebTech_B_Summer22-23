import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import MyFooter from '../layout/footer'
import Title from '../layout/title'

const inter = Inter({ subsets: ['latin'] })

export default function TripConnect() {
  return (
    <>
      <Title name="TRIP CONNECT" />

      <Link href="/manager"> <h1 align="center" className="bg-green-500 text-6xl text-white font-extrabold p-4">TRIP CONNECT</h1> </Link>
      <section class="bg-center p-44 bg-no-repeat bg-[url('https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg')] bg-gray-700 bg-blend-multiply">

        <div class="px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <p class="text-center text-3xl text-white font-normal">Seamlessly plan, organize, and optimize your travel experiences. Ensuring effortless coordination and unforgettable journeys.</p>
          <br></br>
          <p class="text-center text-3xl text-white font-normal"></p>
        </div>

        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link href="/manager/login" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>

        <div>
          <MyFooter />
        </div>
      </section>
    </>
  )
}

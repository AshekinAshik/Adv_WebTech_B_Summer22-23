import Link from "next/link";

const Fotter = () => {
    return(


        <>
           
<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://www.facebook.com/ashikur99?mibextid=ZbWKwL" class="hover:underline">Ashikur Rahman</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="#" class="mr-4 hover:underline md:mr-6">About</Link>
        </li>
        <li>
            <Link href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        <li>
            <Link href="#" class="mr-4 hover:underline md:mr-6">Licensing</Link>
        </li>
        <li>
            <Link href="#" class="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>


        </>
    );
}
export default Fotter
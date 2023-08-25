import Link from "next/link";

const MyFooter = () => {
    return (
        <>
            <footer class="text-black fixed bottom-0 left-0 z-20 w-full p-2 bg-green-200 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span class="text-black text-sm sm:text-center">© 2023 Trip Connect</span>
                <ul class="text-black flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6">About</Link>
                    </li>
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6">Policies</Link>
                    </li>
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#" class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
};

export default MyFooter;
import Link from "next/link";

export default function  DeleteTourguid(){
    return(
        <>
        <form>

            <label>
                Traveller ID
                <input type="number"/>
            </label><br></br><br></br>

            <label>
                Tourguid ID
                <input type="number"/>
            </label><br></br><br></br>

            <button>Delete</button><br></br><br></br>

        </form>
        <Link href="tourguid_list">Tourguid List</Link><br></br><br></br>
        <Link href="/home">Home</Link>
        </>

    )
}
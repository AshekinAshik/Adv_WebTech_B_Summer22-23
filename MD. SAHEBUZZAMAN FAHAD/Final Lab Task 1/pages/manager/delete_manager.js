import Link from "next/link";

export default function  DeleteManeger(){
    return(
        <>
        <form>

            <label>
                Admin ID
                <input type="number"/>
            </label><br></br><br></br>

            <label>
                Manager ID
                <input type="number"/>
            </label><br></br><br></br>

            <button>Delete</button><br></br><br></br>

        </form>
        <Link href="manager_all_data">Manager List</Link><br></br><br></br>
        <Link href="/home">Home</Link>
        </>

    )
}
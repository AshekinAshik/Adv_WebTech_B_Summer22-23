import Link from "next/link";
import SessionCheck from "../Component/session";
export default function  DeleteTravellerid(){
    return(
        <>
        <SessionCheck/>
        <form>

            <label>
                Traveller ID
                <input type="number"/>
            </label><br></br><br></br>

            <label>
                Traveller Name
                <input type="string"/>
            </label><br></br><br></br>

            <button>Delete</button><br></br><br></br>

        </form>
        <Link href="traveller_profile">Traveller Profile</Link><br></br><br></br>
        <Link href="/home">Home</Link>
        </>

    )
}
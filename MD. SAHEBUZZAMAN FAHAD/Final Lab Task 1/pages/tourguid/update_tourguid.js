import { Forum, Linden_Hill } from "next/font/google";
import Link from "next/link";

export default function UpdateTourguid(){
    return(
        <>
        
        <form>

            <label>
                Fast Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            <label>
                last Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            <label>
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            <label>
                Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"/>
            </label><br></br><br></br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Update</button><br></br><br></br>

        </form>
        <Link href="tourguid_list">Tourguid List</Link><br></br><br></br><br></br>
        <Link href="/home">Home</Link>
        
        </>
    )
}
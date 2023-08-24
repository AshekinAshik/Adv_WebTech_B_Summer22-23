import Link from "next/link";
import Meta from "../meta";
import SessionCheck from "../Component/session";

const  DeleteTourguid = () =>{
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log('Form submitted !');
    }

    return(
        <>
        <SessionCheck/>
        <Meta title="Delete Tourguid" keywords="ashik" description ="Ashik" />
        <form onSubmit={handleSubmit}>

            <label>
                traveller ID
                <input type="number" id="name" required/>
            </label><br></br><br></br>

            <label>
                Tourguid ID
                <input type="number" id="name" required/>
            </label><br></br><br></br>

            <button type="submit">Delete</button><br></br><br></br>

        </form>
        <Link href="tourguid_list">Tourguid List</Link><br></br><br></br>
        <Link href="/home">Home</Link>
      </>

    );
};

export default DeleteTourguid
import Link from "next/link";
import Meta from "../meta";

const  DeleteTourguid = () =>{
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log('Form submitted !');
    }

    return(
        <>
        <Meta title="Delete Tourguid" keywords="fahad" description ="Fahad" />
        <form onSubmit={handleSubmit}>

            <label>
                Admin ID
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
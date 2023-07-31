import { useRouter } from "next/router";


const UpdateTravellerForm = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/manager/updateTraveller');
    };

    return (
        <>
            <h2 align="center"> Update Information </h2>
            <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                    <table>
                        <tr>
                            <td>NAME:</td>
                            <td><input type="text" name="traveller_name" placeholder="your name" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="text" name="traveller_email" placeholder="your email" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>CONTACT:</td>
                            <td><input type="text" name="traveller_contact" placeholder="your contact number" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>AGE:</td>
                            <td><input type="number" name="traveller_age" placeholder="your age" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PROFESSION:</td>
                            <td><input type="text" name="traveller_profession" placeholder="your profession" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="traveller_update_submit" value="UPDATE"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default UpdateTravellerForm;
import { useRouter } from "next/router";

const AddTravellerForm = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/manager/addTraveller');
    };

    return (
        <>
            <h2 align="center"> Traveller Information </h2>
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
                            <td>USERNAME:</td>
                            <td><input type="text" name="traveller_username" placeholder="your username" required></input></td> 
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
                            <td>GENDER:</td>
                            <td>
                                <input type="radio" name="traveller_gender" value="Male" /> Male 
                                <input type="radio" name="traveller_gender" value="Female" /> Female 
                                <input type="radio" name="traveller_gender" value="Other" /> Other 
                            </td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PROFESSION:</td>
                            <td><input type="text" name="traveller_profession" placeholder="your profession" required></input></td> 
                        </tr>
                    </table>

                    <br></br>
                    <input type="submit" name="traveller_register_submit" value="REGISTER"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default AddTravellerForm;
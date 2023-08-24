import { useRouter } from "next/router";

const UpdateManagerForm = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/manager/updateManager');
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
                            <td><input type="text" name="manager_name" placeholder="your name" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="text" name="manager_email" placeholder="your email" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>CONTACT:</td>
                            <td><input type="text" name="manager_contact" placeholder="your contact number" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PASSWORD:</td>
                            <td><input type="text" name="manager_password" placeholder="your password" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="manager_update_submit" value="UPDATE"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default UpdateManagerForm;
import { useRouter } from "next/router";

const RemoveTravellerForm = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/manager/removeTraveller');
    };

    return (
        <>
            <h2 align="center"> Removal Information </h2>
            <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                    <table>
                        <tr>
                            <td>Traveller ID:</td>
                            <td><input type="text" name="traveller_id" placeholder="whom to remove" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="traveller_remove" value="REMOVE"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default RemoveTravellerForm;
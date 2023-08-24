import { useRouter } from "next/router";

const AssignTourGuideForm = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/manager/assignTourGuide');
    };

    return (
        <>
            <h2 align="center"> Assigning Detail </h2>
            <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                    <table>
                        <tr>
                            <td>Traveller's ID:</td>
                            <td><input type="number" name="traveller_id" placeholder="traveller's id" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>Tour Guide's ID:</td>
                            <td><input type="number" name="tourguide_id" placeholder="tour guide's id" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="tourguide_assign" value="ASSIGN"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default AssignTourGuideForm;
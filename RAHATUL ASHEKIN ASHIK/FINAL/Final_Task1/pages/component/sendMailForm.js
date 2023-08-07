import { useRouter } from "next/router";

const SendMailForm = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        router.push('/manager/sendMail');
    };

    return (
        <>
            <h2 align="center"> Mail Detail </h2>
            <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                    <table>
                        <tr>
                            <td>Subject:</td>
                            <td><input type="text" name="mail_subject" placeholder="what is it about?" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>Message:</td>
                            <td><input type="text" name="mail_message" placeholder="mail body" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="send_mail" value="SEND"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default SendMailForm;
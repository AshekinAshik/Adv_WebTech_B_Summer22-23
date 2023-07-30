import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "./component/layout";

export default function AddTourGuide () {
    return (
        <>
            <Layout title="Register Tour Guide"/>

            <h1>TRIP CONNECT</h1>
            <div>
                <center>
                    <Link href="updateManager">Update | </Link>
                    <Link href="addTraveller"> Add Traveller | </Link>
                    <Link href="viewTraveller"> View Traveller | </Link>
                    <Link href="updateTraveller"> Modify Traveller | </Link>
                    <Link href="removeTraveller"> Remove Traveller | </Link>
                    <Link href="sendMail"> Mail | </Link>
                    <Link href="addTourGuide"> Add Tour Guide | </Link>
                    <Link href="viewTourGuide"> View Tour Guide | </Link>
                    <Link href="assignTourGuide"> Assign Tour Guide | </Link>
                    <Link href="addHotels"> Hotels | </Link>
                    <Link href="signIn"> Logout | </Link>
                </center>
            </div>
            <br></br><br></br>

            <h2 align="center"> Tour Guide Information </h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table>
                        <tr>
                            <td>NAME:</td>
                            <td><input type="text" name="tourguide_name" placeholder="your name" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>USERNAME:</td>
                            <td><input type="text" name="tourguide_username" placeholder="your username" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="text" name="tourguide_email" placeholder="your email" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>CONTACT:</td>
                            <td><input type="text" name="tourguide_contact" placeholder="your contact number" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>AGE:</td>
                            <td><input type="number" name="tourguide_age" placeholder="your age" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>LOCATION:</td>
                            <select name="tourguide_location">
                                <option value="Dhaka">Dhaka</option>
                                <option value="Bagerhat">Bagerhat</option>
                                <option value="Bandarban">Bandarban</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Barishal">Barishal</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Bogra">Bogra</option>
                                <option value="Brahmanbaria">Brahmanbaria</option>
                                <option value="Chandpur">Chandpur</option>
                                <option value="Chapainawabganj">Chapainawabganj</option>
                                <option value="Chattogram">Chattogram</option>
                                <option value="Chuadanga">Chuadanga</option>
                                <option value="Comilla">Comilla</option>
                                <option value="Cox's Bazar">Cox's Bazar</option>
                                <option value="Dinajpur">Dinajpur</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Feni">Feni</option>
                                <option value="Gaibandha">Gaibandha</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Habiganj">Habiganj</option>
                                <option value="Jamalpur">Jamalpur</option>
                                <option value="Jashore">Jashore</option>
                                <option value="Jhalokati">Jhalokati</option>
                                <option value="Jhenaidah">Jhenaidah</option>
                                <option value="Joypurhat">Joypurhat</option>
                                <option value="Khagrachhari">Khagrachhari</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Kurigram">Kurigram</option>
                                <option value="Kushtia">Kushtia</option>
                                <option value="Lakshmipur">Lakshmipur</option>
                                <option value="Lalmonirhat">Lalmonirhat</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Magura">Magura</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Meherpur">Meherpur</option>
                                <option value="Moulvibazar">Moulvibazar</option>
                                <option value="Munshiganj">Munshiganj</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Naogaon">Naogaon</option>
                                <option value="Narail">Narail</option>
                                <option value="Narayanganj">Narayanganj</option>
                                <option value="Narsingdi">Narsingdi</option>
                                <option value="Natore">Natore</option>
                                <option value="Nawabganj">Nawabganj</option>
                                <option value="Netrokona">Netrokona</option>
                                <option value="Nilphamari">Nilphamari</option>
                                <option value="Noakhali">Noakhali</option>
                                <option value="Pabna">Pabna</option>
                                <option value="Panchagarh">Panchagarh</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Pirojpur">Pirojpur</option>
                                <option value="Rajbari">Rajbari</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Rangamati">Rangamati</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Satkhira">Satkhira</option>
                                <option value="Shariatpur">Shariatpur</option>
                                <option value="Sherpur">Sherpur</option>
                                <option value="Sirajganj">Sirajganj</option>
                                <option value="Sunamganj">Sunamganj</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Tangail">Tangail</option>
                                <option value="Thakurgaon">Thakurgaon</option>
                            </select> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="tourguide_register_submit" value="REGISTER"></input>
                    </center>
                </form>
            </div>
        </>
    )
}
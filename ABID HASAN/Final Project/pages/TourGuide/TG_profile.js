import Layout from "../HLT/layout";
import SessionCheck from "../HLT/sessioncheck";
const { default: Link } = require("next/link");
import Title from "../HLT/title";


const Profile =()=>{


return(

<div className="picture">
<Title page="Profile"></Title>
<SessionCheck/>

<h2 className="profile">THIS IS TOURGUDIE WORKING PROFILE</h2>
<p></p>
<br></br>
<Layout>

</Layout>

</div>

);

}
export default Profile;

// This will be my woring directroy as i will build every link in header and call in here it will transfer me 
// in the every working directory as wanted


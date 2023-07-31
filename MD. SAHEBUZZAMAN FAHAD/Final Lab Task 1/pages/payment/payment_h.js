import Link from "next/link";
import Layout from "../home_header_fotter_content/layout";

export default function PaymentHistory(){
    return(
        <>
        
        <p>All Payment History </p>

        <table>
            <tr>
                <th>ID</th>
                <th>Subcsription</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2 Day</td>
                <td>2000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1 day</td>
                <td>1500</td>
            </tr>
        </table>
        <br></br><br></br><Link href="/home">Home</Link>
       
        </>
    )
}
import Layout from "../layout/layout";
import dynamic from "next/dynamic";
import SessionCheck from "../utils/sessionCheck";

const DynamicAddTravellerForm = dynamic(() => import('../component/addTravellerForm'), { ssr: false });

const AddTravellerPage = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="Register Traveller">
                <div>
                    <DynamicAddTravellerForm />
                </div>
            </Layout>
        </>
    )
};

export default AddTravellerPage;
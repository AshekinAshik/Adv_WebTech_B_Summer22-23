import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const DynamicAddTravellerForm = dynamic(() => import('../component/addTravellerForm'), { ssr: false });

const AddTravellerPage = () => {
    return (
        <>
            <Layout title="Register Traveller">

                <div>
                    <DynamicAddTravellerForm />
                </div>

            </Layout>
        </>
    )
};

export default AddTravellerPage;
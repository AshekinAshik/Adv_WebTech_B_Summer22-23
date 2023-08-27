import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const DynamicUpdateTraveller = dynamic(() => import('../component/updateTravellerForm'), { ssr: false });

const UpdateTravellerPage = () => {
    return (
        <>
            <Layout title="Update Traveller">
                <div>
                    <DynamicUpdateTraveller />
                </div>
            </Layout>
        </>
    )
};

export default UpdateTravellerPage;
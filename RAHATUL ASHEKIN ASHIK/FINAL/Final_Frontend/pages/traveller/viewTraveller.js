import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const DynamicViewTravellerTable = dynamic(() => import('../component/viewTravellerTable'), { ssr: false });

const ViewTravellerPage = () => {
    return (
        <>
            <Layout title="View Traveller">

                <div>
                    <DynamicViewTravellerTable />
                </div>

            </Layout>
        </>
    )
};

export default ViewTravellerPage;
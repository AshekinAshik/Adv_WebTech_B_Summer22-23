import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const DynamicViewTourGuideTable = dynamic(() => import('../component/viewTourGuideTable'), { ssr: false });

const ViewTravellerPage = () => {
    return (
        <>
            <Layout title="View Tour Guide">

                <div>
                    <DynamicViewTourGuideTable />
                </div>

            </Layout>
        </>
    )
};

export default ViewTravellerPage;
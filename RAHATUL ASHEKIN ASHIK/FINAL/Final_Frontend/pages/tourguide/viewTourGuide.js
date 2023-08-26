import Layout from "../layout/layout";
import dynamic from "next/dynamic";
import SessionCheck from "../utils/sessionCheck";

const DynamicViewTourGuideTable = dynamic(() => import('../component/viewTourGuideTable'), { ssr: false });

const ViewTravellerPage = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="View Tour Guide">
                <div>
                    <DynamicViewTourGuideTable />
                </div>
            </Layout>
        </>
    )
};

export default ViewTravellerPage;
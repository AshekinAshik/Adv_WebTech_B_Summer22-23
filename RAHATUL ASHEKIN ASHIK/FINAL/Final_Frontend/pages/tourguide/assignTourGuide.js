import Layout from "../layout/layout";
import dynamic from "next/dynamic";
import SessionCheck from "../utils/sessionCheck";

const DynamicAssignTourGuideForm = dynamic(() => import('../component/assignTourGuideForm'), { ssr: false });

const AssignTourGuidePage = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="Assign Tour Guide">
                <div>
                    <DynamicAssignTourGuideForm />
                </div>
            </Layout>
        </>
    )
};

export default AssignTourGuidePage;
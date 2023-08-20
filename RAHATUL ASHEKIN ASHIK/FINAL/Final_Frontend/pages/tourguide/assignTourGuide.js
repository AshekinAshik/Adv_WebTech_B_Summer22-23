import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const DynamicAssignTourGuideForm = dynamic(() => import('../component/assignTourGuideForm'), { ssr: false });

const AssignTourGuidePage = () => {
    return (
        <>
            <Layout title="Assign Tour Guide">

                <div>
                    <DynamicAssignTourGuideForm />
                </div>

            </Layout>
        </>
    )
};

export default AssignTourGuidePage;
import Layout from "../layout/layout";
import dynamic from "next/dynamic";
import SessionCheck from "../utils/sessionCheck";

const DynamicAddTourGuideForm = dynamic(() => import('../component/addTourGuideForm'), { ssr: false });

const AddTourGuidePage = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="Register Tour Guide">
                <div>
                    <DynamicAddTourGuideForm />
                </div>
            </Layout>
        </>
    )
};

export default AddTourGuidePage;
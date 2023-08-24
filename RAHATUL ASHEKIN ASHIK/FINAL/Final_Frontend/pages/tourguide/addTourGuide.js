import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const DynamicAddTourGuideForm = dynamic(() => import('../component/addTourGuideForm'), { ssr: false });

const AddTourGuidePage = () => {
    return (
        <>
            <Layout title="Register Tour Guide">

                <div>
                    <DynamicAddTourGuideForm />
                </div>

            </Layout>
        </>
    )
};

export default AddTourGuidePage;
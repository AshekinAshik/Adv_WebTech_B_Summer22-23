import dynamic from "next/dynamic";
import Layout from "../layout/layout";
import SessionCheck from "../utils/sessionCheck";

const DynamicUpload = dynamic(() => import('../component/uploadFile'), { ssr: false });

const AddHotelsPage = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="Register Hotels">

                <div>
                    <DynamicUpload />
                </div>

            </Layout>
        </>
    )
};

export default AddHotelsPage;
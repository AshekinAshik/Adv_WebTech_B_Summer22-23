import dynamic from "next/dynamic";
import Layout from "../layout/layout";
import SessionCheck from "../utils/sessionCheck";

const DynamicAddHotelsForm = dynamic(() => import('../component/addHotelsForm'), { ssr: false });

const AddHotelsPage = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="Register Hotels">

                <div>
                    <DynamicAddHotelsForm />
                </div>

            </Layout>
        </>
    )
};

export default AddHotelsPage;
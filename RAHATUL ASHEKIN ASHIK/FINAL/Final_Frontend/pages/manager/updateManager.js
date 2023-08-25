import dynamic from "next/dynamic";
import Layout from "../layout/layout";
import SessionCheck from "../utils/sessionCheck";

const DynamicUpdateManager = dynamic(() => import('../component/updateManagerForm'), { ssr: false });

const UpdateManagerPage = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="Update Manager">
                <div>
                    <DynamicUpdateManager />
                </div>
            </Layout>
        </>
    )
};

export default UpdateManagerPage;
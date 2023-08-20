import dynamic from "next/dynamic";
import Layout from "../layout/layout";

const DynamicUpdateManager = dynamic(() => import('../component/updateManagerForm'), { ssr: false });

const UpdateManagerPage = () => {
    return (
        <>
            <Layout title="Update Manager">

                <div>
                    <DynamicUpdateManager />
                </div>

            </Layout>
        </>
    )
};

export default UpdateManagerPage;
import dynamic from "next/dynamic";
import Layout from "../layout/layout";

const DynamicAddHotelsForm = dynamic(() => import('../component/addHotelsForm'), { ssr: false });

const AddHotelsPage = () => {
    return (
        <>
            <Layout title="Register Hotels">

                <div>
                    <DynamicAddHotelsForm />
                </div>

            </Layout>
        </>
    )
};

export default AddHotelsPage;
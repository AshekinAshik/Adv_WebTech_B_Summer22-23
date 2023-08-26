import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const DynamicRemoveTravellerForm = dynamic(() => import('../component/removeTravellerForm'), { ssr: false });

const RemoveTravellerPage = () => {
    return (
        <>
            <Layout title="Remove Traveller">
                <div>
                    <DynamicRemoveTravellerForm />
                </div>
            </Layout>
        </>
    )
};

export default RemoveTravellerPage;
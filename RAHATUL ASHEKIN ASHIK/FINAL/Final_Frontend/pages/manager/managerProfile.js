import dynamic from "next/dynamic";
import Layout from "../layout/layout";
import SessionCheck from "../utils/sessionCheck";

const DynamicManagerProfile = dynamic(() => import('../component/managerProfileForm'), { ssr: false });

const ManagerProfile = () => {
    return (
        <>
            <Layout title="Profile">
                <SessionCheck />

                <div>
                    <DynamicManagerProfile />
                </div>
            </Layout>
        </>
    )
};

export default ManagerProfile;
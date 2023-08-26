import dynamic from "next/dynamic";
import Layout from "../layout/layout";
import SessionCheck from "../utils/sessionCheck";

const DynamicUploadFile = dynamic(import('../component/uploadFile'));

const UploadFileManager = () => {
    return (
        <>
            {/* <SessionCheck /> */}

            <Layout title="File Upload - Manager">
                <div>
                    <DynamicUploadFile />
                </div>
            </Layout>
        </>
    )
};

export default UploadFileManager;
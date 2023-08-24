import dynamic from "next/dynamic";
import Layout from "../layout/layout";

const DynamicUploadFile = dynamic(import('../component/uploadFile'));

const UploadFileManager = () => {
    return (
        <>
            <Layout title="File Upload - Manager">

                <div>
                    <DynamicUploadFile />
                </div>

            </Layout>
        </>
    )
};

export default UploadFileManager;
import Head from "next/head";

const HeaderForSigns = (props) => {
    return (
        <>
            <Head>
                <title> {props.title} </title>
            </Head>
        </>
    )
};

export default HeaderForSigns;
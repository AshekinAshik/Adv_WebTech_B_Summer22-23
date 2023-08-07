import Head from "next/head";

const HeaderSeparate = (props) => {
    return (
        <>
            <Head>
                <title> {props.title} </title>
            </Head>
        </>
    )
};

export default HeaderSeparate;
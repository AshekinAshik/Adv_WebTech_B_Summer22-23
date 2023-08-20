import Head from "next/head";

const Title = (props) => {
    return (
        <>
            <Head>
                <title> {props.name} </title>
            </Head>
        </>
    )
};

export default Title;
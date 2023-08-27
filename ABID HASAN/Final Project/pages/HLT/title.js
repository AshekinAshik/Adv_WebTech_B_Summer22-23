import Head from "next/head";
const Title =(props)=>{

    return(
        <>
        <Head>
            <title>{props.page ? props.page:<p>ok</p>}-Pages</title>
        </Head>
        
        </>
    )
}

export default Title;




































// import Head from "next/head";
// import React from "react";
// const Title=({fast,keywords,description})=> {

//     return(
//     <React.Fragment>
    
//     <Head>
// {/* <title> {props.page} -Page  </title> */}
//     <meta charSet="utf-8"/>
//             <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
//             <meta name="viewport" content="width=device-width, initail-scale=1"/>
//             <meta name="description" content={description}/>
//             <meta name="keywords" content={keywords}/>
    
//     </Head>
//     </React.Fragment>
    
//     );
    
    
//     }

//     Title.defaultProps ={
//         fast:"Travel Vlogger",
//         keyword:"travel,vlogs",
//         description:"This is travel vloger Page"
//     }
// export default Title
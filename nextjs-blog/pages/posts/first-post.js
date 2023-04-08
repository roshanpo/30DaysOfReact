import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../styles/components/layout";


export default function(){
    return <>
    <Layout>
    <Head>
        <title>First Post</title>
        {/* <
            Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnLoad"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
              }
            /> */}
    </Head>
    <h1>My first post!</h1>

    <h2>
        <Link href='/'>Back to Home</Link>
    </h2>
    </Layout>
    </>
}
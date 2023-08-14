import Heading from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Error(){

    const router = useRouter();

    useEffect(()=> {

        setTimeout(()=>{
            router.push('/')
        }, 3000)

    }, [router])

    return (
        <>
            <Head>
                <title>List</title>
            </Head>
            <Heading text="404"/>
            <Heading text="Something going wrong"/>
        </>
    )
}
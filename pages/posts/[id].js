import Head from "next/head";
import Heading from "../../components/Heading";
import Contactinfo from "../../components/contacts/Contactinfo";

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { contact: data },
    };
};

export default function Post({contact}) {

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Contactinfo contact={contact}/>
        </>
    );
}

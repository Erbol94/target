import Heading from "../../components/Heading";
import Head from "next/head";
import Link from 'next/link';

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
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

export default function Posts({ contact }) {

    return (
        <>
            <Head>
                <title>List</title>
            </Head>
            <Heading text="Posts page" />
            <ul>
                {contact &&
                    contact.map(({ id, name, email }) => {
                        return (
                            <li>
                               <Link href={`/posts/${id}`}>
                                    {name} -- ({email})
                               </Link>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}

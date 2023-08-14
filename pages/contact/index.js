import Heading from "../../components/Heading"
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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


const Contact = ({contact}) => {

    return (
        <>
            <Heading tag='h3' text='Contact page'/>
            <ul>
                {console.log(contact)}
                {contact && contact.map(({id, title}) => {
                    return (
                        <li key={id}>
                            <Link href={`/contact/${id}`}><strong>{title}</strong></Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )

}

export default Contact;

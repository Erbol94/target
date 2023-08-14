import Heading from "../../components/Heading"
import Postinfo from "../../components/post/Postsinfo";

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
  
    const paths = data.map(({ id }) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async (context) => {
    const { id } = context.params 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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


const Contacts = ({contact}) => {

    return (
        <>
            <Heading tag='h3' text={contact.title}/>
            <Postinfo contact={contact} />
        </>
    )

}

export default Contacts;
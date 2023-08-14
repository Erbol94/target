import Heading from "../Heading";

const Postinfo = ({contact}) => {
    const {id, body, title} = contact || {};

    if(!contact){
        return <Heading tag="h3" text="Empty contact"/>
    }

    return (
        <>
            <div>
                <strong>Title: </strong>
                {title}
            </div>
            <div>
                <strong>Body: </strong>
                {body}
            </div>
        </>
    )

}

export default Postinfo;
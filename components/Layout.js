import Header from "./Header";
import Footer from "./Footer"

export default function Lyaout({children}){

    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}

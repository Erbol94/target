import style from '../styles/Navbar.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router'
import Image from 'next/image';

const navigation = [
    {id: 1, title: 'Home' , path:'/'},
    {id: 2, title: 'Posts' , path:'/posts'},
    {id: 3, title: 'Contacts' , path:'/posts/post'}
]

const Navbar = () => {

    const {pathname} = useRouter();

    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <Image src='/Group.png' width="60" height="60" alt="logo"/>
            </div>
            <div>
                {console.log(pathname)}
                {navigation.map(({id, title, path}) => {
                    <Link key={id} href={path}>
                        <a className={pathname === path ? style.active : null } >{title}</a>   
                    </Link>
                })}
                <Link href="/">
                    Home 
                </Link>
                <Link href="/posts">
                     Posts
                </Link>
                <Link href="/contact">
                    Contacts
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
import Link from "next/link"

export default function Header(){
    return(
        <header>

            <ul>
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/About'}>about</Link></li>
            </ul>
        </header>
    )
}
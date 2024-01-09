import Link from "next/link"
import styles from './Footer.module.css'

export default function Footer() {

    return(
        <>
            <footer className={styles.Footer}>
                <div>
                    Created by Ben
                </div>
                <ul>
                    <li><Link href={'/'}>home</Link></li>
                    <li><Link href={'/About'}>about</Link></li>
                </ul>
            </footer>
        </>
    )
}
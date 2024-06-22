import styles from "../styles/headerComp.module.css"
import Link from 'next/link'

export default function HeaderComp({ title, description, image, url }) {
    const handleClick = () => {
        window.location.href = url;
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>{title}</h1>
                <p>{description}</p>
                <li>
                    <Link href={url}>Home</Link>
                </li>
            </div>
            
            <div className={styles.right}>
                <img src={image} alt={title} />
            </div>
        </div>
    );
}

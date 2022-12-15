import Image from 'next/image'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__content}>
                    <a href="/" className={styles.header__home}>
                        <picture className={styles.header__picture}>
                            <Image src="/fitdevs-logo.svg" alt="FitDevs Logo" width={143} height={24} />
                        </picture>
                    </a>
                    
                    <div className={styles.header__socials}>
                        <ul>
                            <li><a href="https://discord.gg/rUKrTCgxa5" target="_blank" rel="noopener noreferrer"><span className="sr-only">Discord</span><i className="fa-brands fa-discord"></i></a></li>
                            <li><a href="https://github.com/FitDevs-withKat" target="_blank" rel="noopener noreferrer"><span className="sr-only">GitHub</span><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://twitter.com/search?q=%23FitDevs&src=typed_query" target="_blank" rel="noopener noreferrer"><span className="sr-only">Twitter</span><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
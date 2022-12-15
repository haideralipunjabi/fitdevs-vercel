import styles from '../styles/Footer.module.css'

function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__copyright}>
                        <p>© Copyright 2022-{(new Date().getFullYear())}</p>
                    </div>
                    <div className={styles.footer__socials}>
                        <ul>
                            <li><a href="https://discord.gg/rUKrTCgxa5" target="_blank" rel="noopener noreferrer"><span className="sr-only">Discord</span><i className="fa-brands fa-discord"></i></a></li>
                            <li><a href="https://github.com/FitDevs-withKat" target="_blank" rel="noopener noreferrer"><span className="sr-only">GitHub</span><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://twitter.com/search?q=%23FitDevs&src=typed_query" target="_blank" rel="noopener noreferrer"><span className="sr-only">Twitter</span><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
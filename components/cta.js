import styles from '../styles/cta.module.css'

function Cta() {
    return(
        <>
             <section className={styles.cta}>
                <div className={styles.cta__content}>
                    <h3 className={styles.cta__title + "center"}>Join Our Community</h3>
                    <p className={styles.cta__subtitle + "subtitle"}>Over 400+ developer accountability partners to go through this journey together!</p>
                    <div className={styles.cta__socials}>
                        <ul>
                            <li><a href="https://discord.gg/rUKrTCgxa5" target="_blank" rel="noopener noreferrer"><span className="sr-only">Discord</span><i className="fa-brands fa-discord"></i></a></li>
                            <li><a href="https://github.com/FitDevs-withKat" target="_blank" rel="noopener noreferrer"><span className="sr-only">GitHub</span><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://twitter.com/search?q=%23FitDevs&src=typed_query" target="_blank" rel="noopener noreferrer"><span className="sr-only">Twitter</span><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
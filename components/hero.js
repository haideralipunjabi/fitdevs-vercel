import Frame from '../public/images/svg-frame.svg'
import styles from '../styles/Hero.module.css'

function Hero() {
    return(
        <>
            <section className={styles.hero}>
                <div className={styles.hero__content}>
                    <h1 className={styles.hero__title}>Welcome to #FITDEVS</h1>
                    <p className={styles.hero__blurb}>Empower developers to explore, maintain, and inspire fitness in our collective lives.</p>
                    <a href="#events" className={"button button--yellow"}>View Upcoming Events</a>
                </div>
                <div className={styles.hero__frame} style={{backgroundImage: 'url(' + Frame.src + ')' }}>
                    <img className={styles.hero__image} src="/images/resize-pexels-jonathan-petersson-1076180.jpg" alt="Green forest hill with a lake in the background." />
                </div>
            </section>
        </>
    )
}

export default Hero
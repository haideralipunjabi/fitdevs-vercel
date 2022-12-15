import styles from '../styles/Testimonials.module.css'

function Testimonials() {
    return(
        <>
            <section className="section">
                <div className="icon-heading">
                    <div className="icon-heading__icon">
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                    <h2>Testimonials</h2>
                </div>
                <section className={styles.testimonials}>
                    <div className={styles.testimonials__content}>
                    <div className={styles.testimonials__statemenet + " " + styles.a}>
                        <div className={styles.testimonials__header}>
                        <picture className={styles.testimonials__pfp}>
                            <img src="/images/josh.webp" alt="Joshua Hallee profile picture" />
                        </picture>
                        <div className={styles.testimonials__meta}>
                            <h3 className={styles.testimonials__author + " heading-5"}>Joshua Hallee</h3>
                            <span className={styles.testimonials__subtitle}>Community Member</span>
                        </div>
                        </div>
                        <p className={styles.testimonials__quote}>When I joined #FitDevs I was astonished to find a community that celebrates even the smallest of goals. Whether it’s a basic workout, or something challenging, someone is always there to hold you accountable and cheer you on from the sidelines. This community inspires me on a daily basis, and I couldn’t be anymore grateful to be a part of it.</p>
                    </div>
                    <div className={styles.testimonials__statemenet + " " + styles.b}>
                        <div className={styles.testimonials__header}>
                        <picture className={styles.testimonials__pfp}>
                            <img src="/images/parker.webp" alt="Parker profile picture" />
                        </picture>
                        <div className={styles.testimonials__meta}>
                            <h3 className={styles.testimonials__author + " heading-5"}>Parker</h3>
                            <span className={styles.testimonials__subtitle}>Community Member</span>
                        </div>
                        </div>
                        <p className={styles.testimonials__quote}>Since joining I look forward to having a community of devs to share my journey with. The support from everyone as we all make progress towards our individual goals is incredibly encouraging. #FitDevs give all the motivation you need to crush it!</p>
                    </div>
                    <div className={styles.testimonials__statemenet + " " + styles.c}>
                        <div className={styles.testimonials__header}>
                        <picture className={styles.testimonials__pfp}>
                            <img src="/images/kyle.webp" alt="Kyle profile picture" />
                        </picture>
                        <div className={styles.testimonials__meta}>
                            <h3 className={styles.testimonials__author + " heading-5"}>Kyle</h3>
                            <span className={styles.testimonials__subtitle}>Community Member</span>
                        </div>
                        </div>
                        <p className={styles.testimonials__quote}>I joined #fitdevs because I admired the passion that @katalystkat had for health and for this community. I knew immediately that I had made the right decision joining when I felt passion and support from other members of the community. It's not very often that you get to join something and immediately feel like you belong.</p>
                    </div>
                    <div className={styles.testimonials__statemenet + " " + styles.d}>
                        <div className={styles.testimonials__header}>
                        <picture className={styles.testimonials__pfp}>
                            <img src="/images/324hz.webp" alt="324Hz profile picture" />
                        </picture>
                        <div className={styles.testimonials__meta}>
                            <h3 className={styles.testimonials__author + " heading-5"}>324Hz</h3>
                            <span className={styles.testimonials__subtitle}>Community Member</span>
                        </div>
                        </div>
                        <p className={styles.testimonials__quote}>After joining this amazing small (but growing) community, I saw that motivation for even the smallest things was the main goal as well as holding accountable so that you have at least the motivation to for example run and #FitDevs managed to hit all of those awesome qualities!</p>
                    </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Testimonials
import styles from '../styles/Timeline.module.css'

function Timeline() {
    return(
        <>
            <section className={styles.timeline}>
                <div className={styles.timeline__content}>
                    <h2 className="center">Our Journey</h2>
                    <div className={styles.story}>
                        <div className={styles.story__content}>
                            <span className={styles.story__title}>#FitDevs First Official Twitter Space</span>
                            <p>July-20-2022</p>
                            <p className={styles.story__blurb}>Kat hosted our very first twitter space dedicated to #FitDevs with amazing speakers (Eddie, Sara, Deni, TechRally, Yuri, Francesco, and open mic invitations!) to discuss publicly what #FitDevs is and how we are building this community together</p>
                        </div>
                        <div className={styles.story__icon}>
                            <i className="fa-solid fa-bullhorn"></i>
                        </div>
                    </div>
                    <div className={styles.story}>
                        <div className={styles.story__content}>
                            <span className={styles.story__title}>Discord Released for Public Entry</span>
                            <p>July-20-2022</p>
                            <p className={styles.story__blurb}>The official discord server was open for people to join, we are officially open for collaboration!</p>
                        </div>
                        <div className={styles.story__icon}>
                            <i className="fa-solid fa-bullhorn"></i>
                        </div>
                    </div>
                    <div className={styles.story}>
                        <div className={styles.story__content}>
                            <span className={styles.story__title}>100th User in Discord Server Joined!</span>
                            <p>July-22-2022</p>
                            <p className={styles.story__blurb}>Our first mini milestone was reached with 100 users joining!</p>
                        </div>
                        <div className={styles.story__icon}>
                            <i className="fa-solid fa-person"></i>
                        </div>
                    </div>
                    <div className={styles.story}>
                        <div className={styles.story__content}>
                            <span className={styles.story__title}>Live Stream to Publicly Build Github Repository</span>
                            <p>July-23-2022</p>
                            <p className={styles.story__blurb}>Today there was an exciting livestream by Eddie hosting guests of Kat and Francesco to build our GitHub Repository together on youtube! We gave a live demo on how to make your first pull request and gave a behind the scenes demonstration of how the organization is maintained on GitHub!</p>
                        </div>
                        <div className={styles.story__icon}>
                            <i className="fa-solid fa-video"></i>
                        </div>
                    </div>
                    <div className={styles.story}>
                        <div className={styles.story__content}>
                            <span className={styles.story__title}>Twitter Bot @Fit_Devs LIVE</span>
                            <p>TBD</p>
                            <p className={styles.story__blurb}>Publicly built twitter bot to go live on twitter to like and retweet all users using our #FitDevs hashtag!</p>
                        </div>
                        <div className={styles.story__icon}>
                            <i className="fa-solid fa-calendar"></i>
                        </div>
                    </div>
                    <div className={styles.story}>
                        <div className={styles.story__content}>
                            <span className={styles.story__title}>Discord Bot LIVE</span>
                            <p>TBD</p>
                            <p className={styles.story__blurb}>Publicly built discord bot to go live on discord just in time for us to start leaderboards for #FitDevs challenges!</p>
                        </div>
                        <div className={styles.story__icon}>
                            <i className="fa-solid fa-calendar"></i>
                        </div>
                    </div>
                    <div className={styles.story}>
                        <div className={styles.story__content}>
                            <span className={styles.story__title}>1000th User to Join #FitDevs</span>
                            <p>TBD</p>
                            <p className={styles.story__blurb}>Upon 1000 users, we get T-Shirts to promote our EMI concepts :)</p>
                        </div>
                        <div className={styles.story__icon}>
                            <i className="fa-solid fa-calendar"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Timeline
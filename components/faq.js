import styles from '../styles/Faq.module.css'

function Faq() {
    return(
        <>
            <section className={styles.faq}>
                <h2 className="center">Get Started</h2>
                <div className={styles.faq__question}>
                    <div className={styles.faq__header}>
                        <h3>Why #FitDevs exists</h3>
                    </div>
                    <div className={styles.faq__answer}>
                        <p>#FitDevs was created because we want to empower developers to explore, maintain, and inspire fitness in our collective lives.</p>
                    </div>
                </div>
                <div className={styles.faq__question}>
                    <div className={styles.faq__header}>
                        <h3>How #FitDevs plan to empower developers to EMI-fitness as a community</h3>
                    </div>
                    <div className={styles.faq__answer}>
                        <p>We plan to achieve our goals by building an open and inclusive community on Twitter, Discord, and Github altogether as a collaborative effort by our community of developers. We want this to be an open sourced project with everyone contributing however they can, whether it's by a tweet, by maintaining our github together, or by inspiring others with their recipes or workout photos and achievements! All hands on deck, this is a community project!</p>
                    </div>
                </div>
                <div className={styles.faq__question}>
                    <div className={styles.faq__header}>
                        <h3>What #FitDevs is doing to achieve our goals!</h3>
                    </div>
                    <div className={styles.faq__answer}>
                        <p><span className="bold">Twitter</span> : We are publicly utilizing the #FitDevs hashtag to showcase different methods and mediums of how developers can prioritize their health, and to promote this lifestyle among techtwitter.</p>
                        <p><span className="bold">Discord</span> : We created a server open to the public that is more casual and close knit for devs to hang out and keep each other accountable with our fitness journey.</p>
                        <p><span className="bold">Github</span> : We established an open sourced project for developers to build this community with us, from the ground up, and to utilize it as a source to continuously commit and document our collective achievements.</p>
                    </div>
                </div>
                <div className={styles.faq__question}>
                    <div className={styles.faq__header}>
                        <h3>Join Our Journey!</h3>
                    </div>
                    <div className={styles.faq__answer}>
                        <p><span className="bold">Twitter</span> : Use our hashtag <a href="https://twitter.com/search?q=%23fitdevs&src=typed_query&f=live" target="_blank" rel="noopener noreferrer">#FitDevs</a> and tag <a href="https://twitter.com/katalyst_katt" target="_blank" rel="noopener noreferrer">@katalyst_katt</a> & your friends! Also please follow <a href="https://twitter.com/Fit_Devs" target="_blank" rel="noopener noreferrer">@Fit_Devs</a> so that you will receive important announcements in the future regarding our competitions and events!</p>
                        <p><span className="bold">Discord</span> : Join our <a href="https://discord.com/invite/AY8sgsAk5H" target="_blank" rel="noopener noreferrer">community</a>. Join a team and start building this community with us, while sharing your fitness journey in our inspiration-maintenance channels!</p>
                        <p><span className="bold">GitHub</span> : Star our <a href="https://github.com/FitDevs-withKat" target="_blank" rel="noopener noreferrer">organization</a> & head on over to our fitness-accountability repository to add your name to our data Folder! Fork any projects you would like to contriute to. We also have a <a href="https://github.com/FitDevs-withKat/.github/discussions" target="_blank" rel="noopener noreferrer">discussions</a> page that welcomes inputs from our wonderful community!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
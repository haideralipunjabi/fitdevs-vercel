import { useEffect } from 'react'
import styles from '../styles/Twitter.module.css'

function Twitter() {
    return(
        <>
            <section className={styles.twitter + " section"}>
                <div className="icon-heading">
                    <div className="icon-heading__icon">
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                    <h2>See What #FitDevs are Tweeting!</h2>
                </div>
                <div className={styles.twitter__content}>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Good morning <a href="https://twitter.com/hashtag/FitDevs?src=hash&amp;ref_src=twsrc%5Etfw">#FitDevs</a>! I walk my dogs daily for both their &amp; my benefits: <br /><br />1) warms up my body 🧘‍♀️ <br />2) we say hi to all our neighbors (humans and dogs alike) 👯‍♀️<br />3) I catch up on texts/calls w my family members 🏡<br />4) pups get their daily enrichment 🧠<br /><br />Have a lovely weekend, EMI💕 <a href="https://t.co/zfBcD0Vn1a">pic.twitter.com/zfBcD0Vn1a</a></p>&mdash; katalyst kat (@katalyst_katt) <a href="https://twitter.com/katalyst_katt/status/1553439468673085440?ref_src=twsrc%5Etfw">July 30, 2022</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">When you miss your laptop but <a href="https://twitter.com/SaraJaoude?ref_src=twsrc%5Etfw">@SaraJaoude</a> gives you a reality check 😂 <a href="https://twitter.com/hashtag/FitDevs?src=hash&amp;ref_src=twsrc%5Etfw">#FitDevs</a> <a href="https://t.co/4VUUYC8gAh">pic.twitter.com/4VUUYC8gAh</a></p>&mdash; Eddie Jaoude | GitHub Star (@eddiejaoude) <a href="https://twitter.com/eddiejaoude/status/1552862492048740352?ref_src=twsrc%5Etfw">July 29, 2022</a></blockquote>
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">As a developer, how do you like to stay fit?<br /><br />Me:<br />- Not overeating<br />- Not too much sugar<br />- Not too much stress (it leads to over eating)<br />- Regular walks &amp; workouts<a href="https://twitter.com/hashtag/fitdevs?src=hash&amp;ref_src=twsrc%5Etfw">#fitdevs</a> <a href="https://t.co/MDCagjrXvM">pic.twitter.com/MDCagjrXvM</a></p>&mdash; YK aka CS Dojo 📺🐦 (@ykdojo) <a href="https://twitter.com/ykdojo/status/1551596889887256577?ref_src=twsrc%5Etfw">July 25, 2022</a></blockquote>
                </div>
            </section>
        </>
    )
}

export default Twitter
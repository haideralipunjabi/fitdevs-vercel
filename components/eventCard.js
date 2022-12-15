import { useEffect } from 'react';
import styles from '../styles/Events.module.css'

function EventCard({ event }) {

    // convert event to local users time
    let eventStart = new Date(event.scheduled_start_time)
    let formattedStartDate = new Date(eventStart.toLocaleString())

    // convert month (number) to month (string)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]
    const month = monthNames[formattedStartDate.getMonth()]

    const day = formattedStartDate.getDate()

    // convert weekday (number) to weekday (string)
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekday = weekdayNames[formattedStartDate.getDay()]

    // start hour timestamp
    let hours = formattedStartDate.getHours()
    let minutes = formattedStartDate.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes
    const time = hours + ':' + minutes + ' ' + ampm


    const imageUrl = `https://cdn.discordapp.com/guild-events/${event.id}/${event.image}?size=512`
    
    const eventUrl = (event.entity_metadata) ? event.entity_metadata.location : ''
    const eventHostname = (event.entity_metadata) ? new URL(eventUrl) : ''

    return(
        <>
            <article className={styles.event}>
        
                <div className={styles.event__featured}>
                    <picture className={styles.event__picture}>
                        {(event.image) ? <img src={imageUrl} alt={event.title} /> : <img src="./images/city-overlook.jpg" alt={event.title} />}
                    </picture>
                    
                    {(event.entity_metadata) ? <div className={styles.event__pill}>{eventHostname.hostname}</div> : <div className={styles.event__pill}>discord.com</div>}
                </div>
                <div className={styles.event__content}>
                    <h3 className={styles.event__title + " heading-5"}>
                        {(eventUrl ? <a href={eventUrl}>{event.name}</a> : <a href="https://discord.gg/rUKrTCgxa5">{event.name}</a>)}
                    </h3>
                    <div className={styles.event__details}>
                        <div className={styles.event__month}>
                            <span className={styles.event__emph}>{month}</span>
                            <span className={styles.event__emph}>{day}</span>
                        </div>
                        <div className={styles.event__day}>
                            <div className={styles.event__daytime}>
                                <span className={styles.event__emph}>{weekday}</span>
                                <span className={styles.event__time}>{time}</span>
                            </div>
                            <div className={styles.event__icon}>
                                <i className="fa-solid fa-calendar-check"></i>
                            </div>
                        </div>
                    </div>
                    <span className={styles.event__subtitle}>Event Details</span>
                    <p className={styles.event__description}>{event.description}</p>

                    {(eventUrl) ? <a href={eventUrl} target="_blank" rel="noopener noreferrer" className={styles.event__cta}>Go to Event <i className="fa-solid fa-arrow-up-right-from-square"></i></a> : <a href="https://discord.gg/rUKrTCgxa5" target="_blank" rel="noopener noreferrer" className={styles.event__cta}>Go to Event <i className="fa-solid fa-arrow-up-right-from-square"></i></a>}

                    
                </div>
            </article>
        </>
    )
}

export default EventCard
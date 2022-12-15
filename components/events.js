import styles from '../styles/Events.module.css'
import EventCard from './eventCard'

function Events({ events }) {
    return(
        <>
            <section className="section" id="events">
                <div className="icon-heading">
                    <div className="icon-heading__icon">
                        <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <h2>Upcoming Events</h2>
                </div>
                <div className={styles.events}>
                    <div className={styles.events__content}>
                        {(!events.message) ? events.map((event) => <EventCard event={event} key={event.id} />) : <p>No events are scheduled at this time.</p>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events

import style from './event-card.module.css';

export default function EventCard() {
    return <section className={style.eventcard}>
        <div>
            <p>Sept 19</p>
        </div>
        <div>
            <p>Thursday - 19:00</p>
            <p>London</p>
            <p>Jazz Cafe</p>
        </div>
    </section>
}
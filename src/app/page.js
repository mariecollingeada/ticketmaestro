import EventCard from './components/EventCard.js'

export default function Page() {

  return (
    <section>
      <h1>Welcome to the home ...</h1>
      <EventCard month="Feb" day="Monday" venue="Blues Kitchen" time="20:00" date="15" />
      <EventCard month="April" day="Tuesday" venue="02 Arena"  time="21:00" date="4" />
    </section>
  );
}

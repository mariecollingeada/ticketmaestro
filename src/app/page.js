import EventCard from './components/EventCard.js'

export default function Page() {

  return (
    <section>
      <h1>Welcome to the home ...</h1>
      <EventCard month="Feb" day="Monday" venue="Blues Kitchen" />
      <EventCard />
    </section>
  );
}

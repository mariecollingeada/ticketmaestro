import EventCard from './EventCard.jsx';

console.log(process.env.TICKETMASTER_API_KEY + "API KEY");

async function fetchEvents() {
  const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETMASTER_API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  let data = await response.json();
  return data._embedded.events;
}

export default async function EventList() {
  let events = await fetchEvents();

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.key} {...event} />
      ))}
    </div>
  );
}

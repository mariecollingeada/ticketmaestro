export default function EventCard(props) {
  const date = new Date(props.dates.start.dateTime);
  const month   = date.getUTCMonth() + 1;
  const day = date.getDate();
  const venue = props._embedded.venues[0].name;
  const city = props._embedded.venues[0].city.name;


  return (
    <div key={props.id} className="event-card">
      <div className="event-date">
        {getMonthName(month)}
        <span>{day}</span>
      </div>
      <ul className="event-details">
        <li className="event-name">{props.name}</li>
        <li className="event-location">{city}</li>
        <li className="event-venue">{venue}</li>
        {props.onPartnerSite && <li className="event-partner-site">On Partner Site</li>}
      </ul>
      <a href={props.url} className="event-link">
        Find tickets
      </a>
    </div>
  );
}

function getMonthName(monthNumber) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    return 'Invalid month';
  }

  return monthNames[monthNumber - 1];
}


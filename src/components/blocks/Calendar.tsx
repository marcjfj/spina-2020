export default function Calendar({ days }) {
  return ( 
  <section className="calendar">
    <div className="calendarWrapper">
      <h2> Calendar </h2>
        <div className="calendarBullets">
        <ul className="calendarList">
          {days.map((i) => (
            <li className="date">
              <span className="actually-the-date">{i.Date}</span>
              <span className="hours">{i.hours}</span>
            </li>
          ))}
        </ul>
        </div>
    </div>
  </section>
  );
}

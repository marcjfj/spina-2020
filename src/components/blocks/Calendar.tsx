export default function Calendar({ days }) {
  return ( 
    <section className="calendar">
    <div className="calendarWrapper">
      <h2> Calendar </h2>
        <div className="calendarBullets">
        <ul className="calendarList">
          {days.map((i, index) => {
            const splitDate = i.Date.split(' ');
            return (
            <li className="date">
              {index < 7 ? (
                <span className="day-label">{splitDate[0].slice(0, -1)}</span>
              ) : null}
              <div className="date-box">
                <span className="actually-the-date">{splitDate.pop()}</span>
                <span className="week-day">{splitDate[0].slice(0, -1)}</span>
              </div>
              <span className="hours">{i.hours}</span>
            </li>
          )})}
        </ul>
        </div>
    </div>
  </section>
  )}

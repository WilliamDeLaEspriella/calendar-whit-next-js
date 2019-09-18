import {Styles} from "./styles";

export const Calendar = ({ time }) => {
    const TimeLastDay = new Date(time.getFullYear(), time.getMonth() + 1, 0);
    var TimeFirstDay = new Date(time.getFullYear(), time.getMonth(), 1); 
 return(
    <div className="calendar border-all">
    <div className="month-indicator">
    </div>
    <div className="day-of-week">
        <div className="content-week">Sunday</div>
        <div className="content-week">Monday</div>
        <div className="content-week">Tuesday</div>
        <div className="content-week">Wednesday</div>
        <div className="content-week">Thursday</div>
        <div className="content-week">Friday</div>
        <div className="content-week">Saturday</div>
    </div>
    <div className="date-grid">
    {[...Array(TimeLastDay.getDate()).keys()].map((day) => (
        <div className="box-date">
         <div className="content">{day + 1}</div>
        </div>
    ))}
    <Styles dayWeek={TimeFirstDay.getDay()}/>
    </div>
    </div>
 )
}
import "./ActivitiesCalendar.css";
import 'bootstrap/dist/css/bootstrap.css';


import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import activities from "../../../data/activities.json";

export const ActivitiesCalendar = () => {

  return (
    <>
      <div className="calendarContainer">
        <h1>Calendario de actividades</h1>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          locale="esLocale"
          firstDay={1}
          themeSystem='bootstrap'
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "timeGridWeek,timeGridDay",
          }}
          timeZone="GMT+1"
          events={activities}
          
        />
      </div>
    </>
  );
};

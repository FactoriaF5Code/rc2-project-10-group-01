import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

export const ActivitiesCalendar = () => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView='timeGridWeek'
      headerToolbar={{
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      }}
    />
  );
};

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

export const ActivitiesCalendar = () => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView='timeGridWeek'
      locale= "esLocale"
      firstDay= {1}
      themeSystem='Minty'
      headerToolbar={{
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay',
      }}
      timeZone= 'GMT+1'
      events= {[
        {title: 'The Title', // a property!
          start: '2024-03-20T10:00:00.000Z', // a property!
          end: '2024-03-20T11:00:00.000Z' // a property! ** see important note below about 'end' **
        }]}
    />
  );
};

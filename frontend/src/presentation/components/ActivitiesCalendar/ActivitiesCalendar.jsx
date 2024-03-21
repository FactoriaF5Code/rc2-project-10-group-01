import "./ActivitiesCalendar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { ModalActivityInfo } from "../ModalActivityInfo";
import { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import activities from "../../../data/activities.json";

export const ActivitiesCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="calendarContainer">
        <h1>Calendario de actividades</h1>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          locale="esLocale"
          firstDay={1}
          slotMinTime = "08:00:00"
          slotMaxTime = "21:00:00"
          themeSystem='bootstrap'
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "timeGridWeek,timeGridDay",
          }}
          timeZone="GMT+1"
          events={activities}
          contentWidth="auto"
          contentHeight="auto"
          allDaySlot= {false}
          eventClick={handleEventClick}
        />
      </div>
      {isModalOpen && (
        <ModalActivityInfo
          event={selectedEvent}
          onClose={closeModal}
        />
      )}
    </>
  );
};

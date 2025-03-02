import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Event.css"; // CSS file

const events = [
  {
    title: "Hackathon 2025",
    description: "A 24-hour coding competition for students.",
    date: "March 10, 2025",
    time: "10:00 AM - 10:00 PM",
  },
  {
    title: "Dance Workshop",
    description: "Learn freestyle dance techniques from experts.",
    date: "March 15, 2025",
    time: "2:00 PM - 5:00 PM",
  },
  {
    title: "Singing Competition",
    description: "Showcase your singing skills in this college-level contest.",
    date: "March 20, 2025",
    time: "4:00 PM - 7:00 PM",
  },
  {
    title: "Cricket Tournament",
    description: "Showcase your cricket skills, form a team of twelve.",
    date: "March 25, 2025",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "Football Tournament",
    description: "Inter-college football tournament with exciting prizes.",
    date: "March 30, 2025",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Coding Bootcamp",
    description: "An intensive bootcamp covering full-stack development.",
    date: "April 5, 2025",
    time: "10:00 AM - 4:00 PM",
  },
];

export default function UpcomingEvents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isScheduled, setIsScheduled] = useState(false);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scheduleMeeting = () => {
    setIsScheduled(true);
    setTimeout(() => {
      setSelectedEvent(null);
      setIsScheduled(false);
    }, 2000); // Close modal after 2 seconds
  };

  return (
    <div className="events-container">
      <motion.h3
        className="events-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Upcoming Events
      </motion.h3>

      <input
        type="text"
        className="search-bar"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div
              className="event-card"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => setSelectedEvent(event)}
            >
              <h4>{event.title}</h4>
              <p className="event-description">{event.description}</p>
              <p className="event-date">📅 {event.date}</p>
              <p className="event-time">⏰ {event.time}</p>
            </motion.div>
          ))
        ) : (
          <p className="no-events">No events found.</p>
        )}
      </div>

      {/* Modal Popup */}
      {selectedEvent && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <p>📅 {selectedEvent.date}</p>
            <p>⏰ {selectedEvent.time}</p>
            {isScheduled ? (
              <motion.p
                className="success-msg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                 Meeting Scheduled Successfully!
              </motion.p>
            ) : (
              <motion.button
                className="schedule-btn"
                whileHover={{ scale: 1.1 }}
                onClick={scheduleMeeting}
              >
                Schedule Meeting
              </motion.button>
            )}
            <button
              className="close-btn"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

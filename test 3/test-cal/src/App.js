import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    Notification.requestPermission();
  }, [monthIndex]);

  const events = JSON.parse(localStorage.getItem('savedEvents'));
  events.forEach((event) => {
    const timeParts = event.startTime.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const eventTime = new Date();
    eventTime.setHours(hours);
    eventTime.setMinutes(minutes);

    const notificationTime = new Date(eventTime.getTime() - 15 * 60000);

    const notificationKey = `notification_${event.startTime}`;
    const isNotificationShown = localStorage.getItem(notificationKey);
    if (!isNotificationShown) {
      const timeUntilNotification =
        notificationTime.getTime() - new Date().getTime();
      setTimeout(() => {
        showNotification(event.title);
        localStorage.setItem(notificationKey, 'true');
      }, timeUntilNotification);
    }
  });

  function showNotification(title) {
    if (!('Notification' in window)) {
      console.log('Браузер не поддерживает оповещения');
      return;
    }
    if (Notification.permission === 'granted') {
      new Notification('Оповещение', {
        body: `Остается 15 минут до события: ${title}`,
      });
    }
  }

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import { useState, useEffect } from 'react';
import moment from 'moment';

interface TimerProps {
  className: string;
  startTime: moment.Moment;
}

const Timer = ({ startTime, className }: TimerProps) => {
  const [timer, setTimer] = useState('00:00');

  useEffect(() => {
    const timerId = setInterval(increment, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const increment = () => {
    const now = moment();
    const minutesDuration = now.diff(startTime, 'minutes');
    const minutes = minutesDuration % 60;
    const hours = Math.floor(minutesDuration / 60);
    setTimer(
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    );
  };

  return <div className={className}>{timer}</div>;
};

export default Timer;

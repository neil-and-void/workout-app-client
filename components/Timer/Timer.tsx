import { useState } from 'react';
import moment from 'moment';

interface TimerProps {
  startTime: moment.Moment;
}

const Timer = ({ startTime }: TimerProps) => {
  const [start, setStart] = useState(startTime);

  moment.duration(moment().diff(startTime)).humanize();

  return <div></div>;
};

export default Timer;

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const DAY_HOUR_MIN_FORMAT = 'DD[D] HH[H] mm[M]';
const HOUR_MIN_FORMAT = 'HH[H] mm[M]';
const MIN_FORMAT = 'mm[M]';

function humanizePointDueDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat) : '';
}

function getPointDuration(dateFrom, dateTo) {
  const timeDifference = dayjs(dateTo).diff(dayjs(dateFrom));

  let pointDuration = 0;

  switch (true) {
    case (timeDifference >= MSEC_IN_DAY):
      pointDuration = dayjs.duration(timeDifference).format(DAY_HOUR_MIN_FORMAT);
      break;
    case (timeDifference >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDifference).format(HOUR_MIN_FORMAT);
      break;
    case (timeDifference < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDifference).format(MIN_FORMAT);
      break;
  }

  return pointDuration;
}

export {humanizePointDueDate, getPointDuration};

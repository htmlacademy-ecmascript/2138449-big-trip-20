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

function isPointFuture(point) {
  return dayjs().isBefore(point.dateFrom);
}

function isPointPresent(point) {
  return (dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo));
}

function isPointPast(point) {
  return dayjs().isAfter(point.dateTo);
}

/*function isPointFuture(date) {
  return dayjs().isBefore(dayjs(date), 'D');
}

function isPointPresent(date) {
  return dayjs().isSame(dayjs(date), 'D');
}

function isPointPast(date) {
  return dayjs().isAfter(dayjs(date), 'D');
}*/

function durationPoint(point) {
  return dayjs(point.dateTo).diff(dayjs(point.dateFrom));
}

function sortByTime(points) {
  return points.sort((a, b) => durationPoint(b) - durationPoint(a));
}

function sortByPrice(points) {
  return points.sort((a, b) => b.basePrice - a.basePrice);
}

function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');
}

export {
  humanizePointDueDate,
  getPointDuration,
  isPointFuture,
  isPointPresent,
  isPointPast,
  sortByTime,
  sortByPrice,
  isDatesEqual,
};

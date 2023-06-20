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

function getWeight(optionA, optionB) {
  if (optionA === null && optionB === null) {
    return 0;
  }

  if (optionA === null) {
    return 1;
  }

  if (optionB === null) {
    return -1;
  }

  return null;
}

function sortByTime(waypA, waypB) {
  const weight = getWeight(waypA.dateFrom, waypB.dateFrom);
  return weight ?? dayjs(waypB.dateTo).diff(dayjs(waypB.dateFrom)) - dayjs(waypA.dateTo).diff(dayjs(waypA.dateFrom));

}

function sortByPrice(waypA, waypB) {
  return waypB.basePrice - waypA.basePrice;
}

function sortByDate(points) {
  return points.sort((a, b) => {
    const dateDiff = dayjs(a.dateFrom).unix() - dayjs(b.dateFrom).unix();
    return dateDiff;
  });
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
  sortByDate,
  isDatesEqual,
};

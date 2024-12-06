import dayjs from 'dayjs';
import { reportCustomError } from '../../utils/helpers/errorHandler';
import { isZNonEmptyString } from '../../utils/helpers/generic';

export const getDateFromFrbTimestamp = (frbTimestamp: any): string => {
  // unless the above code is updated this one should remain same
  return new Date(frbTimestamp).toISOString();
};

export const convertToDateTimestampToStoreInDB = ({
  val,
}: {
  val?: string | number | Date;
}): number | null => {
  const _date = dayjs(val);
  if (val && _date.isValid()) {
    return _date.toDate().getTime();
  } else {
    return null;
  }
};

/**
 * Calculates the remaining time in milliseconds for a countdown based on the provided end date.
 *
 * @param {string | undefined} countDownTimeFinishDate - The end date for the countdown in string format.
 *
 * @returns {number} The remaining time in milliseconds. If the date is invalid or not provided, returns 0.
 */
export const getRemainingTimeForCountDown = (
  countDownTimeFinishDate: string | undefined
): number => {
  try {
    if (isZNonEmptyString(countDownTimeFinishDate)) {
      const endDate = dayjs(countDownTimeFinishDate);
      if (endDate.isValid()) {
        const remainingTimeInMilliSeconds = endDate.diff(
          dayjs(new Date()),
          'milliseconds'
        );

        return Date.now() + remainingTimeInMilliSeconds;
      } else {
        return 0;
      }
    } else {
      return 0; // time finished for countdown (as no date passed)
    }
  } catch (error) {
    reportCustomError(error);
    return 0;
  }
};

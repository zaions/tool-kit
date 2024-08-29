import dayjs from 'dayjs';

export const getDateFromFrbTimestamp = (frbTimestamp: any) => {
	// unless the above code is updated this one should remain same
	return new Date(frbTimestamp).toISOString();
};

export const convertToDateTimestampToStoreInDB = ({
	val,
}: {
	val?: string | number | Date;
}) => {
	const _date = dayjs(val);
	if (val && _date.isValid()) {
		return _date.toDate().getTime();
	} else {
		return null;
	}
};

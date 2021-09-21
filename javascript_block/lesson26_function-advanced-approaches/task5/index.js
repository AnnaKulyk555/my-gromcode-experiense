export const shmoment = date => {
  const initDate = new Date(date);
  const dateTypes = [
    {
      dataFormat: 'years',
      getDataFormatCount() {
        return initDate.getFullYear();
      },
      setDataFormatCount(count) {
        initDate.setFullYear(count);
      },
    },
    {
      dataFormat: 'months',
      getDataFormatCount() {
        return initDate.getMonth();
      },
      setDataFormatCount(count) {
        initDate.setMonth(count);
      },
    },
    {
      dataFormat: 'days',
      getDataFormatCount() {
        return initDate.getDate();
      },
      setDataFormatCount(count) {
        initDate.setDate(count);
      },
    },
    {
      dataFormat: 'hours',
      getDataFormatCount() {
        return initDate.getHours();
      },
      setDataFormatCount(count) {
        initDate.setHours(count);
      },
    },
    {
      dataFormat: 'minutes',
      getDataFormatCount() {
        return initDate.getMinutes();
      },
      setDataFormatCount(count) {
        initDate.setMinutes(count);
      },
    },
    {
      dataFormat: 'seconds',
      getDataFormatCount() {
        return initDate.getSeconds();
      },
      setDataFormatCount(count) {
        initDate.setSeconds(count);
      },
    },
    {
      dataFormat: 'milliseconds',
      getDataFormatCount() {
        return initDate.getMilliseconds();
      },
      setDataFormatCount(count) {
        initDate.setMilliseconds(count);
      },
    },
  ];
  return {
    add(dateType, count) {
      dateTypes.forEach(dateObj => {
        if (dateObj.dataFormat === dateType) {
          const dataFormatCount = dateObj.getDataFormatCount();
          dateObj.setDataFormatCount(dataFormatCount + count);
        }
      });

      return this;
    },
    subtract(dateType, count) {
      dateTypes.forEach(dateObj => {
        if (dateObj.dataFormat === dateType) {
          const dataFormatCount = dateObj.getDataFormatCount();
          dateObj.setDataFormatCount(dataFormatCount - count);
        }
      });

      return this;
    },

    result() {
      return initDate;
    },
  };
};

// test data
// console.log(
//   shmoment(new Date(2020, 0, 7, 17, 17, 17))
//     .add('months', 2)
//     .add('days', 8)
//     .subtract('years', 1)
//     .subtract('hours', 1)
//     .subtract('minutes', 1)
//     .subtract('seconds', 1)
//     .subtract('milliseconds', 1)
//     .result(),
// );


// () : Array<Number>
export const MONTH_NAMES = (
  'January February March April May June July August September October November December'
  .split(' ')
)

// (Number, Number) : Array<Number>
export const getPastYears = (yearsBack, startYear) => {
  const years = [...Array(yearsBack + 1).keys()].map(num => startYear - num)
  return years
}

export const getDayFromDate = date => new Date(date).getDate()
export const getMonthFromDate = date => new Date(date).getMonth()
export const getYearFromDate = date => new Date(date).getFullYear()

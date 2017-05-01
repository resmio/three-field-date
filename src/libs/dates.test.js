import { MONTH_NAMES, getPastYears } from './dates'

describe('MONTH_NAMES', () => {
  it('Ouputs an array with the month names in english', () => {
    const expected = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ]
    expect(MONTH_NAMES).toEqual(expected)
  })
})

describe('getPastYears', () => {
  it('Takes a year and number of years and returns an array of numbers ranging from the passed year to the years in the past specified', () => {
    const actual = getPastYears(5, 2012)
    const expected = [2012, 2011, 2010, 2009, 2008, 2007]

    expect(actual).toEqual(expected)
  })

  it('works with 0 years in the past', () => {
    const actual = getPastYears(0, 1995)
    const expected = [1995]

    expect(actual).toEqual(expected)
  })

  it('does not break due to Y2K bug 📼', () => {
    const actual = getPastYears(4, 2001)
    const expected = [2001, 2000, 1999, 1998, 1997]

    expect(actual).toEqual(expected)
  })
})

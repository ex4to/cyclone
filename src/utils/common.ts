type getDayTimeRes = {
  day: string
  dayOfMonth: string
  month: string
  year: string
  time: string
}

export const getDayTime = (date: string | undefined): getDayTimeRes | null => {
  if (!date) return null
  const [dayProp, timeProp] = date.split(' ')

  const MONTHS_CODES = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]
  const DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const [year, month, day] = dayProp.split('-')
  const yearCode =
    (4 +
      Number(year.slice(2, year.length)) +
      Math.floor(Number(year.slice(2, year.length)) / 4)) %
    7

  const dayIdx = (Number(day) + MONTHS_CODES[Number(month) - 1] + yearCode) % 7

  const res = {
    day: DAYS[dayIdx],
    dayOfMonth: day,
    month: MONTHS[+month - 1],
    year,
    time: timeProp,
  }

  return res
}

export const tommHg = (mb: number): number => Math.round(mb * 0.75006)
export const round = (temp: number): number => Math.round(temp)

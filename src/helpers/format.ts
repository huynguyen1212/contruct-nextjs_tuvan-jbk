const locale = {
  VND: 'vi-VN',
  USD: 'en-US',
}

export const replaceBetween = (str: string, start: number, end: number, what: string): string =>
  str.substring(0, start) + what + str.substring(end)

export const money = (str: string | number, currency?: 'VND' | 'USD', force?: boolean) => {
  const length = String(str).length

  const format = new Intl.NumberFormat(locale[currency || 'VND'], {
    style: 'currency',
    currency: currency || 'VND',
  }).format(Number(str))

  if (force) return format

  const formatLength = String(format).length

  if (length >= 10) {
    return replaceBetween(format, formatLength - 10, formatLength, ' Tỷ')
  }

  if (length >= 7) {
    return replaceBetween(format, formatLength - 6, formatLength, ' Tr')
  }

  return format
}

// clear object
function clean(obj: { [key: string]: any }) {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName]
    }
  }
  return obj
}

export const clearParams = (data: { [key: string]: any }) => clean(data)

export const returnValueFromKey = (key: string) => (obj: Record<string, any>) => obj[key]

/**
 * Get value of Object by path string define
 * @param path string like "a.b.c.d"
 * @param context object
 */
export const valueOfNestObj = (path: string, context: any) => {
  context = context || this
  const list = path.split('.')

  try {
    for (let i = 0; i < list.length; i++) {
      if (context[list[i]]) context = context[list[i]]
    }
  } catch (err) {
    return ''
  }
  return context
}

export const padToTwo = (number: number) => {
  if (number < 10) return '0' + number
  return number
}

export const convertDate = (date: string) => {
  const dateInstance = new Date(date)
  const day = dateInstance.getDate()
  const month = dateInstance.getMonth() + 1
  const year = dateInstance.getFullYear()
  return padToTwo(day) + '/' + padToTwo(month) + '/' + year
}

export const convertDateWithTime = (date: string) => {
  const dateInstance = new Date(date)
  const day = dateInstance.getDate()
  const month = dateInstance.getMonth() + 1
  const year = dateInstance.getFullYear()
  const hour = dateInstance.getHours()
  const minus = dateInstance.getMinutes()
  const second = dateInstance.getSeconds()
  return (
    padToTwo(hour) +
    ':' +
    padToTwo(minus) +
    ':' +
    padToTwo(second) +
    ' ' +
    padToTwo(day) +
    '/' +
    padToTwo(month) +
    '/' +
    year
  )
}

export const formatTime = (date: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  let timeTemp = Math.abs(new Date().getTime() - new Date(date).getTime()) / 1000
  let timeYear = 0,
    timeMonth = 0,
    timeDay = 0,
    timeHours = 0,
    timeMinutes = 0
  if (timeTemp >= 31536000) {
    timeYear = Math.floor(timeTemp / 31536000)
    timeTemp -= timeYear * 31536000
    if (timeTemp >= 2592000) {
      timeMonth = Math.floor(timeTemp / 2592000)
      timeTemp -= timeMonth * 2592000
      if (timeTemp >= 86400) {
        timeDay = Math.floor(timeTemp / 86400)
        timeTemp -= timeDay * 86400
        if (timeTemp >= 3600) {
          timeHours = Math.floor(timeTemp / 3600)
          timeTemp -= timeHours * 3600
          if (timeTemp >= 60) {
            timeMinutes = Math.floor(timeTemp / 60)
            timeTemp -= timeMinutes * 60
          }
        }
      }
    }
  } else {
    if (timeTemp >= 2592000) {
      timeMonth = Math.floor(timeTemp / 2592000)
      timeTemp -= timeMonth * 2592000
      if (timeTemp >= 86400) {
        timeDay = Math.floor(timeTemp / 86400)
        timeTemp -= timeDay * 86400
        if (timeTemp >= 3600) {
          timeHours = Math.floor(timeTemp / 3600)
          timeTemp -= timeHours * 3600
          if (timeTemp >= 60) {
            timeMinutes = Math.floor(timeTemp / 60)
            timeTemp -= timeMinutes * 60
          }
        }
      }
    } else {
      if (timeTemp >= 86400) {
        timeDay = Math.floor(timeTemp / 86400)
        timeTemp -= timeDay * 86400
        if (timeTemp >= 3600) {
          timeHours = Math.floor(timeTemp / 3600)
          timeTemp -= timeHours * 3600
          if (timeTemp >= 60) {
            timeMinutes = Math.floor(timeTemp / 60)
            timeTemp -= timeMinutes * 60
          }
        }
      } else {
        if (timeTemp >= 3600) {
          timeHours = Math.floor(timeTemp / 3600)
          timeTemp -= timeHours * 3600
          if (timeTemp >= 60) {
            timeMinutes = Math.floor(timeTemp / 60)
            timeTemp -= timeMinutes * 60
          }
        } else {
          if (timeTemp >= 60) {
            timeMinutes = Math.floor(timeTemp / 60)
            timeTemp -= timeMinutes * 60
          }
        }
      }
    }
  }

  return {
    timeYear,
    timeMonth,
    timeDay,
    timeHours,
    timeMinutes,
  }
}

//Shortened notification timeline
export const timeLine = (time: {
  timeYear: number
  timeMonth: number
  timeDay: number
  timeHours: number
  timeMinutes: number
}) => {
  if (time.timeYear === 0 && time.timeMonth === 0 && time.timeDay === 0 && time.timeHours === 0) {
    return `${time.timeMinutes} phút trước`
  } else if (time.timeYear === 0 && time.timeMonth === 0 && time.timeDay === 0) {
    return `${time.timeHours} giờ ${time.timeMinutes} phút trước`
  } else if (time.timeYear === 0 && time.timeMonth === 0) {
    return `${time.timeDay} ngày ${time.timeHours} giờ ${time.timeMinutes} phút trước`
  } else if (time.timeYear === 0) {
    return `${time.timeMonth} tháng ${time.timeDay} ngày ${time.timeHours} giờ ${time.timeMinutes} phút trước`
  } else {
    return `${time.timeYear} năm ${time.timeMonth} tháng ${time.timeDay} ngày ${time.timeHours} giờ ${time.timeMinutes} phút trước`
  }
}

// export const timeConvertFromNow = (time: string) => {
//   const now = new Date(time).getTime();
//   const period = Math.round(new Date().getTime() / 1000 - now);
//   const mins = Math.floor(period / 60);
//   const hours = Math.floor(mins / 60);
//   const days = Math.floor(hours / 24);
//   if (days) {
//     return `${days} ${days > 1 ? 'days' : 'day'} ago`;
//   }
//   if (hours) {
//     return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
//   } else if (mins === 0) {
//     return 'Just now';
//   }
//   return `${mins} ${mins > 1 ? 'mins' : 'min'} ago`;
// };

export const convertStatus = (val: string) => {
  const obj: { [key: string]: any } = {
    fail: 'Thất bại',
    success: 'Thành công',
    draft: 'Bản nháp',
    new: 'Mới',
    confirmed: 'Đã xác nhận',
    refuse: 'Từ chối',
    processing: 'Đang xử lý',
    used: 'Đã sử dụng',
    unused: 'Chưa sử dụng',
    disable: 'Bị vô hiệu hóa',
    expired: 'Hết hạn',
  }

  return obj[val] || 'Thất bại'
}

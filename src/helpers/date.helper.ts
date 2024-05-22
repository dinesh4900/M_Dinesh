export function timeAgo(date?: string | Date | null) {
  if (!date) return '';
  const now = new Date();
  const past = new Date(date);
  const millisecondsAgo = now.getTime() - past.getTime();
  const secondsAgo = Math.floor(millisecondsAgo / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const monthsAgo =
    (now.getFullYear() - past.getFullYear()) * 12 +
    (now.getMonth() - past.getMonth());
  const yearsAgo = now.getFullYear() - past.getFullYear();

  if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else if (daysAgo < 30) {
    return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  } else if (monthsAgo < 12) {
    return `${monthsAgo} month${monthsAgo !== 1 ? 's' : ''} ago`;
  } else {
    return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
  }
}

export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = { month: 'short' };
  const month = new Intl.DateTimeFormat('en-US', options).format(date);

  const day = date.getDate();
  const daySuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const year = date.getFullYear();

  return `${month} ${day}${daySuffix(day)}, ${year}`;
}

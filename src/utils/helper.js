export function truncateString(str, maxLength = 50) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  }
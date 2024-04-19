import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ellipsize = (text: string, maxlimit: number) => {
  if (text) {
    if (text.length > maxlimit) {
      return `${text.substring(0, maxlimit - 3)}...`;
    }
    return text;
  }
  return '';
};

export const formatTime = time => String(time).padStart(2, '0');

export function formatDate(dateStr) {

  try {
    // Parse the date string with UTC timezone
    const dateObj = new Date(dateStr);
    // Format the date in desired format ('DD MMM YYYY')
    return dateObj.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch (error) {
    console.error("Invalid date format. Please provide a date string in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.fffZ).");
    return null;
  }

}


export const formatQuoteDate = (dateStr) =>{
 
  try {
    // Parse the date string
    const dateObj = new Date(dateStr);

    // Extract date parts with desired formatting
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString("en-US", { month: "short" }); // Short month name (Jan - Dec)
    const day = dateObj.getDate();

    // Add ordinal suffix (st, nd, rd, th) to the day
    const suffix = getOrdinalSuffix(day);

    // Format the date string
    return `${day}${suffix} - ${month} - ${year}`;
  } catch (error) {
    // Handle invalid date format
    return "Invalid date format.";
  }
}

function getOrdinalSuffix(day) {
  const suffixes = ["st", "nd", "rd", "th"];
  const remainder = day % 10;

  if (remainder === 1 && day !== 11) {
    return suffixes[0];
  } else if (remainder === 2 && day !== 12) {
    return suffixes[1];
  } else if (remainder === 3 && day !== 13) {
    return suffixes[2];
  } else {
    return suffixes[3];
  }
}

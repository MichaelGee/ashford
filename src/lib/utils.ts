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

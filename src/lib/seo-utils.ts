/**
 * Utility functions for SEO optimization
 */

/**
 * Generates a SEO-friendly slug from a string
 * @param text The text to convert to a slug
 * @returns A SEO-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toString()
    .normalize('NFD') // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics/accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Trim hyphens from start
    .replace(/-+$/, ''); // Trim hyphens from end
}

/**
 * Truncates a string to a specified length and adds ellipsis if needed
 * Useful for meta descriptions
 * @param text The text to truncate
 * @param maxLength The maximum length of the text
 * @returns The truncated text
 */
export function truncateForMeta(text: string, maxLength: number = 160): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  // Try to truncate at a word boundary
  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
}

/**
 * Generates a canonical URL
 * @param path The path to generate a canonical URL for
 * @returns The canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.URL!
    : 'http://localhost:3000';
    
  // Remove trailing slash from baseUrl if it exists
  const normalizedBaseUrl = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;
    
  // Remove leading slash from path if it exists
  const normalizedPath = path.startsWith('/') 
    ? path.slice(1) 
    : path;
    
  return `${normalizedBaseUrl}/${normalizedPath}`;
}

/**
 * Formats a date for structured data
 * @param date The date to format
 * @returns The formatted date in ISO format
 */
export function formatDateForStructuredData(date: string | Date): string {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
} 
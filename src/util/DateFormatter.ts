export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const month = date.toLocaleString('en', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

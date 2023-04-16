export const formatTime = (dateStr: string) =>
  new Date(dateStr).toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit'
  });

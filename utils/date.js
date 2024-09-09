export const formatDate = (timestamp, options) => {
  return new Date(timestamp * 1000).toLocaleString('ko-KR', options);
};

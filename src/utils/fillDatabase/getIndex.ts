const getIndex = (url: string): number => {
  const splittedUrl = url.split('/');
  const index = Number(splittedUrl[splittedUrl.length - 1]);
  return index;
};

export default getIndex;

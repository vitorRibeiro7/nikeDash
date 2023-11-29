function cleanImageURLtoResize(url: string) {
  const newURL = url.replace('/med', '');

  return newURL;
}

export default cleanImageURLtoResize;

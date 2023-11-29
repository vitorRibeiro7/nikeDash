function formatDate(dateToFormat: string) {
  const date = new Date(dateToFormat);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dateFormated = `${month.toString().padStart(2, '0')}/${day
    .toString()
    .padStart(2, '0')}/${year}`;

  return dateFormated;
}

export default formatDate;

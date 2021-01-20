// convert ISO-8601 date representation to readible date string MM-DD-YYYY

function convertISODate(isoDate) {
  var d = new Date(isoDate);
  return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
}

export default convertISODate;

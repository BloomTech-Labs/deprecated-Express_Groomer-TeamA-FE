// convert ISO-8601 date representation to readible date string MM-DD-YYYY
/**
 *@deprecated The dates provided by the backend are NOT ISO-8601 dates, they are epoch time stamps, deprecating this method as it is not accurate or functional
 * -Randy Egan
 *
 * suggested refactor/solution:
 * const date = new Date(appointment.appointment_date_time);
 const day = date.getDate();
 const month = date.getMonth();
 const year = date.getFullYear();
 const hours = date.getHours();
 const minutes = date.getMinutes();
 const fulldate = `${month + 1}/${day}/${year}`;
 This code has been used in ScheduledAppointments/Card.js as well as RenderCustomerProfile.js
 */
function convertISODate(isoDate) {
  var d = new Date(isoDate);
  return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
}

export default convertISODate;

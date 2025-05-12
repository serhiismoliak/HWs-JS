/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}
function isWeekend(day: DaysOfWeek): boolean {
  switch (day) {
    case DaysOfWeek.Saturday:
    case DaysOfWeek.Sunday:
      return true;
    default:
      return false;
  }
}
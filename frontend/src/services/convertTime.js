const convertDateFormat = (timeSql) => {
  const day = timeSql.slice(8, 10);
  let month = "";
  switch (timeSql.slice(5, 7)) {
    case "01":
      month = "Janvier";
      break;
    case "02":
      month = "Février";
      break;
    case "03":
      month = "Mars";
      break;
    case "04":
      month = "Avril";
      break;
    case "05":
      month = "Mai";
      break;
    case "06":
      month = "Juin";
      break;
    case "07":
      month = "Juillet";
      break;
    case "08":
      month = "Août";
      break;
    case "09":
      month = "Septembre";
      break;
    case "10":
      month = "Octobre";
      break;
    case "11":
      month = "Novembre";
      break;
    case "12":
      month = "Décembre";
      break;
    default:
      month = "";
  }

  const year = timeSql.slice(0, 4);
  return `${day} ${month} ${year}`;
};

const convertHourFormat = (timeSql) => {
  const hour = timeSql.slice(11, 13);
  const minute = timeSql.slice(14, 16);
  return `${hour} : ${minute}`;
};

export { convertDateFormat, convertHourFormat };

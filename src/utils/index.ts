export const formatDate = (date: Date) => {
  //let or using?
  let day = date.getDate();
  let month = date.getMonth();
  if (day < 10 && month + 1 < 10) {
    return `0${day}/0${month + 1}`;
  } else if (day < 10 && month + 1 >= 10) {
    return `0${day}/${month + 1}`;
  } else if (month + 1 < 10 && day >= 10) {
    return `${day}/0${month + 1}`;
  }
  return `${day}/${month + 1}`;
};

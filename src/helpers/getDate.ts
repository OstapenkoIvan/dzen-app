export const getOrderDate = (date: string) => {
  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = new Intl.DateTimeFormat("ru", { month: "long" }).format(
    currentDate
  );
  const year = currentDate.getFullYear();

  return { day, month, year };
};

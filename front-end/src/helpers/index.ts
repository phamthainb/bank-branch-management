export const getPublic = (val: any) =>
  `${process.env.REACT_APP_SERVER_URL}/${val}`;

export const dayPickerData = {
  currentYear: new Date().getFullYear(),
  fromMonth: new Date(1950, 0),
  toMonth: new Date(new Date().getFullYear() + 10, 11),
};

export const PAGE_SIZE = 10;

export const defaultOption = {
  label: "Tất cả",
  value: "--",
};

export enum ELocale {
  vi = "vi-VN",
}

const currencyCorrespondingLocale = {
  "vi-VN": "VND",
};

export const formatCurrency = (value: number, locale = ELocale["vi"]) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCorrespondingLocale[locale],
  });
  return formatter.format(value);
};

export const formatNumber = (value: number, locale = ELocale["vi"]) =>
  new Intl.NumberFormat(locale).format(value);

export const formatDate = (date: any, locale = ELocale["vi"]) =>
  new Date(date).toLocaleString(locale);

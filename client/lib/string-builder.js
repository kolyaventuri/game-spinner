// @flow

type DataType = {
  [string]: string | number
};

export const stringBuilder = (format: string = '', data: DataType = {}): string => {
  const keys = Object.keys(data);
  let res = format;

  for (const key of keys) {
    const val = data[key];

    res = res.replace(new RegExp(`{${key}}`, 'g'), val.toString());
  }

  return res;
};

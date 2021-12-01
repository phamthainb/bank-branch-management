// clear object
const clean = (obj: { [key: string]: any }) => {
  for (var propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      delete obj[propName];
    }
  }
  return obj;
};

const cleanObject = (data: { [key: string]: any }) => clean(data);

export const getValueObject = (path: string, context: any) => {
  let result = context;
  let pathSplit = path.split('.');

  try {
    for (var i = 0; i < pathSplit.length; i++) {
      result = result[pathSplit[i]];
    }
  } catch (error) {
    return null;
  }

  return result;
};

export default cleanObject;

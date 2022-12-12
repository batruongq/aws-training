export const isEmpty = (input: object | string) => {
  const type = typeof input;

  switch (type) {
    case 'object': 
      return Object.keys(input).length === 0 && input.constructor === Object;
    default:
      return false;
  }
}

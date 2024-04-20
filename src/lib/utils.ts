export function idGenerator() {
  let id = 1;

  const getID = () => id++;

  return getID;
}

export function getRandomNumberArray() {
  const length = Math.floor(Math.random() * 9) + 1;
  const values: number[] = [];

  for (let i = 0; i < length; i++) {
    values.push(Math.floor(Math.random() * 100));
  }

  return values;
}

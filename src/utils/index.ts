export function createRandomNumberArray() {
  const length = Math.floor(Math.random() * 10) + 1;
  const values: number[] = [];

  for (let i = 0; i < length; i++) {
    values.push(Math.floor(Math.random() * 100));
  }

  return values;
}

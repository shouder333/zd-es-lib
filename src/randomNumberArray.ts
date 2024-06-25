function randomNumberArray(min: number, max: number): number[]
{
      const result = new Array(random(min, max));
      return map(result, (num) => num + random(0, 999));
}

export default randomNumberArray;

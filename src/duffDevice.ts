/**高效的循环 */
function duffDevice<T>(items: T[], process: (item: T, index: number) => void): void
{
      const length = items.length;
      let iterations = length % 8;
      let i = -1;
      while (iterations)
      {
            process(items[++i], i);
            --iterations;
      }
      iterations = Math.floor(length / 8);
      while (iterations)
      {
            process(items[++i], i);
            process(items[++i], i);
            process(items[++i], i);
            process(items[++i], i);
            process(items[++i], i);
            process(items[++i], i);
            process(items[++i], i);
            process(items[++i], i);
            --iterations;
      }
}

export default duffDevice;

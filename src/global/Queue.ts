class Queue<T>
{
      private _items: T[] = [];
      enqueue(item: T): void
      {
            this._items.push(item);
      }
      dequeue(): T | undefined
      {
            return this._items.shift();
      }
      peek(): T | undefined
      {
            return this._items[0];
      }
      clear(): void
      {
            this._items = [];
      }
      length(): number
      {
            return this._items.length;
      }
}

export default Queue;

interface LinkedListNode<T>
{
  value: unknown;
  next: LinkedListNode<T> | null;
}

type linkedListNode = LinkedListNode<linkedListNode>;
/**循环列表 */
class LinkedList
{
      head: linkedListNode | null;
      tail: linkedListNode | null;
      constructor()
      {
            this.head = null;
            this.tail = null;
      }
      append(value: unknown): void
      {
            const newNode = { value, next: null };
            if (this.head === null) this.head = newNode;
            if (this.tail === null) this.tail = newNode;
            this.tail.next = newNode;
      }
      prepend(value: unknown): void
      {
            const newNode = { value, next: this.head };
            this.head = newNode;
            if (this.tail === null) this.tail = newNode;
      }
      insertAfter(value: unknown, afterValue: number): void
      {
            const curNode = this.find(afterValue);
            if (curNode === null) return;
            const newNode = { value, next: curNode.next };
            curNode.next = newNode;
      }
      delete(value: unknown): void
      {
            if (this.head === null) return;
            if (this.head.value === value)
            {
                  this.head = this.head.next;
                  return;
            }
            let curNode = this.head;
            while (curNode.next !== null)
            {
                  if (curNode.next.value === value)
                  {
                        curNode.next = curNode.next.next;
                        return;
                  }
                  curNode = curNode.next;
            }
      }
      find(value: unknown): linkedListNode | null
      {
            let curNode = this.head;
            while (curNode !== null)
            {
                  if (curNode.value === value) return curNode;
                  curNode = curNode.next;
            }
            return null;
      }
}

export default LinkedList;

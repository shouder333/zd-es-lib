//---------------------------------------
// Function
//---------------------------------------

function bind(src: Function, thisArg: any, ...args: any[]): any
{
      return function anonymity(this: Function, ..._args: any[])
      {
            const allArgs = args.concat(_args);
            if (this instanceof anonymity) return new (src as any)(...allArgs);
            return src.apply(thisArg, allArgs);
      };
}

//---------------------------------------
// Array
//---------------------------------------

function forEach<T>(src: T[], callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void
{
      if (thisArg) callbackfn = bind(callbackfn, thisArg);
      let i = src.length;
      while (i) callbackfn(src[--i], i, src);
}

function map<T, U>(src: T[], callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
{
      if (thisArg) callbackfn = bind(callbackfn, thisArg);
      let i = src.length;
      const result = new Array(i);
      while (i) result[--i] = callbackfn(src[i], i, src);
      return result;
}

function filter<T, S extends T>(src: T[], predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
function filter<T>(src: T[], predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]
{
      if (thisArg) predicate = bind(predicate, thisArg);
      let i = src.length;
      const result = [];
      while (i) predicate(src[--i], i, src) && result.push(src[i]);
      return result;
}

function reduce<T>(src: T[], callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
function reduce<T>(src: T[], callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
function reduce<T, U>(src: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U
{
      let i = src.length;
      let accumulator: U;
      initialValue === undefined
            ? accumulator = src[0] as unknown as U
            : accumulator = initialValue;
      while (i) accumulator = callbackfn(accumulator, src[--i], i, src);
      return accumulator;
}

//---------------------------------------
// ObjectConstructor
//---------------------------------------

function create(o: any, propertiesObject?: any): any
{
      if (typeof o !== 'object' && typeof o !== 'function') throw 'TypeError: Object prototype may only be an Object or null';
      const result = function() { /** */ } as any;
      result.prototype = o;
      if (propertiesObject)
            for (const prop in propertiesObject)
                  if (Object.prototype.hasOwnProperty.call(propertiesObject, prop))
                        result[prop] = propertiesObject[prop];
      return new result();
}

function keys(o: any): string[]
{
      const type = typeof o;
      if (o === null || type !== 'object' && type !== 'string') throw 'TypeError: Object.keys called on non-object';
      const result = [];
      if (type === 'string')
      {
            for (let i = -1, l = o.length; ++i < l;) result.push(String(i));
            return result;
      }
      for (const prop in o) Object.prototype.hasOwnProperty.call(o, prop) && result.push(prop);
      return result;
}

//---------------------------------------
// String
//---------------------------------------

function trim(src: string): string
{
      return src.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}

export { bind, forEach, map, filter, reduce, create, keys, trim };

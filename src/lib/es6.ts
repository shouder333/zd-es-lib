import { undef } from '../global/const';
import { bind } from './es5';

//---------------------------------------
// Array
//---------------------------------------
function find<T, S extends T>(src: T[], predicate: (value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
function find<T>(src: T[], predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined
{
      if (thisArg) predicate = bind(predicate, thisArg);
      let value;
      let i = -1;
      const l = src.length;
      while (++i < l)
      {
            value = src[i];
            if (predicate(value, i, src)) return value;
      }
}

function findIndex<T>(src: T[], predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number
{
      if (thisArg) predicate = bind(predicate, thisArg);
      let value;
      let i = src.length;
      while (i)
      {
            --i;
            value = src[i];
            if (predicate(value, i, src)) return i;
      }
      return -1;
}

function fill<T>(src: T[], value: T, start?: number, end?: number): T[]
{
      if (start === undef) start = -1;
      if (end === undef) end = src.length;
      let i = start;
      while (++i < end) src[i] = value;
      return src;
}

//---------------------------------------
// ArrayConstructor
//---------------------------------------

function from<T>(arrayLike: ArrayLike<T>): T[];
function from<T, U>(arrayLike: ArrayLike<T>, mapfn?: (v: T, k: number) => U, thisArg?: any): U[]
{
      let marker = false;
      if (typeof mapfn === 'function') marker = true;
      if (marker && thisArg) mapfn = bind((mapfn as any), thisArg);
      let i = arrayLike.length;
      const result = new Array(i);
      while (i)
      {
            --i;
            const value = arrayLike[i];
            marker ? result[i] = (mapfn as any)(value, i) : result[i] = value;
      }
      return result;
}

function of<T>(...items: T[]): T[]
{
      return items;
}

//---------------------------------------
// ArrayConstructor
//---------------------------------------

function assign<T extends {}, U>(target: T, source: U): T & U;
function assign<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
function assign<T extends {}, U, V, W>(target: T, _source1?: U, _source2?: V, _source3?: W): T & U & V & W
{
      if (target === null) throw 'TypeError: Cannot convert undefined or null to object';
      const sources: [U, V, W] = Array.prototype.slice.call(arguments, 1);
      const length = sources.length;
      for (let i = -1; ++i < length;)
      {
            const nextSource = sources[i];
            if (nextSource === null) continue;
            for (const nextKey in nextSource)
                  if (Object.prototype.hasOwnProperty.call(nextSource, nextKey))
                        target[nextKey as keyof T] = (nextSource[nextKey as keyof typeof nextSource] as any);
      }
      return target as T & U & V & W;
}

function is(value1: any, value2: any): boolean
{
      if (value1 === value2) return value1 !== 0 || 1 / value1 === 1 / value2;
      return value1 !== value1 && value2 !== value2;
}

//---------------------------------------
// String
//---------------------------------------

function repeat(src: string, count: number): string
{
      let result = '';
      for (let i = -1; ++i < count;) result += src;
      return result;
}

export { find, findIndex, fill, from, of, assign, is, repeat };

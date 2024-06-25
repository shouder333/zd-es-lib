function forOwn<T extends Record<string, unknown>>(object: T, callback: ObjectIterator<T, boolean | void>)
{
      for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key) && callback(object[key], key, object) === false) break;
}

export default forOwn;

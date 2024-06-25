//----------------------------------------
// String
//----------------------------------------

function padStart(src: string, maxLength: number, fillString: string = ' '): string
{
      const pad = repeat(fillString, Math.ceil((maxLength - src.length) / fillString.length));
      return pad.substring(0, maxLength) + src;
}

function padEnd(src: string, maxLength: number, fillString: string = ' '): string
{
      const pad = repeat(fillString, Math.ceil((maxLength - src.length) / fillString.length));
      return src + pad.substring(0, maxLength);
}

export { padStart, padEnd };

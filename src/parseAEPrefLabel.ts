function parseAEPrefLabel(string: string)
{
      const reg = /"([^"]+)"/g;
      return string.replace(reg, () =>
      {
            const execResult = reg.exec(string);
            if (execResult) return execResult[0].charCodeAt(1).toString(16);
      });
}

export default parseAEPrefLabel;

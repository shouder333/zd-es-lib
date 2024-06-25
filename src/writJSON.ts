function writeJSON(data: any, filePath: string): boolean
{
      return writeFile(JSON.stringify(data), filePath);
}

export default writeJSON;

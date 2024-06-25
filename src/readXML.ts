function readXML(path: string): XML | void
{
      const data = readFile(path);
      if (data) return new XML(data);
}

export default readXML;

function writeXML(path: string, xml: XML): boolean
{
      return writeFile(path, xml.toXMLString());
}

export default writeXML;

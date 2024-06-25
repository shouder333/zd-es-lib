function writeFile(path: string, content: string): boolean
{
      const file = new File(path);
      const folder = file.parent;
      if (!folder.exists) folder.create();
      return file.open('w') && file.write(content) && file.close();
}

export default writeFile;

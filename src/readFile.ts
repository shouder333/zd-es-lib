function readFile(path: string, encoding: FileEncoding = 'UTF-8'): string | void
{
      const file = new File(path);
      if (file.exists)
      {
            file.encoding = encoding;
            file.open('r');
            const data = file.read();
            file.close();
            return data;
      }
}

export default readFile;

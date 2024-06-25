/**遍历文件夹下的所有文件 */

// function eachFolder(folder: Folder, suffix: RegExp): File[]
// {
//       let i = -1;
//       let data: Folder | File;
//       const queue = [ folder.getFiles() ];
//       const result: File[] = [];
//       while (queue.length > 0)
//       {
//             while (data = queue[0][++i])
//             {
//                   if (data instanceof Folder) queue.push(data.getFiles());
//                   else if (suffix.test(data.name)) result.push(data);
//             }
//             i = -1;
//             queue.shift();
//       }
//       return result;
// }

function eachFolder(folder: Folder, suffix: RegExp): File[]
{
      let i = -1;
      let data: Folder | File;
      const stack = new Stack<(Folder | File)[]>();
      stack.push(folder.getFiles());
      const result: File[] = [];
      while (!stack.isEmpty())
      {
            while (data = stack.peek()[++i])
            {
                  if (data instanceof Folder)
                  {
                        i = -1;
                        stack.push(data.getFiles());
                  }
                  else if (suffix.test(data.name)) result.push(data);
            }
            i = -1;
            stack.pop();
      }
      return result;
}

export default eachFolder;

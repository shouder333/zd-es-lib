function addButtonDown(
      num: number,
      size: [number, number],
      container: Window,
      callback: (button: Button, index: number) => void
)
{
      for (let i = -1; ++i < num;)
      {
            const button = container.add('button');
            button.bounds = [ 0, i * size[1], size[0], (i + 1) * size[1] ];
            callback(button, i);
      }
      container.bounds = [ 0, 0, size[0], size[1] * num ];
}

export default addButtonDown;

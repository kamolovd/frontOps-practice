// components/CounterButton.tsx
import { useState } from 'react';
import { Button } from '../Button/Button';

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </Button>
    </div>
  );
};

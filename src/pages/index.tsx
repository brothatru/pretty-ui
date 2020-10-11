import React from 'react';
import { Button } from '@src/components/buttons';
import { Input } from '@src/components/inputs';

const Page = () => {
  const [clickCount, setClickCount] = React.useState<number>(0);
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClickCount(clickCount + 1);
  };
  return (
    <div className='page-container'>
      <Button color='green' onClick={onClickHandler}>
        My Button
      </Button>
      <p>{clickCount}</p>

      <Input size='lg' />
    </div>
  );
};

export default Page;

import { Button } from '@mui/material';
import React from 'react';

export function JoinButton() {
  return (
    <Button
      variant="black"
      className="!hidden h-[57px] w-[207px] whitespace-pre-line text-center lg:!flex"
      component="a"
      href="https://lk.eseur.ru/signup"
      target="_blank"
      rel="noopener noreferrer"
    >
      Вступить в
      {'\n'}
      профсоюз
    </Button>
  );
}

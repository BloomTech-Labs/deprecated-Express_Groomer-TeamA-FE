import React, { useState } from 'react';
import { Burger } from './navStyles';
import RightNav from './RightNav';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <RightNav open={open} />
    </>
  );
};

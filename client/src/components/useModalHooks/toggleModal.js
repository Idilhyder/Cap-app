import React, { Component } from 'react';
import { useState } from 'react';

const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);
  
    return (
      <>
        {toggle(show)}
        {isShown && content(hide)}
      </>
    );
  };

export default ToggleContent;
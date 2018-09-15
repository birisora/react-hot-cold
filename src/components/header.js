import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  // don't need to pass in the action references for restartgame and 
  // auralheader anymore
  return (
    <header>
      <TopNav/>
      <h1>HOT or COLD</h1>
    </header>
  );
}

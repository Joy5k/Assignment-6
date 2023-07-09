import React from 'react';

function Header(props) {
  return (
    <header className="text-4xl font-bold bg-gray-500 w-fit text-center mx-auto p-4 border rounded-lg">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;

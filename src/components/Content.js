import React, { useState } from 'react';

function Content() {
  const [displayedText, setDisplayedText] = useState('');

  const handleClick = () => {
    const inputText = document.getElementById('input-text').value;
    setDisplayedText(inputText);
  };

  return (
    <main className="App-content">
          {/* <textarea id="input-text" rows="4" cols="50" /> */}
          <textarea id="input-text" rows="4" cols="50" className="textarea textarea-secondary" placeholder="Bio"></textarea>
      <br />
          {/* <button onClick={handleClick}>Display Text</button> */}
          <button className="btn btn-active btn-primary" onClick={handleClick}>Display Text</button>

      <p className='my-5 font-bold italic'>{displayedText}</p>
    </main>
  );
}

export default Content;

import React, { useState } from 'react';

export default function Form({ unreadLinks, setUnreadLinks }) {
  // Track the state of the current userInput
  const [input, setInput] = useState('');

  const handleNewInput = (event) => {
    setInput(event.target.value);
  };
  const handleSubmitEvent = () => {
    // It is wholly necessary to create a new reference/pointer
    // so that react knows of the new update
    const linksCopy = [...unreadLinks, input];
    setUnreadLinks(linksCopy);
  };

  return (
    <div>
      <input value={input} onChange={handleNewInput} />
      <button type="submit" onClick={handleSubmitEvent}> Submit </button>
    </div>
  );
}

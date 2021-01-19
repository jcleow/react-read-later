import React, { useState } from 'react';

export default function ReadLink({
  readLinks, unreadLinks, setReadLinks, sendUnreadLinks,
}) {
  // Maintain the state for all the checkboxes of links that have been read
  const initialReadCheckBoxesStates = readLinks.map(() => false);
  const [readCheckboxes, setReadCheckboxes] = useState(initialReadCheckBoxesStates);

  // Function that transfers from read-link list to the unread-link list
  const sendToUnreadLinkList = (event, selectedLink, index) => {
    if (event.target.checked === true) {
      // Remove the selected read-link
      const filteredReadLinks = readLinks.filter((_, i) => i !== index);
      setReadLinks(filteredReadLinks);

      // Append the selected read-link into unreadlinks
      const unreadLinksCopy = [...unreadLinks, selectedLink];
      sendUnreadLinks(unreadLinksCopy);

      // mutate the state of the checkbox of the currently selected readCheckBox to false
      // so that it does not display as checked again
      const readCheckboxesCopy = [...readCheckboxes];
      readCheckboxesCopy[index] = false;
      setReadCheckboxes(readCheckboxesCopy);
    }
  };

  const alreadyReadLinkElArray = readLinks.map((link, i) => (
    <li>
      {link}
      <input value={readCheckboxes[i]} checked={readCheckboxes[i]} type="checkbox" onChange={(event) => { sendToUnreadLinkList(event, link, i); }} />
    </li>
  ));

  return (
    <div>
      {alreadyReadLinkElArray}
    </div>
  );
}

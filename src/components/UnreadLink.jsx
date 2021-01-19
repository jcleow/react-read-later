import React, { useState } from 'react';

export default function UnreadLink({
  readLinks, unreadLinks, setUnreadLinks, sendReadLinks,
}) {
  // Maintain the state for all the checkboxes of links that have not been read
  const initialUnreadCheckBoxes = unreadLinks.map(() => false);
  const [unReadCheckBoxes, setUnreadCheckBoxes] = useState(initialUnreadCheckBoxes);

  // Function that transfers from unread-link list to the read-link list
  const sendToReadLinkList = (event, selectedLink, index) => {
    if (event.target.checked === true) {
      // Append the selected unread-link into read links
      const readLinksCopy = [...readLinks, selectedLink];
      sendReadLinks(readLinksCopy);

      // Remove the selected unread-link
      const filteredUnreadLink = unreadLinks.filter((_, i) => i !== index);
      setUnreadLinks(filteredUnreadLink);

      // mutate the state of the checkbox of the currently selected unreadCheckBox to false
      // so that it does not display as checked again
      const unReadCheckBoxesCopy = [...unReadCheckBoxes];
      unReadCheckBoxesCopy[index] = false;
      setUnreadCheckBoxes(unReadCheckBoxesCopy);
    }
  };

  const UnreadLinkElArray = unreadLinks.map((link, i) => (
    <li>
      {link}
      <input value={unReadCheckBoxes[i]} checked={unReadCheckBoxes[i]} type="checkbox" onChange={(event) => { sendToReadLinkList(event, link, i); }} />
    </li>
  ));
  return (
    <div className="link-Link">
      <ul>
        {UnreadLinkElArray}
      </ul>
    </div>
  );
}

import React, { useState } from 'react';
import UnreadLink from './components/UnreadLink.jsx';
import ReadLink from './components/ReadLink.jsx';
import Form from './components/Form.jsx';

export default function App() {
  // Track the state of all of the Links
  const [unreadLinks, setUnreadLinks] = useState([]);
  const [readLinks, setReadLinks] = useState([]);

  return (
    <div>
      <Form unreadLinks={unreadLinks} setUnreadLinks={setUnreadLinks} />
      <label>Unread Link</label>
      <UnreadLink
        readLinks={readLinks}
        sendReadLinks={setReadLinks}
        unreadLinks={unreadLinks}
        setUnreadLinks={setUnreadLinks}
      />
      <label>Read Link</label>
      <ReadLink
        readLinks={readLinks}
        setReadLinks={setReadLinks}
        unreadLinks={unreadLinks}
        sendUnreadLinks={setUnreadLinks}
      />
    </div>
  );
}

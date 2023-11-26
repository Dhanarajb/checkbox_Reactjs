import React, { useState } from 'react';

function NewsletterForm() {
  const [isSubscribed, setSubscribed] = useState(false);

  const handleCheckboxChange = () => {
    setSubscribed(!isSubscribed);
  };

  return (
    <div>
      <h2>Newsletter Subscription</h2>
      <form>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={isSubscribed}
            onChange={handleCheckboxChange}
          />
          Subscribe to Newsletter
        </label>
      </form>
      {isSubscribed && (
        <p style={{ color: 'green' }}>You are subscribed to the newsletter!</p>
      )}
    </div>
  );
}

export default NewsletterForm;

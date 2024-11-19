import React from 'react';

function ContactForm() {
  return (
    <form>
      <label>Name:</label>
      <input type="text" />
      <label>Email:</label>
      <input type="email" />
      <label>Message:</label>
      <textarea></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;

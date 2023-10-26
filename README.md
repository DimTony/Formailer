# Formailer

This is a Node.js application that utilizes Express and Nodemailer to send emails through a contact form. It provides a basic web interface where users can enter their name, email, and a message, and the application sends the message as an email to a specified recipient.

- [Formailer](#formailer)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

# Getting Started
This project is running live on Github Pages and can be accessed via this live [link](https://dimtony.github.io/formailer/)

# Usage
- Visit the link above on your browser to display a contact form.
- FIll out the form with 
  1. Name - Your name or the person initiating the contact.
  2. Email - Your email or the email of the person iniating the contact.
  3. Message - A message you wish to deliver to the recipient.
  4. Email Service Provider - The email service where your sender's email is hosted (e.g. Gmail, Yahoo, AOL).
  5. Sender's Email Address - Your email. This should be a valid email hosted on the email service provided above.
  6. Sender's Email Password - This is NOT your regular email password. This is an app password. For Gmail users, you can find/set your app password [here](https://support.google.com/accounts/answer/185833?hl=en#:~:text=Go%20to%20your%20Google%20Account,the%20page%2C%20select%20App%20passwords.)
  7. Receiver's Email Address - The email address of the person you wish to contact
- Click the "Submit" button to send the email.

The application will use the Nodemailer library to send an email with the provided details. If the email is sent successfully, you'll receive a success message. If there is an error, you'll receive an error message.

# License
This project is licensed under the MIT License.
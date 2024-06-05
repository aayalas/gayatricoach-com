import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Welcome } from '@/emails/Welcome';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.forwardemail.net',
  port: process.env.SMTP_PORT || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'my_user',
    pass: process.env.SMTP_PASSWORD || 'my_password',
  },
});

const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: process.env.SMTP_EMAIL_FROM || 'you@example.com',
  to: 'alex.ayalas@gmail.com',
  subject: 'Welcome!',
  html: emailHtml,
  react: Welcome()
};

await transporter.sendMail(options);

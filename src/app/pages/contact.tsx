// src/pages/contact.tsx
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>This is the contact page of my portfolio.</p>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}

export default Contact;

// src/pages/about.tsx
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is the about page of my portfolio.</p>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}

export default About;

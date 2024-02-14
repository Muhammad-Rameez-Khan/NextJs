// src/pages/index.tsx
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the homepage of my portfolio.</p>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

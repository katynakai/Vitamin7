// pages/dark-mode
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.

function DarkMode() {
  return (
    <div className={clsx(usePathname())}>
      <h1>Welcome to the homepage</h1>
      <Link href="/dark-mode">
        <a>Go to dark mode</a>
      </Link>
      <Link href="/index.js">
       <a>Go to light mode</a>
      </Link>
    </div>
  );
}

export default Home;
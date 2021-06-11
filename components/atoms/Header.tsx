import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/UserProfile">
        <a>
          <h3>profile</h3>
        </a>
      </Link>
    </div>
  );
}

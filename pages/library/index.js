import React, { Component } from 'react';
import Link from 'next/link';

export class Library extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-10 subpixel-antialiased">Library</h1>

        <ul className="text-center mt-10 subpixel-antialiased">
          <li>
            <Link href="library/book/1" passHref><a className="hover:border">Book 1</a></Link>
          </li>
          <li>
            <Link href="library/book/2" passHref><a className="hover:border">Book 2</a></Link>
          </li>
          <li>
            <Link href="library/book/3" passHref><a className="hover:border">Book 3</a></Link>
          </li>
          <li>
            <Link href="library/book/4" passHref><a className="hover:border">Book 4</a></Link>
          </li>
          <li>
            <Link href="library/book/5" passHref><a className="hover:border">Book 5</a></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Library;

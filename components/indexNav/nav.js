import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import logo from '@/public/images/logo_textonly.png';
import HeaderLinks from './headerLinks/headerLinks';

function IndexNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = (event) => {
    event.preventDefault();
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <nav className="w-full px-8 md:pt-6 lg:absolute lg:top-0 lg:right-0 lg:grid lg:grid-cols-3 lg:pl-20">
      <div className="md:grid md:grid-cols-4 lg:block lg:col-start-2 lg:col-span-1">
        <button
          className="h-6 mt-6 mb-3 flex md:justify-self-start lg:hidden"
          onClick={handleMobileNav}
        >
          <svg className={'w-full h-full mr-1'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>

          <p className="">MENU</p>
        </button>

        <Link href="/">
          <a className="flex justify-center md:col-span-2 lg:w-full">
            <Image
              src={logo}
              alt="cuppa kappa logo"
              priority
            />
          </a>
        </Link>
      </div>

      <ul className={classNames(
        "mt-4 flex flex-col justify-center",
        {
          hidden: !isOpen,
        },
        "lg:row-start-1 lg:col-start-1 lg:!flex lg:!flex-row lg:justify-start"
      )}>
        <li className="flex items-center lg:mr-5">
          <Link href="/dashboard" passHref>
            <a>
              <HeaderLinks>
                LOGIN
              </HeaderLinks>
            </a>
          </Link>
        </li>

        <li className="flex items-center">
          <Link href="/dashboard" passHref>
            <a>
              <HeaderLinks>
                CREATE ACCOUNT
              </HeaderLinks>
            </a>
          </Link>
        </li>
      </ul>
    </nav >
  );
}

export default IndexNav;

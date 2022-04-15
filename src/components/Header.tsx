/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Vision', href: '#vision' },
  { name: 'Mission', href: '#mission' },
  { name: 'Events', href: '#events' },
  { name: 'Webinars', href: '#webinars' },
  { name: 'Podcast', href: '#podcasts' },
  { name: 'Contact Us', href: '#contact-us' },
];

export default function Example() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const router = useRouter();

  return (
    <Popover className=" w-full text-white fixed top-0 z-50 ">
      <div
        className={
          'container transition duration-100 ' +
          `${
            animateHeader
              ? 'bg-black/20 backdrop-blur-sm'
              : 'bg-transparent backdrop-blur-none'
          }`
        }
      >
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 space-x-10">
            <Link href="/">
              <a>
                <span className="sr-only">Logo</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/REHABICA-Logo-BLUE.png"
                  alt=""
                />
              </a>
            </Link>
            <nav className="hidden md:flex space-x-5">
              {navLinks.map(({ name, href }, id) => (
                <div key={`navlink-_${id}`} className="flex items-center ">
                  <Link href={href}>
                    <a
                      className={
                        'text-base font-medium rounded-full py-1 px-2 outline-2 outline-[#02f3ae] ' +
                        `${router.pathname === href ? 'outline' : ''}`
                      }
                    >
                      {name}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#14395e]">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/REHABICA-Logo-BLUE.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#14395e]">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

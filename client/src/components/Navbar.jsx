import React, { useContext, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';
import Logo from "../assets/Mortiz.png";
import REACT_APP_API_BASE_URL from '../utils/config';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'About', href: '/about', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await axios.get(`${REACT_APP_API_BASE_URL}/api/v1/user/patient/logout`, { withCredentials: true });
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const gotoLogin = () => {
    navigateTo("/login");
  };

  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-[8rem] pt-6 p-4 w-[8rem]"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block my-12">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-white text-gray-800' : 'text-gray-800 hover:bg-green-800 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isAuthenticated ? (
                  <button
                    className="relative h-8 w-16 rounded-xl flex items-center bg-green-800 p-1 text-white hover:text-white focus:outline-none focus:ring-2 px-3 hover:bg-gray-800 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={handleLogout}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only"></span>
                    Logout
                  </button>
                ) : (
                  <button
                    className="relative h-8 w-16 rounded-xl bg-green-800 p-1 text-white hover:text-white focus:outline-none focus:ring-2 px-3 hover:bg-gray-800 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={gotoLogin}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only"></span>
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-green-800 text-white' : 'text-gray-800 hover:bg-green-800 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

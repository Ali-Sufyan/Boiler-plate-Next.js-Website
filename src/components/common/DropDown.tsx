import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";


import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Data = [
  {
    title: "Home_1",
  },
  {
    title: "Home-2",
  },
  {
    title: "Home-3",
  },
  {
    title: "Home-4",
  },
  {
    title: "Home-5",
  },
];

export default function Dropdown() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left md:w-auto w-full max-w-[1920px] mx-auto "
    >
      <Menu.Button
        className="border border-black  rounded-lg 
                  w-full sm:w-[12rem] flex  items-center justify-between  
                    h-12  p-4  text-base  gap-2 ml-20 mt-10"
      >
        Drop-Down Menu 
       <ChevronDownIcon className="h-6 w-6" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="origin-top-right  border border-black  p-4  rounded-lg  w-full bg-white 
                absolute  mt-1    "
        >
          <div className="space-y-2">
            {Data.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <a
                    key={item.title}
                    href="#"
                    className={classNames(active ? "" : "", "block text-base ")}
                  >
                    {item.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
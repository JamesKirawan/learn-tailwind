"use client";
import * as React from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 left-0 z-50 bg-gradient-to-r from-sky-100 from-10% via-sky-200 via-30% via-sky-300 via-50% to-sky-100 to-90% ">
        <nav className="p-6 flex justify-between items-center">
          <div>
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="companyimg"
              className="h-8 w-auto"
            />
          </div>
          <div className="flex flex-row">
            {navigation.map((item, index) => (
              <div key={index} className="px-8 text-based font-medium">
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            <div className="mr-2 text-based font-medium">{"Log in"}</div>
            <span aria-hidden="true">&rarr;</span>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 justify-center flex flex-col items-center">
          <div className="relative rounded-full px-3 py-1 text-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 w-fit">
            Announcing our next round of funding.{" "}
            <a className="text-sm text-blue-600" href="#">
              <span className="absolute inset-0" aria-hidden="true" />
              Read More <span>&rarr;</span>
            </a>
          </div>
          <div className="text-6xl font-bold text-center mt-6">
            Data to enrich your online business
          </div>
          <div className="text-lg text-center mt-6 text-gray-500">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </div>

          <div className="mt-6 flex-row flex">
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-400"
            >
              Get Started
            </a>
            <a
              href="#"
              className="text-gray-900 py-2 px-4 rounded-lg cursor-pointer font-semibold"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

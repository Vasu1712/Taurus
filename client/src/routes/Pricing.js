"use client"
import { useState } from "react";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function PricingTab(props) {
  return (
    <div className="bg-app-blue h-full">
      <div className="relative flex flex-col gap-2 h-full text-white p-6 rounded-2xl border border-indigo-600 shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-base py-2 px-3 bg-indigo-600 text-white rounded-full shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="font-medium text-xl mb-1 text-gray-200">
            {props.planName}
          </div>
          <div className="inline-flex items-baseline mt-2 mb-2">
            <span className="text-slate-200 font-base text-5xl">
             ₹
            </span>
            <span className="text-slate-200 ml-1 font-bold text-5xl">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="text-slate-500 font-medium">/month</span>
          </div>
          <div className="text-sm text-gray-200 font-light mb-5">
            {props.planDescription}
          </div>
          <Link
            className="w-full mt-4 inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0"
          >
            Buy Plan
          </Link>
        </div>
        <div className="text-gray-200 font-medium mb-3">
          Includes:
        </div>
        <ul className="text-gray-300 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <Icon icon="typcn:tick" color="#10b981" width="24" height="24" />
                <span className="ml-2 text-base">{feature}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="bg-app-blue h-100vh py-10">
      {/* Pricing toggle */}
      <div className="bg-app-blue">
         <div className="content-between pt-20 flex flex-col items-center justify-center font-semibold text-indigo-600 text-base">
            Taurus
         </div>
         <div className="content-between flex flex-col items-center justify-center mt-2 text-6xl text-white font-bold">
            Pricing plans for teams of all sizes
         </div>
         <div className="content-between flex flex-col items-center justify-center mt-10 text-xl text-white font-light">
           <span className="w-1/2 text-center leading-8 "> Choose an affordable plan that is packed with the best features for engaging your audience, creating customer loyalty, and driving sales</span>
         </div>
      </div>
      <div className="flex justify-center w-56 m-auto mt-28 mb-8 ">
        <div className="relative flex w-full p-1 bg-gray-800 rounded-full">
          <span
            className="absolute inset-0 m-1 pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 bg-indigo-600 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                isAnnual ? "translate-x-0" : "translate-x-full"
              }`}
            ></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 font-semibold rounded-full focus-visible:outline-none focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
          >
            Yearly{" "}
            <span
              className={`${
                isAnnual
                  ? "text-indigo-200 text-xs font-thin"
                  : "text-gray-800 text-sm font-thin"
              }`}
            >
              -20%
            </span>
          </button>
          <button
            className={`relative flex-1 text-sm font-semibold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? "text-gray-200" : "text-white"
            }`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={isAnnual}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="w-3/4 mt-20 mx-auto grid gap-12 lg:grid-cols-3 items-start lg:max-w-none">
        {/* Pricing tab 1 */}
        <PricingTab
          yearly={isAnnual}
          planName="Essential"
          price={{ yearly: 290, monthly: 350 }}
          planDescription="The essentials to provide your best work for clients."
          features={[
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Officia deserunt mollit anim"
          ]}
        />

        {/* Pricing tab 2 */}
        <PricingTab
          yearly={isAnnual}
          popular={true}
          planName="Basic"
          price={{ yearly: 490, monthly: 550 }}
          planDescription="A plan that scales with your rapidly growing business."
          features={[
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Officia deserunt mollit anim",
            "Predefined chunks as necessary"
          ]}
        />

        {/* Pricing tab 3 */}
        <PricingTab
          yearly={isAnnual}
          planName="Enterprise"
          price={{ yearly: 790, monthly: 850 }}
          planDescription="Dedicated support and infrastructure for your company."
          features={[
            "Unlimited placeholder texts",
            "Consectetur adipiscing elit",
            "Excepteur sint occaecat cupidatat",
            "Officia deserunt mollit anim",
            "Predefined chunks as necessary",
            "Free from repetition"
          ]}
        />
      </div>
    </div>
  )
}
 
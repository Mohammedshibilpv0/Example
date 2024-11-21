import React from 'react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import  Cloud from '../../assets/Cloud.svg'
import  billing from '../../assets/billing.svg'
import  costmanage from '../../assets/costmanage.svg'
import  dashboard from '../../assets/dashboard.svg'
import  datamanagement from '../../assets/datamanagement.svg'
import  schemamanagement from '../../assets/schemamanagement.svg'
const content = [
    {
      title: "Cloud Support",
      description:
        "Go digital and stay ahead with our all-round cloud support services",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
        src={Cloud}
          width={600}
          height={600}
          className="h-full w-full object-fill"
          alt="linear board demo"
        />
      </div>
      ),
    },
    {
      title: "Savings Scheme Management",
      description:"Give your customers a comprehensive savings scheme management experience.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={schemamanagement}
            width={600}
           height={600}
           className="h-full w-full object-fill"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Data Management",
      description:"All your data - accessible anywhere, anytime. Organised in the easiest manner possible.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src={datamanagement}
            width={600}
            height={600}
            className="h-full w-full object-fill"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
        title: "Estimation & Billing",
        description:"Go digital and stay ahead with our all-round cloud support services.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src={billing}
              width={600}
              height={600}
              className="h-full w-full object-fill"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Cost Management",
        description:"Keeping track of your expenses has never been easier.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src={costmanage}
              width={600}
              height={600}
              className="h-full w-full object-fill"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Reporting & Dashboard",
        description:"Automated reports for actionable insights - managing your numbers is simple and easy!",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <img
              src={dashboard}
              width={600}
              height={600}
              className="h-full w-full object-fill"
              alt="linear board demo"
            />
          </div>
        ),
      },{},{},{},{}
  ];
const Services = () => {
    return (
        <div className='bg-slate-50 pt-4'>
        <StickyScroll  content={content} />
      </div>
    );
}

export default Services;

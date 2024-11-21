import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const ProductCard = ({ 
  cardDetails = [
  {
    title: "Chit & Scheme Management",
    description: "Facilitates seamless administration and tracking of various chit funds and schemes.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
          </svg>
        ),
        title: "Flexible Scheme Creation and Management",
        description: "Create and manage chit funds seamlessly."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Automated Tracking of Schemes",
        description: "Effortlessly manage scheme tracking."
      }
    ]
  },
  {
    title: "Payment Management",
    description: "Simplifies transaction processing and invoicing for enhanced financial efficiency.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
            <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        ),
        title: "Streamlined Payments",
        description: "Simplify transaction processing."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.276c.897.16 1.779.57 2.468 1.105l.262.22c.753.629 1.543 1.077 2.652 1.077 1.109 0 1.899-.448 2.652-1.077l.262-.22c.689-.536 1.57-.945 2.468-1.105V5.25a3 3 0 00-3-3h-3a3 3 0 00-3 3v.576c-.94.164-1.887.508-2.643 1.074l-.262.22a.78.78 0 01-1.125-.322l-.928-1.852A3 3 0 0014.25 2.25h3A3 3 0 0120.25 5.25v.276c.897.16 1.779.57 2.468 1.105l.262.22c.753.629 1.543 1.077 2.652 1.077 1.109 0 1.899-.448 2.652-1.077l.262-.22c.689-.536 1.57-.945 2.468-1.105V15a.75.75 0 11-1.5 0v-5.052a9 9 0 00-1.5-.64V15a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25V5.25a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v.176c-.252.338-.423.729-.488 1.107l-.19.953-.53-.843a.78.78 0 00-1.125-.322l-.928 1.852A3 3 0 017.5 5.774V5.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Seamless Integration",
        description: "Integrate payments efficiently."
      }
    ]
  },
  {
    title: "Customer Management",
    description: "Enables comprehensive customer relationship management with segmentation and personalized communication tools.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm16 1H5v10h14V7z" clipRule="evenodd" />
          </svg>
        ),
        title: "Customer Database Maintenance",
        description: "Create and manage customer records efficiently."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Profile Management",
        description: "Maintain and manage customer profiles."
      }
    ]
  },
  {
    title: "Purchase Management",
    description: "With AU Pay, customers can keep track of all of their purchases with ease!",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm16 1H5v10h14V7z" clipRule="evenodd" />
          </svg>
        ),
        title: "Efficient tracking of purchased goods",
        description: "Create and manage customer records efficiently."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Comprehensive Product Details",
        description: "Maintain and manage customer profiles."
      }
    ]
  },
  {
    title: "Ease of Access",
    description: "Allow customers the convenience of finding out their accumulated money or weight in gold - all in one tap!",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm16 1H5v10h14V7z" clipRule="evenodd" />
          </svg>
        ),
        title: "Accurate Record Maintenance",
        description: "Create and manage customer records efficiently."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Paperless",
        description: "Maintain and manage customer profiles."
      }
    ]
  },
  {
    title: "Loyalty & Reward Points",
    description: "Drives customer retention and engagement with customizable loyalty programs and reward point systems.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm16 1H5v10h14V7z" clipRule="evenodd" />
          </svg>
        ),
        title: "Easy Point Redemption",
        description: "Create and manage customer records efficiently."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Customizable Loyalty Programs",
        description: "Maintain and manage customer profiles."
      }
    ]
  },
  {
    title: "Email/ SMS/ Whatsapp Notification",
    description: "Automates communication channels to keep customers informed and engaged throughout their journey.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm16 1H5v10h14V7z" clipRule="evenodd" />
          </svg>
        ),
        title: "Automated Updates",
        description: "Create and manage customer records efficiently."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Personalized Messaging",
        description: "Maintain and manage customer profiles."
      }
    ]
  },
  {
    title: "Enquiry & Follow-up",
    description: "Keep all your customer inquiries in check and maintain perfect follow-up systems for efficient sales management!",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm16 1H5v10h14V7z" clipRule="evenodd" />
          </svg>
        ),
        title: "Centralized Inquiries",
        description: "Create and manage customer records efficiently."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Automated Follow-Ups",
        description: "Maintain and manage customer profiles."
      }
    ]
  },
  {
    title: "Online Payment Module",
    description: "Provides a secure and user-friendly platform for online transactions, ensuring convenience and reliability.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm16 1H5v10h14V7z" clipRule="evenodd" />
          </svg>
        ),
        title: "Safe and Secure",
        description: "Create and manage customer records efficiently."
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 8.25a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V8.25z" clipRule="evenodd" />
          </svg>
        ),
        title: "Ease of Usage",
        description: "Maintain and manage customer profiles."
      }
    ]
  }
]

}) => {
  return (
    <div className="container mx-auto px-10 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardDetails.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100"
          >
            <div className="p-4 relative">
              {/* Decorative subtle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 -z-10"></div>
              
              {/* Title and Description */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>

              {/* Features */}
              {card.features.map((feature, featureIndex) => (
                <div 
                  key={featureIndex} 
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 ${featureIndex < card.features.length - 1 ? 'mb-3' : ''}`}
                >
                  <div className="p-2 bg-blue-100 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-1 flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-1" />
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
import React, { useState } from 'react';
import auPay from '../../assets/aupay.svg';
import ausales from '../../assets/ausales.svg';
import aushop from '../../assets/aushop.svg';

const tabs = [
    {
        id: 'auPay',
        label: 'Au Pay',
        content: 'Au Pay is a payment management system that simplifies transactions for businesses.',
        image: auPay,
    },
    {
        id: 'auSales',
        label: 'Au Sales',
        content: 'Au Sales helps manage inventory and sales records efficiently.',
        image: ausales,
    },
    {
        id: 'auShop',
        label: 'Au Shop',
        content: 'Au Shop is your online store platform for managing products and customers.',
        image: aushop,
    },
];

const AuServices = () => {
    const [activeTab, setActiveTab] = useState('auPay');

    const activeTabData = tabs.find((tab) => tab.id === activeTab);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 pt-5 bg-slate-50">
            {/* Tabs */}
            <div className="flex justify-center gap-8 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 text-lg font-semibold rounded-lg transition ${
                            activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTabData && (
                <div className="flex items-center gap-8 bg-gray-50 p-8 rounded-lg shadow-lg">
                    {/* Image */}
                    <div className="w-1/2">
                        <img
                            src={activeTabData.image}
                            alt={activeTabData.label}
                            className="w-full h-90 object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Details */}
                    <div className="w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            {activeTabData.label}
                        </h2>
                        <p className="text-lg text-gray-700">{activeTabData.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuServices;

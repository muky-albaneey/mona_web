import React from 'react';
import { Collapse, Button } from 'antd';

const ProtectionPlans = () => {
  // Define the accordion items using Ant Design's recommended 'items' prop syntax
  const items = [
    {
      key: 'brand',
      label: 'Select Device Brand',
      children: (
        <select className="w-full p-2 border border-gray-300 rounded mt-2">
          <option value="">Select Brand</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="google">Google</option>
        </select>
      ),
    },
    {
      key: 'model',
      label: 'Select Device Model',
      children: (
        <select className="w-full p-2 border border-gray-300 rounded mt-2">
          <option value="">Select Model</option>
          <option value="iphone15">iPhone 15</option>
          <option value="galaxyS23">Galaxy S23</option>
          <option value="pixel7">Pixel 7</option>
        </select>
      ),
    },
    {
      key: 'state',
      label: 'Select Current State',
      children: (
        <select className="w-full p-2 border border-gray-300 rounded mt-2">
          <option value="">Select State</option>
          <option value="california">California</option>
          <option value="newyork">New York</option>
          <option value="texas">Texas</option>
        </select>
      ),
    },
    {
      key: 'city',
      label: 'Select Current City',
      children: (
        <select className="w-full p-2 border border-gray-300 rounded mt-2">
          <option value="">Select City</option>
          <option value="losangeles">Los Angeles</option>
          <option value="newyorkcity">New York City</option>
          <option value="houston">Houston</option>
        </select>
      ),
    },
  ];

  // (Optional) Callback for Collapse change events
  const handleCollapseChange = (activeKeys) => {
    console.log('Active panels: ', activeKeys);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-400 p-4">
      {/* Header Section */}
      <div className="text-center text-white mb-6">
        <h6 className="text-sm font-semibold tracking-widest">CHECK YOUR PLAN</h6>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Check Out Our Available Protection Plans
        </h1>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        {/* Ant Design Collapse (Accordion) */}
        <Collapse
          items={items}
          defaultActiveKey={['brand']}
          onChange={handleCollapseChange}
          expandIconPosition="end"
        />

        {/* Submit Button */}
        <Button type="primary" className="w-full mt-4" size="large">
          Check Plan
        </Button>
      </div>
    </div>
  );
};

export default ProtectionPlans;

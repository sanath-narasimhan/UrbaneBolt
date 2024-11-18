import React from 'react';

const IntegrationsList: React.FC = () => {
  return (
    <div className="p-4 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 pb-20">
        Seamless integrations with the top e-commerce platforms.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
        <img src="/integration/shiprocket.webp" alt="ShipRocket" className="w-24 h-auto shadow-md rounded mx-auto" />
        <img src="/integration/amazon.webp" alt="Amazon" className="w-24 h-auto shadow-md rounded mx-auto" />
        <img src="/integration/shopify.webp" alt="Shopify" className="w-24 h-auto shadow-md rounded mx-auto" />
        <img src="/integration/unicommerce.webp" alt="UniCommerce" className="w-24 h-auto shadow-md rounded mx-auto" />
        
        <img src="/integration/woocommerce.webp" alt="WooCommerce" className="w-24 h-auto shadow-md rounded mx-auto" />
        <img src="/integration/magento.webp" alt="Magento" className="w-24 h-auto shadow-md rounded mx-auto" />
        <img src="/integration/easycom.webp" alt="easycom" className="w-24 h-auto shadow-md rounded mx-auto" />
        <img src="/integration/clickpost.webp" alt="ClickPost" className="w-24 h-auto shadow-md rounded mx-auto" />
      </div>
    </div>
  );
};

export default IntegrationsList;

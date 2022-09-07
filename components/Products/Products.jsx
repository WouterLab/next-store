import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const Products = () => {
  return (
    <div className='bg-[#3f4346] h-screen border-[#88929a] border-l-2 border-r-2 flex flex-col justify-center'>
      <div className='flex justify-start items-start py-6 pl-10'>
        <h2 className='text-8xl text-white font-semibold w-4/5'>OUR FEATURED PRODUCTS</h2>
      </div>
      <div className='h-2/3 border-[#88929a] border-t-2 border-b-2 w-full flex justify-around items-center'>
        <ProductItem src='Chair261' title='BEIGE WOODEN CHAIR' price={1299} />
        <ProductItem src='Chair270' title='GREEN CUSH ARMCHAIR' price={1799} />
      </div>
      <div className='flex justify-center items-center align-middle py-8'>
        <h2 className='text-8xl text-white font-semibold w-4/5 text-center'>LOOKBOOK</h2>
      </div>
    </div>
  );
};

export default Products;

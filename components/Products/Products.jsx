import React from 'react'
import ProductItem from '../ProductItem/ProductItem'

const Products = () => {
  return (
    <div className='bg-[#3f4346] h-screen border-[#88929a] border-l-2 border-r-2 flex items-center'>
        <div className='h-2/3 border-[#88929a] border-t-2 border-b-2 w-full'>
            <ProductItem />
        </div>
    </div>
  )
}

export default Products
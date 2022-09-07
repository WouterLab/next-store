import Image from 'next/image';
import React from 'react';
import Chair261 from '../Products/images/image_261.png';
import Chair268 from '../Products/images/image_268.png';
import Chair269 from '../Products/images/image_269.png';
import Chair270 from '../Products/images/image_270.png';
import Chair265 from '../Products/images/image_265.png';

const ProductItem = ({ src, title, price }) => {
  return (
    <div className='gradient h-4/5 w-1/3 flex flex-col justify-center items-center'>
      <Image
        src={
          src === 'Chair261'
            ? Chair261.src
            : src === 'Chair268'
            ? Chair268.src
            : src === 'Chair269'
            ? Chair269.src
            : src === 'Chair265'
            ? Chair265.src
            : Chair270.src
        }
        alt='chairIMG'
        width={300}
        height={300}
      />
      <div className='flex flex-row justify-around w-full mt-8'>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;

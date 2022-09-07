import Image from 'next/image';
import React from 'react';
import UserSvg from './images/user.svg';

const ReviewItem = ({ name, email, body }) => {
  return (
    <div className='h-4/5 bg-white/20 shadow shadow-gray text-white w-[400px] shrink-0 mr-10 ml-9 p-9'>
      <Image src={UserSvg.src} width={50} height={50} alt='user' />
      <p>
        <span className='text-neutral-800'>User: </span>
        {name}
      </p>
      <p>
        <span className='text-neutral-800'>Mail: </span>
        {email}
      </p>
      <p>
        <span className='text-neutral-800'>Review: </span>
        {body}
      </p>
    </div>
  );
};

export default ReviewItem;

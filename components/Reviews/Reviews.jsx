import Image from 'next/image';
import ReviewItem from '../ReviewItem/ReviewItem';
import AcceptSvg from './images/accept.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AcceptElem = () => {
  const config = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
  };
  return (
    <motion.div
      transition={config}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
    >
      <Image src={AcceptSvg.src} width={35} height={35} alt='accept' />
    </motion.div>
  );
};

const Reviews = ({ reviews }) => {
  const [isSent, setIsSent] = useState(false);
  const initState = {
    left: false,
    middle: false,
    right: false,
  };
  const [isActive, setActive] = useState({ ...initState, left: true });
  const slideLeft = () => {
    if (!isActive.middle && isActive.left) {
      setActive({ ...initState, right: true });
    } else if (isActive.middle && !isActive.left) {
      setActive({ ...initState, left: true });
    } else if (isActive.right) {
      setActive({ ...initState, middle: true });
    }
  };
  const slideRight = () => {
    if (!isActive.middle && isActive.right) {
      setActive({ ...initState, left: true });
    } else if (isActive.middle && !isActive.right) {
      setActive({ ...initState, right: true });
    } else if (isActive.left) {
      setActive({ ...initState, middle: true });
    }
  };
  return (
    <div className='bg-[#88929a] h-screen border-white border-l-2 border-r-2 flex flex-col'>
      <div className='basis-[42%] flex flex-col items-center justify-center'>
        <h2 className='text-8xl text-center text-white font-semibold'>
          BE PART OF OUR CLUB FOR DISCOUNT
        </h2>
        <div className='m-12 flex flex-row'>
          <input
            type='text'
            className='px-32 py-6 border-white border-2 border-r-0 text-xl bg-[#88929a] focus:outline-none text-white text-center placeholder:text-white'
            placeholder='YOUR EMAIL'
          />
          <button
            onClick={() => setIsSent(true)}
            className='w-24 border-white border-2 text-white'
          >
            {isSent ? (
              <AcceptElem />
            ) : (
              <p
                style={{ transition: '2s ease-in all' }}
                className={isSent ? 'hidden' : 'block'}
              >
                Send
              </p>
            )}
          </button>
        </div>
      </div>
      <div className='basis-[38%] border-t-2 border-white'>
        <div className='flex flex-row justify-evenly h-full items-center'>
          <button id='left' onClick={slideLeft}>
            <span className='text-8xl text-white font-light'>{'<'}</span>
          </button>
          <div className='h-full overflow-hidden'>
            <div
              style={{
                left: `${
                  isActive.middle ? '-1435px' : isActive.right ? '-2870px' : '0'
                }`,
              }}
              className='slider flex flex-row h-full w-full justify-start items-center relative'
            >
              {!!reviews.length &&
                reviews.map((res) => {
                  return (
                    <ReviewItem
                      key={res.id}
                      name={res.name}
                      email={res.email}
                      body={res.body}
                    />
                  );
                })}
            </div>
          </div>
          <button id='right' onClick={slideRight}>
            <span className='text-8xl text-white font-light'>{'>'}</span>
          </button>
        </div>
      </div>
      <div className='basis-[20%] border-t-2 border-white flex justify-center items-center'>
        <h1 className='text-9xl text-white font-bold'>FURNICO</h1>
      </div>
    </div>
  );
};

export default Reviews;

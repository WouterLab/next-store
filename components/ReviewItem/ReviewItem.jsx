import Image from "next/image";
import React from "react";
import UserSvg from "./images/user.svg";

const ReviewItem = () => {
  return (
    <div className="w-1/4 h-4/5 bg-white/20 shadow shadow-gray text-white">
      <div>
        <Image src={UserSvg.src} width={50} height={50} alt='user' />
      </div>
    </div>
  );
};

export default ReviewItem;

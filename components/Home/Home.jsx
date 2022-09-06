import ChairImg from "./images/wooden chair.jpg";
import AvatarImg from "./images/square.jpg";
import PlayImg from "./images/play.png";
import WoodenImg from "./images/wooden.jpg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="border-t-2 border-black mx-auto mt-10 flex justify-between h-20 items-center">
        <div className="border-r border-black basis-1/3 h-3/4 justify-center flex items-center cursor-pointer">
          <Link href="/products">
            <p>SHOP</p>
          </Link>
        </div>
        <div className="basis-1/3 h-3/4 justify-center flex items-center">
          <p className="text-4xl font-bold">FURNICO</p>
        </div>
        <div className="border-l border-black basis-1/3 h-3/4 justify-center flex items-center cursor-pointer">
          <p>BAG (3)</p>
        </div>
      </div>
      <div className="w-11/12 mx-auto border-t-2 border-black h-full">
        <div className="flex flex-row">
          <div className="w-2/4 flex items-center flex-col border-r-2 border-black">
            <h1 className="text-7xl m-10 font-semibold">FURNICO</h1>
            <Image
              className="shadow-black shadow-inner"
              src={ChairImg.src}
              width={620}
              height={720}
              alt="chair"
            />
            <div className="w-[65%] flex justify-center mt-10">
              <h3 className="text-3xl font-semibold">
                SEAMLESSFURNITURE WITH NATURAL FABRICS
              </h3>
            </div>
            <div className="w-[65%] flex justify-between mt-10 mb-10">
              <Link href="/products">
                <button className="bg-black text-white w-2/5 h-12 font-semibold hover:bg-white hover:text-black hover:border-black hover:border-2 ease-in duration-300">
                  Shop All
                </button>
              </Link>
              <Link href="/reviews">
                <button className="w-2/5 h-12 border-2 border-black mr-10 font-semibold hover:bg-black hover:text-white ease-in duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-2/4">
            <div className="border-b-2 border-black h-2/6">
              <div className="flex flex-row relative mt-10 ml-10">
                <div className="image-cropper border-white">
                  <Image
                    className="avatar"
                    src={AvatarImg.src}
                    width={100}
                    height={100}
                    alt="avatar"
                  />
                </div>
                <div className="image-cropper border-2 border-solid border-white left-16 absolute">
                  <Image
                    className="avatar"
                    src={PlayImg.src}
                    width={100}
                    height={100}
                    alt="playbtn"
                  />
                </div>
              </div>
              <div className="w-3/5 ml-10 mt-7">
                <h3 className="font-bold text-4xl">
                  We Believe In Improving Life In Cities Through Quality Design
                </h3>
                <Link href='/about'>
                  <h3 className="font-bold text-4xl mt-7 decoration-solid text-stone-500 underline cursor-pointer hover:text-black ease-in duration-300">
                    See More
                  </h3>
                </Link>
              </div>
            </div>
            <div>
              <div className="m-10">
                <Image
                  className="shadow-black shadow-inner"
                  src={WoodenImg.src}
                  width={450}
                  height={550}
                  alt="wooden_chair"
                />
                <div className="flex flex-row mb-10">
                  <h3 className="text-3xl font-semibold basis-2/5">
                    PAOLA WOOD CHAIR
                  </h3>
                  <h3 className="text-3xl font-semibold text-stone-800 cursor-pointer hover:text-stone-500 ease-in duration-300">
                    $5900
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

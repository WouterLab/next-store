import ChairImg from "./images/wooden chair.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="border-t-2 border-black mx-auto mt-10 flex justify-between h-20 items-center">
        <div className="border-r border-black basis-1/3 h-3/4 justify-center flex items-center">
          <p>SHOP</p>
        </div>
        <div className="basis-1/3 h-3/4 justify-center flex items-center">
          <p className="text-4xl font-bold">FURNICOD</p>
        </div>
        <div className="border-l border-black basis-1/3 h-3/4 justify-center flex items-center">
          <p>BAG (3)</p>
        </div>
      </div>
      <div className="w-11/12 mx-auto border-t-2 border-black">
        <div className="">
          <div className="w-2/4 flex items-center flex-col">
            <h1 className="text-7xl">FURNICOD</h1>
              <Image src={ChairImg.src} width={600} height={800} alt="chair" />
          </div>
          <div className="w-2/4">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

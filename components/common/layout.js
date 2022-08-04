import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container max-w-[1024px] mx-auto flex flex-row my-40 h-full shadow-2xl rounded-l-[50px] rounded-r-[50px]">
      <div className="flex flex-row w-9/12 bg-gradient-to-r to-cyan-500 from-[#58c3d9] rounded-l-[50px] rounded-r-md mr-0.5">
        <Sidebar />
        {children}
      </div>
      <div className="bg-amber-400 w-1/4 rounded-l-md rounded-r-[50px]">Text</div>
    </div>
  );
};

export default Layout;

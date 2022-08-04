import Link from 'next/link'
import { BsShop } from "react-icons/bs";
import NavBtn from '../NavBtn';

const Sidebar = () => {
  return (
    <aside className='ml-10 mt-10'>
      <div>
        <BsShop />
      </div>
      <nav className='flex flex-col'>
        <NavBtn />
        <Link href='/'><a>Home</a></Link>
        <Link href='/chairs'><a>Chair</a></Link>
        <Link href='/tables'><a>Table</a></Link>
        <Link href='/lights'><a>Lights</a></Link>
        <Link href='/sofas'><a>Sofas</a></Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

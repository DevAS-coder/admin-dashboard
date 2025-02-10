import React, { useContext } from 'react';
import { SideContext } from '../../../Contexts/SidebarContext';
import { Usercontext } from '../../../Contexts/Userinfo';

function Header() {

    const {isOpen} = useContext(SideContext)
      const {name, Username} = useContext(Usercontext)

    return (
        <div className={`fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 pt-5 pb-5 pr-15 shadow-md flex justify-between items-center transition-all duration-300 ease-in-out ${isOpen ? 'pr-72' : 'pr-18 md:pr-25'}`} >
            <h1 className=' text-white text-sm md:text-xl whitespace-nowrap'>سلام {name} خوش اومدی! 👋</h1>
            <div className="flex items-center gap-4">
                <i className="fa-solid fa-bell cursor-pointer hover:text-gray-400"></i>
                <i className="fa-solid fa-user cursor-pointer hover:text-gray-400"></i>
            </div>
        </div>
    );
}

export default Header;

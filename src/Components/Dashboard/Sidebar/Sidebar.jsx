import React, { useCallback, useContext } from 'react';
import Sideitem from './Sideitem';
import SideIcon from './SideIcon';
import { SideContext } from '../../../Contexts/SidebarContext';
import { Link } from 'react-router-dom';

function Sidebar() {

  const itemNames = [
    'داشبورد',
    'نمودار ها',
    'سفارشات',
    'تیکت ها'
  ]

  const icons = [
    'fa-solid fa-folder',
    'fa fa-pie-chart',
    'fa-solid fa-cart-plus',
    'fa-solid fa-ticket'
  ]

  const links = [
    '/dashboard',
    '/dashboard/charts',
    '/dashboard/orders',
    '/dashboard/tickets'
  ]

  const { isOpen, setisOpen } = useContext(SideContext)
  const handleMouseEnter = useCallback(() => setisOpen(true), [setisOpen]);
  const handleMouseLeave = useCallback(() => setisOpen(false), [setisOpen]);

  return (
    <div className={`bg-gradient-to-b will-change-transform from-gray-900 to-gray-950 text-white shadow-xl min-h-screen fixed right-0 top-0 p-3 pt-6 md:p-6 overflow-hidden ${isOpen ? 'w-90 sm:w-64' : 'w-14 md:w-20'} transition-all duration-300 ease-out rounded-l-xl z-90`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`flex items-center border-b border-gray-700 pb-4 mb-6 ${isOpen ? 'justify-between' : 'justify-center'}`}>
        {isOpen ? (
          <h1 className='text-xl font-semibold tracking-wide whitespace-nowrap overflow-hidden'>نوار ابزار</h1>
        ) : null}
        <div
          className='border border-gray-500 rounded-full w-7 h-7 p-2 flex justify-center items-center cursor-pointer hover:bg-gray-700 transition'
          onClick={() => setisOpen(!isOpen)}>
          <i className={`fa-solid text-sm ${isOpen ? 'fa-x' : 'fa-bars'} text-lg`}></i>
        </div>
      </div>

      <ul>
        {itemNames.map((item, index) =>
        (
          <Link to={`${links[index]}`} key={index}>
          <li
            className={`mb-6 pb-3 flex items-center transition-all duration-300 group cursor-pointer hover:bg-gray-800 rounded-lg justify-between ${isOpen ? 'p-3' : 'pt-3'} hover:text-blue-600`}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <SideIcon icon={icons[index]} />
              <span
                className={`whitespace-nowrap transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              >
                <Sideitem itemname={item} />
              </span>
            </div>

            <div>
              <span className={`text-xl transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </div>

          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
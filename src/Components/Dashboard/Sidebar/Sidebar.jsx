import React, { useContext } from 'react';
import Sideitem from './Sideitem';
import SideIcon from './SideIcon';
import { SideContext } from '../../../Contexts/SidebarContext';

function Sidebar() {

  const itemNames = [
    'نمودار ها',
    'سفارشات',
    'تیکت ها'
  ]

  const icons = [
    'fa fa-pie-chart',
    'fa-solid fa-cart-plus',
    'fa-solid fa-ticket'
  ]

  const { isOpen, setisOpen } = useContext(SideContext)

  return (
    <div className={`bg-black text-white sidebar-shadow min-h-screen fixed right-0 top-0 p-8 overflow-hidden ${isOpen ? 'w-64' : 'w-24'} transition-all duration-500 ease-in-out`}>
      {isOpen ?
        <div className='flex justify-between items-center border-b-2 pb-5 mb-10'>
          <div className='flex justify-center items-center'>
            <h1 className='text-2xl font-bold whitespace-nowrap overflow-hidden'>نوار ابزار</h1>
          </div>
          <div className='border-2 rounded-2xl p-2 w-6 h-6 flex justify-center items-center cursor-pointer' onClick={() => { setisOpen(false) }}>
            <i className='fa-solid fa-x text-xs'></i>
          </div>
        </div>
        :
        <div className='flex justify-between items-center border-b-2 pb-5 mb-10'>
          <div className='border-2 rounded-2xl p-3 w-8 h-8 flex justify-center items-center cursor-pointer' onClick={() => { setisOpen(true) }}>
            <i className='fa-solid fa-bars text-md'></i>
          </div>
        </div>
      }

      <ul>
        {itemNames.map((item, index) =>
        (
          <li
            key={index}
            className={`mb-7 border-gray-500 border-b-2 pb-3 flex items-center transition-all duration-500 ${isOpen ? 'justify-between' : 'justify-center'
              }`}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <SideIcon icon={icons[index]} />
              <span
                className={`whitespace-nowrap transition-all duration-500 ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                  }`}
              >
                <Sideitem itemname={item} />
              </span>
            </div>

            {isOpen && (
              <div>
                <span className="text-xl">
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
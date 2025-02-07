import React from 'react';
import DashboardChart from './Charts/DashboardChart';
import Cards from './Cards';
import QuickSetting from './QuickSetting';
import { CardsContext } from '../../Contexts/CardsContext';

function Dashboard() {

  return (
    <CardsContext>
        <div className="bg-gray-900 text-white p-4">
          <div className='mb-5'>
            <Cards />
          </div>

          <div className="">
            <h2 className="text-lg font-bold mr-10 mt-10 -mb-10">نمودار درآمد</h2>
            <div className='bg-gray-800 p-4 rounded-xl'>
              <DashboardChart />
            </div>
          </div>

          <div className="mb-6 mt-5">
            <QuickSetting />
          </div>
        </div>
    </CardsContext>
  );
};

export default Dashboard;

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
        <Cards/>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">نمودار درآمد</h2>
        <DashboardChart />
      </div>

      <div className="mb-6">
        <QuickSetting/>
      </div>
    </div>
    </CardsContext>
  );
};

export default Dashboard;

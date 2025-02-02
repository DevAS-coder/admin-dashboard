import React from 'react'
import SalesChart from './Charts/SalesChart'
import SellerChart from './Charts/SellerChart'
import { memo } from 'react'

const ChartsPage = () => {
  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen grid grid-cols-1 lg:grid-cols-2 pl-20">
        <SalesChart />
        <SellerChart />
    </div>
  )
}

export default memo(ChartsPage)
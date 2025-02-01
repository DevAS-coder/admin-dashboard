import React from 'react'
import SalesChart from './Charts/SalesChart'
import SellerChart from './Charts/SellerChart'


function ChartsPage() {
  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <SalesChart/>
      <SellerChart/>
    </div>
  )
}

export default ChartsPage
import React from 'react'

const StatsCard = ({ title, value, suffix = "", subtitle }) => {
  return (
    <div className="py-3 pl-4 pr-24 text-left bg-white rounded-lg shadow-sm border backdrop-blur-lg border-gray-200">
      <div className="text-3xl font-bold text-[#6a44c8] mb-2">
        {value}
        {suffix}
      </div>
      <div className="text-sm font-medium text-gray-900 mb-1">{title}</div>
      {subtitle && (
        <div className="text-sm text-gray-500 font-[100]">{subtitle}</div>
      )}
    </div>
  )
}

export default StatsCard
import React from 'react'

const GenderCheck = () => {
  return (
    <div className='flex text-gray-300 gap-4 my-2'>
        <div className='form-control'>
            <label className={'label gap-1 cursor-pointer'}>
                <span>Male</span>
                <input type="checkbox" className="checkbox checkbox-success border-info" />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-1 cursor-pointer'}>
                <span>Female</span>
                <input type="checkbox" className="checkbox checkbox-success border-info" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheck
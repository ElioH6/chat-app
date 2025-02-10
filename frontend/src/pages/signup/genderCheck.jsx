import React from 'react'

const GenderCheck = ({ onCheckChange, gender }) => {
  return (
    <div className='flex text-gray-300 gap-4 my-2'>
        <div className='form-control'>
            <label className={'label gap-1 cursor-pointer'}>
                <span>Male</span>
                <input type="checkbox" className="checkbox checkbox-success border-info" 
                    checked={gender === 'male'}
                    onChange={() => onCheckChange('male')}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-1 cursor-pointer'}>
                <span>Female</span>
                <input type="checkbox" className="checkbox checkbox-success border-info" 
                    checked={gender === 'female'}
                    onChange={() => onCheckChange('female')}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheck
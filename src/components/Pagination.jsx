import React from 'react'

function Pagination({handlePrev, handleNext, pageNo}) {
  return (
    <div style={{ backgroundColor: 'gray', padding: '6px', display: 'flex', justifyContent: 'center', gap: '6px', marginTop:'5px' }}>
        <div onClick={handlePrev} className='px-15'><i class="fa-solid fa-arrow-left"></i></div>
        <div style={{fontWeight:'bold'}}>{pageNo}</div>
        <div onClick={handleNext} className='px-15'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
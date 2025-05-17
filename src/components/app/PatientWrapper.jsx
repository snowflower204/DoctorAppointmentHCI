import React from 'react'
import NavBar from './NavBar'

const PatientWrapper = ({ children }) => {
  return (
    <>
        <NavBar />
        <div className='PatientWrapper'>{ children }</div>
    </>
  )
}

export default PatientWrapper
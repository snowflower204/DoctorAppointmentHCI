import React from 'react'
import NavBar from './NavBar'

const PatientWrapper = ({ children }) => {
  return (
    <>
        <NavBar />
        <div className='patient-wrapper'>{ children }</div>
    </>
  )
}

export default PatientWrapper
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import UserJob from './UserJob'
// import { UserContext } from '../App'

const UserJobsContainer = ( {} ) => {

  const[userJobs, setUserJobs] = useState([])
  // const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    axios.get('/users')
    .then(function (response) {
     setUserJobs(response.data)
    })
    .catch(function (error) {
      console.log("Jobs Error:", error)
    })
  }, [])

//removed userJobs from useEffect depency that was update the state of edited job after edit is complete
//need to mirror the logic of this handleDeleteUserJob function bellow to update state after edit
//Create a handleEditUserJob function up from EditJobForm to UserJob to UserJobContainer

  const handleDeleteUserJob = (id) => {
    const updatedUserJobs = userJobs.filter((job) => job.id !== id);
    setUserJobs(updatedUserJobs)
  }


  
  return (
    <section>
          {userJobs.map((job) => {
        return (
        <UserJob job={job} key={job.id} id={job.id} company={job.company.company_size} companyID={job.company.id} industry={job.industry.industry_type} industryID={job.industry.id} user={job.user.username} handleDeleteUserJob={handleDeleteUserJob} userJobs={userJobs} setUserJobs={setUserJobs} /> )
      })}
    </section>
  )
}

export default UserJobsContainer
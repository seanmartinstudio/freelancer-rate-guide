import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import UserJob from './UserJob'
import { UserContext } from '../App'

const UserJobsContainer = () => {

  const[userJobs, setUserJobs] = useState([])
  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    axios.get('/users')
    .then(function (response) {
     setUserJobs(response.data)
    })
    .catch(function (error) {
      console.log("Jobs Error:", error)
    })
  }, [])
  
  return (
    <section>
          {userJobs.map((job) => {
        return (
        <UserJob job={job} key={job.id} company={job.company.company_size} industry={job.industry.industry_type} user={job.user.username} /> )
      })}
    </section>
  )
}

export default UserJobsContainer
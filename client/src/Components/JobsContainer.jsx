import React, { useState, useEffect } from 'react'
import Job from './Job'
import JobSearchBar from './JobSearchBar'
import axios from 'axios'

const JobsContainer = () => {
    const[jobs, setJobs] = useState([])
  
  useEffect(() => {
    axios.get('/jobs')
  .then(function (response) {
   setJobs(response.data)
  })
  .catch(function (error) {
    console.log("Jobs Error:", error)
  })
  }, []);


  console.log("JOBS OBJ:", jobs)

  return (
    <section>
        <JobSearchBar/>
    
        {jobs.map((job) => {
        return (
        <Job job={job} key={job.id} company={job.company.company_size} industry={job.industry.industry_type} user={job.user.username} /> )
      })}
    
    </section>
   
  )
}

export default JobsContainer
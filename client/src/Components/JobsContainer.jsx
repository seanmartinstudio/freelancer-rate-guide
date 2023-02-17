import React, { useState, useEffect } from 'react'
import Job from './Job'
import JobSearchBar from './JobSearchBar'
import axios from 'axios'

const JobsContainer = () => {
    const [jobTitle, setJobTitle] = useState("")
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


  const jobTitleArr = ["Animator", "Art Director", "Cinematographer", "Copy Editor", "Copywriter", "Creative Director", "Developer", "Graphic Designer", "Illustrator", "Motion Graphics Designer", "Photographer", "Producer", "Product Designer", "Project Manager", "Strategist", "UX/UI Designer", "Video Director", "Video Editor"]

  const jobTitleOptions = jobTitleArr.map((job) =>
        <option>{job}</option>
        )

    console.log("Drop Down Job Title:", jobTitle)
    console.log("Job Selected After Drop Down", jobs)

  return (
    <div>
    <section>
        {/* <JobSearchBar jobTitle={jobTitle}/> */}
    
        {jobs.map((job) => {
        return (
        <Job job={job} key={job.id} company={job.company.company_size} industry={job.industry.industry_type} user={job.user.username} /> )
      })}
    
    </section>
    <form>
       <select name="jobtitle" id="jobtitle" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} >
        <option id="jobtitles" value="">Job Title...</option>
        {jobTitleOptions}
        </select>
   </form>
    </div>
  )
}

export default JobsContainer
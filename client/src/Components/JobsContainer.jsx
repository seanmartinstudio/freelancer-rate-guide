import React, { useState, useEffect } from 'react'
import Job from './Job'
import JobSearchBar from './JobSearchBar'
import axios from 'axios'

const JobsContainer = () => {
    const [jobTitle, setJobTitle] = useState("All")
    const[jobs, setJobs] = useState([])
  
  useEffect(() => {
    axios.get('/jobs_search/' + jobTitle)
  .then(function (response) {
   setJobs(response.data)
  })
  .catch(function (error) {
    console.log("Jobs Error:", error)
  })
  }, [jobTitle]);


  const jobTitleArr = ["Animator", "Art Director", "Cinematographer", "Copy Editor", "Copywriter", "Creative Director", "Developer", "Graphic Designer", "Illustrator", "Motion Graphics Designer", "Photographer", "Producer", "Product Designer", "Project Manager", "Strategist", "UX/UI Designer", "Video Director", "Video Editor"]

  const jobTitleOptions = jobTitleArr.map((job) =>
        <option>{job}</option>
        )

    console.log("Drop Down Job Title:", jobTitle)
    console.log("Fetch for Job by title", jobs)

  return (
    <div>
    <section>
        <form>
       <select name="jobtitle" id="jobtitle" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} >
        <option id="jobtitles" value="All">All Job Titles</option>
        {jobTitleOptions}
        </select>
   </form>
    
        {jobs.map((job) => {
        return (
        <Job job={job} key={job.id} company={job.company.company_size} industry={job.industry.industry_type} user={job.user.username} /> )
      })}
    
    </section>
    </div>
  )
}

export default JobsContainer
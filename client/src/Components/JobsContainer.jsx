import React, { useState, useEffect } from 'react'
import Job from './Job'
import JobSearchBar from './JobSearchBar'
import axios from 'axios'

const JobsContainer = () => {
    const [jobTitle, setJobTitle] = useState("")
    const [rate, setRate] = useState(500)
    const[jobs, setJobs] = useState([])
  
  useEffect(() => {
    axios.get('/jobs/filter/' + jobTitle + '/' + parseInt(rate))
  .then(function (response) {
   setJobs(response.data)
  })
  .catch(function (error) {
    console.log("Jobs Error:", error)
  })
  }, [jobTitle, rate]);


  const jobTitleArr = ["Animator", "Art Director", "Cinematographer", "Copy Editor", "Copywriter", "Creative Director", "Developer", "Graphic Designer", "Illustrator", "Motion Graphics Designer", "Photographer", "Producer", "Product Designer", "Project Manager", "Strategist", "Video Director", "Video Editor"]

  const jobTitleOptions = jobTitleArr.map((job) =>
        <option>{job}</option>
        )

  const rateArr = [50, 100, 200, 300, 400, 500]

  const rateOptions = rateArr.map((rate) =>
  <option>{rate}</option>
  )

    console.log("Drop Down Job Title:", jobTitle)
    console.log("Drop Down Rate:", parseInt(rate))
    console.log("Fetch for Job by title", jobs)

  return (
    <div>
    <section>
        <form>
       <select name="jobtitle" id="jobtitle" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} >
        {/* <option id="jobtitles" value="All">All Job Titles</option> */}
        {jobTitleOptions}
        </select>

        <select name="rate" id="rate" value={rate} onChange={(event) => setRate(event.target.value)} >
        {/* <option id="rate" value="All">All Job Titles</option> */}
        {rateOptions}
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
import React, { useState }  from 'react'
import axios from 'axios'

const JobSearchBar = () => {
  const [jobTitle, setJobTitle] = useState("")

  const jobTitleArr = ["Animator", "Art Director", "Cinematographer", "Copy Editor", "Copywriter", "Creative Director", "Developer", "Graphic Designer", "Illustrator", "Motion Graphics Designer", "Photographer", "Producer", "Product Designer", "Project Manager", "Strategist", "UX/UI Designer", "Video Director", "Video Editor"]

  const jobTitleOptions = jobTitleArr.map((job) =>
        <option>{job}</option>
        )

    console.log("Drop Down Job Title:", jobTitle)

  return (
    <form>
       <select name="jobtitle" id="jobtitle" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} >
        <option id="jobtitles" value="">Job Title...</option>
        {jobTitleOptions}
        </select>
   </form>
  )
}

export default JobSearchBar
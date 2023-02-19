import React from 'react'

const Job = ( {job, company, industry, user} ) => {
  const {job_title, job_description, rate, experience} = job

  return (
  <article>
    <p>Job Title: {job_title}</p>
    <p>Job Description: {job_description}</p>
    <p>Rate: ${rate}/hour</p>
    <p>Experience Level: {experience}</p>
    <p>Company Size: {company}</p>
    <p>Industry Type: {industry}</p>
    {/* <p>{user}</p> */}
  </article>
  )
}

export default Job
import React from 'react'

const Job = ( {job, company, industry} ) => {
  const {job_title, job_description, rate} = job

  return (
  <article>
    <p>{job_title}</p>
    <p>{job_description}</p>
    <p>${rate}/hour</p>
    <p>{company}</p>
    <p>{industry}</p>
  </article>
  )
}

export default Job
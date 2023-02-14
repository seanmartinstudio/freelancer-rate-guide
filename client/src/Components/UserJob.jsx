import React from 'react'

const UserJob = ( {job, company, industry, user} ) => {
  const {job_title, job_description, rate, experience} = job

  return (
  <article>
    <p>{job_title}</p>
    <p>{job_description}</p>
    <p>${rate}/hour</p>
    <p>{experience}</p>
    <p>{company}</p>
    <p>{industry}</p>
    <p>{user}</p>
  </article>
  )
}

export default UserJob
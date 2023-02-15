import React from 'react'

const UserJob = ( {job, company, industry, user} ) => {
  const {job_title, job_description, rate, experience} = job

  return (
  <div>
    <div className='sideButtonWrap'>
    <button class="side-button">Edit</button>
    <button class="side-button">Delete</button>
    </div>
    <article>
      <p>{job_title}</p>
      <p>{job_description}</p>
      <p>${rate}/hour</p>
      <p>{experience}</p>
      <p>{company}</p>
      <p>{industry}</p>
      <p>{user}</p>
    </article>
  </div>
  )
}

export default UserJob
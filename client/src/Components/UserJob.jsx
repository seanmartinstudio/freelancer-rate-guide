import React from 'react'

const UserJob = ( {job, company, industry, user, id , handleDeleteUserJob} ) => {
  const {job_title, job_description, rate, experience} = job

  function handleUserJobDeleteClick() {
    fetch(`/jobs/` + id, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        handleDeleteUserJob(id);
      }
      })}

  return (
  <div>
    <div className='sideButtonWrap'>
    <button class="side-button">Edit</button>
    <button class="side-button" onClick={handleUserJobDeleteClick}>Delete</button>
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
import React from 'react'
import { useState} from 'react';
import EditJobForm from './EditJobForm';

const UserJob = ( {job, company, industry, user, id , handleDeleteUserJob} ) => {
  const {job_title, job_description, rate, experience} = job

  const [editJobForm, setEditJobForm] = useState(false)

  function handleUserJobDeleteClick() {
    fetch(`/jobs/` + id, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        handleDeleteUserJob(id);
      }
      })}
    
      const handleClick = () => {
        setEditJobForm(!editJobForm)
      }

  return (
  <div>
    <div className='sideButtonWrap'>
    <button class="side-button" onClick={handleClick}>Edit</button>
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
    { editJobForm
    ? <EditJobForm id={id} setEditJobForm={setEditJobForm} editJobForm={editJobForm}/>
    : <div/>
    }
  </div>
  )
}

export default UserJob
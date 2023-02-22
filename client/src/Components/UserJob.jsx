import React from 'react'
import { useState} from 'react';
import EditJobForm from './EditJobForm';

const UserJob = ( {job, company, industry, industryID, companyID, user, id , handleDeleteUserJob, userJobs, setUserJobs} ) => {
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <div>
    <div className='sideButtonWrap'>
    <button class="side-button" onClick={handleClick}>Edit</button>
    <button class="side-button" onClick={handleUserJobDeleteClick}>Delete</button>
    </div>
    <article>
      <p>Job Title: {job_title}</p>
      <p>Job Description: {job_description}</p>
      <p>Rate: ${rate}/hour</p>
      <p>Experience Level: {experience}</p>
      <p>Company Size: {company}</p>
      <p>Industry Type: {industry}</p>
      <p>Username: {user}</p>
    </article>
    { editJobForm
    ? <EditJobForm id={id} setEditJobForm={setEditJobForm} editJobForm={editJobForm} userJobs={userJobs} setUserJobs={setUserJobs} prefillJobTitle={job_title} prefillJobDescription={job_description} prefillRate={rate} prefillExperience={experience} prefillIndustry={industryID} prefillCompany={companyID}/>
    : <div/>
    }
  </div>
  </div>
  )
}

export default UserJob
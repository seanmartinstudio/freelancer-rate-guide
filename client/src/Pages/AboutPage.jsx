import React from 'react'

const AboutPage = () => {
  return (
    <div>
    <div className='about-page'>
        <h3>All Jobs Post</h3>
        <ul>
            <li>Search all posts by job title and hourly rate billed.</li>
            <br></br>
            <li>All posts listed in chronologial order starting at most recent.</li>
        </ul>
    </div>
    <div className='about-page'>
        <h3>Create Job Post</h3>
        <ul>
            <li>Create an anonymous post with no personal information attached</li>
            <br></br>
            <li>For any freelance project you have done, post the job title, a brief description of what the project deliverables were, hourly rate billed, your experience level in this field, what industry the client was in, and the company size of the client. </li>
        </ul>
    </div>
    <div className='about-page'>
        <h3>User Job Posts</h3>
        <ul>
            <li>See only the job posts you have published.</li>
            <br></br>
            <li>Edit or delete any of your posts.</li>
        </ul>
    </div>
    </div>
  )
}

export default AboutPage
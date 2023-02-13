import React, { useState }  from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const PostJobForm = ( {industries, companies}) => {

    const navigate = useNavigate()

    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [rate, setRate] = useState(0)
    const [experience, setExperience] = useState("")
    const [industry, setIndustry] = useState("")
    const [company, setCompany] = useState("")
    const [errors, setErrors] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        axios.post('/jobs', {
            job_title: jobTitle,
            job_description: jobDescription,
            rate: rate,
            experience: experience,
            company_id: parseInt(company),
            industry_id: parseInt(industry)
          })
          .then(response => {
            if(response.statusText === "Created") {
              navigate('/')
            }
            console.log("Response from Post:", response)
          })
          .catch(error => {
            setErrors(error.response.data.errors)
            setJobTitle("")
            setJobDescription("")
            setRate(null)
            setExperience("")
          })
        }

        const industryList = industries.map((industry) =>
        <option value={industry.id} key={industry.id}>{industry.industry_type}</option>
        )

        const companyList = companies.map((company) =>
        <option value={company.id} key={company.id}>{company.company_size}</option>
        )

        console.log("Industry Value:", industry)
        console.log("Company Value:", company)
  
    
return (
    <form onSubmit={handleFormSubmit}>
        <h2>Post Job Info:</h2>
        <input type="text" id="jobtitle" name="jobtitle" placeholder="Job Title..." onChange={(event) => setJobTitle(event.target.value)} value={jobTitle}></input>
        <input type="text" id="jobdescription" name="jobdescription" placeholder="Job Description..." onChange={(event) => setJobDescription(event.target.value)} value={jobDescription}></input>
        <input type="number" id="rate" name="rate" placeholder="$ Hourly Rate..." onChange={(event) => setRate(event.target.value)} value={rate}></input>
        <input type="text" id="experience" name="experience" placeholder="Experience Level..." onChange={(event) => setExperience(event.target.value)} value={experience}></input>
        <br></br>
        <select name="industries" id="industries" value={industry} onChange={(event) => setIndustry(event.target.value)} >
        <option id="categories" value="">Industries...</option>
        {industryList}
        </select>
        <br></br>
        <select name="companies" id="companies" value={company} onChange={(event) => setCompany(event.target.value)} >
        <option id="companies" value="">Companies...</option>
        {companyList}
        </select>
        <br></br>
        <button className='button'>Submit Job Post</button>
        <br></br>
        <br></br>
        {/* <ul>
        {errors.map((error) => (
            <li key={error}>{error}</li>
            ))}
        </ul> */}
    </form>
)
}

export default PostJobForm
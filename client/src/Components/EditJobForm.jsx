import React, { useState, useEffect }  from 'react'
import axios from 'axios'
// import { useNavigate } from "react-router-dom"


const EditJobForm = ( {id, editJobForm, setEditJobForm, userJobs, setUserJobs, prefillJobTitle, prefillJobDescription, prefillRate, prefillExperience, prefillIndustry, prefillCompany} ) => {

    // const navigate = useNavigate()

    const [jobTitle, setJobTitle] = useState(prefillJobTitle)
    const [jobDescription, setJobDescription] = useState(prefillJobDescription)
    const [rate, setRate] = useState(prefillRate)
    const [experience, setExperience] = useState(prefillExperience)
    const [industry, setIndustry] = useState(prefillIndustry)
    const [company, setCompany] = useState(prefillCompany)
    const [errors, setErrors] = useState([])

    const [companies, setCompanies] = useState([])
    const [industries, setIndustries] = useState([])

    useEffect(() => {

      axios.get('/industries')
    .then(function (response) {
      setIndustries(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  
    axios.get('/companies')
    .then(function (response) {
      setCompanies(response.data)
    })
    .catch(function (error) {
      console.log(error);
    }) 
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        axios.patch('/jobs/' + id, {
            job_title: jobTitle,
            job_description: jobDescription,
            rate: rate,
            experience: experience,
            company_id: parseInt(company),
            industry_id: parseInt(industry)
          })
          .then(() => {setEditJobForm(!editJobForm)})
          .catch(error => {
            setErrors(error.response.data.errors)
            // setJobTitle("")
            // setJobDescription("")
            // setRate(null)
            // setExperience("")
          })
        }

        const industryList = industries.map((industry) =>
        <option value={industry.id} key={industry.id}>{industry.industry_type}</option>
        )

        const companyList = companies.map((company) =>
        <option value={company.id} key={company.id}>{company.company_size}</option>
        )

        const jobTitleArr = ["Animator", "Art Director", "Cinematographer", "Copy Editor", "Copywriter", "Creative Director", "Developer", "Graphic Designer", "Illustrator", "Motion Graphics Designer", "Photographer", "Producer", "Product Designer", "Project Manager", "Strategist", "UX/UI Designer", "Video Director", "Video Editor"]

        const jobTitleOptions = jobTitleArr.map((job) =>
        <option>{job}</option>
        )

        const experienceLevelArr = ["Junior Level", "Mid Level", "Senior Level", "Executive Level"]

        const experienceLevelOptions = experienceLevelArr.map((experience) =>
        <option>{experience}</option>
        )
  
    
return (
    <form onSubmit={handleFormSubmit}>
        {/* <h2>Edit Post</h2> */}

        <select name="jobtitle" id="jobtitle" value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} >
        <option id="jobtitles" value="">Job Title...</option>
        {jobTitleOptions}
        </select>

        <input type="text" id="jobdescription" name="jobdescription" placeholder="Job Description..." onChange={(event) => setJobDescription(event.target.value)} value={jobDescription}></input>

        <input type="number" id="rate" name="rate" placeholder="$ Hourly Rate..." onChange={(event) => setRate(event.target.value)} value={rate}></input>

        {/* <input type="text" id="experience" name="experience" placeholder="Experience Level..." onChange={(event) => setExperience(event.target.value)} value={experience}></input> */}

        <select name="experience" id="experience" value={experience} onChange={(event) => setExperience(event.target.value)} >
        <option id="experience" value="">Expereience Level...</option>
        {experienceLevelOptions}
        </select>

        <br></br>

        <select name="industries" id="industries" value={industry} onChange={(event) => setIndustry(event.target.value)} >
        <option id="categories" value="">Industry...</option>
        {industryList}
        </select>

        <br></br>
        <select name="companies" id="companies" value={company} onChange={(event) => setCompany(event.target.value)} >
        <option id="companies" value="">Company Size...</option>
        {companyList}
        </select>

        <br></br>
        <button className='button'>Submit Edit</button>
        <br></br>
        <br></br>
        <ul>
        {errors.map((error) => (
            <li key={error}>{error}</li>
            ))}
        </ul>
    </form>
)
}

export default EditJobForm
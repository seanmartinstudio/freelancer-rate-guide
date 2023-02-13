import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import PostJobForm from '../Components/PostJobForm'

const PostJobPage = () => {
  const [comapnySize, setCompanySize] = useState("")
  const [industryType, setIndustryType] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {

    axios.get('/industries')
  .then(function (response) {
    console.log("Industries Data:", response);
  })
  .catch(function (error) {
    console.log(error);
  })

  axios.get('/companies')
  .then(function (response) {
    console.log("Companies Data:", response);
  })
  .catch(function (error) {
    console.log(error);
  }) 
  }, [])
  

  return (
    <PostJobForm />
  )
}

export default PostJobPage
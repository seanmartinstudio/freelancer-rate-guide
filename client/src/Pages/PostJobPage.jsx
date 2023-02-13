import React, { useState }  from 'react'
import axios from 'axios'
import PostJobForm from '../Components/PostJobForm'

const PostJobPage = () => {
  const [comapnySize, setCompanySize] = useState("")
  const [industryType, setIndustryType] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    
  }, [])
  

  return (
    <PostJobForm />
  )
}

export default PostJobPage
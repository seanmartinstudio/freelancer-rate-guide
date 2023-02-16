import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import EditJobForm from '../Components/EditJobForm'

const EditJobPage = () => {
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
  

  return (
    <EditJobForm companies={companies} industries={industries}  />
  )
}

export default EditJobPage
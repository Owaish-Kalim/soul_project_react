const express = require('express')
const users = express.Router()
const cors = require('cors')
const axios = require('axios')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const request = require('request')

// const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {  
  const today = new Date()
  const userData = {
    firstname: req.body.first_name || 'AShish',
    lastname: req.body.last_name ||'kumar',
    // gender: req.body.gender,
    email: req.body.email || 'sds@af.af',
    password: req.body.password || '123456789',
    joining: req.body.joining,
    address: req.body.address || 'asdgfhgjk',
    status: req.body.status || 'inactive',
    mobileno: req.body.mobile || '1234567789',
    role: req.body.role || 'admin'
  }

  axios
  .post('http://localhost:8000/team/add-member',userData)
  .then(response => {
    console.log(response.status)
      res.status(response.status).send(response.data)
  })  
  .catch(e=> {
    console.log("ERROR")
      console.log(e)
    res.status(500).send(e)
  }
    )
  console.log("Register request received in node")
  console.log("Name: "+userData.first_name)
}
)


users.post('/update-member', (req, res) => {  
  const today = new Date()
  const userData = {
    firstname: req.body.first_name || 'Ashish',
    lastname: req.body.last_name ||'kumar',
    // gender: req.body.gender,
    email: req.body.email || 'sds@af.af',
    password: req.body.password || '123456789',
    joining: req.body.joining,
    address: req.body.address || 'asdgfhgjk',
    status: req.body.status || 'inactive',
    mobileno: req.body.mobile || '1234567789',
    role: req.body.role || 'admin'
  }

  axios
  .post('http://localhost:8000/team/update-team-member',userData)
  .then(response => {
    console.log(response.status)
      res.status(response.status).send(response.data)
  })  
  .catch(e=> {
    console.log("ERROR")
      console.log(e)
    res.status(500).send(e)
  }
    )
  console.log("Register request received in node")
  console.log("Name: "+userData.first_name)
}
)






users.post('/login', (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }

  axios
  .post('http://localhost:8000/team/login',userData)
  .then(response => {
      res.status(response.status).send(response.data)
  })
  .catch(e=> res.status(500).send("Error: "+e))
})

users.post('/password', (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  console.log('Password change request Received!')

  axios
  .post('http://localhost:8000/team/password',userData)
  .then(response => {
      res.status(response.status).send(response.data)
  })
  .catch(e=> res.status(500).send("Error: "+e))
})




users.get('/view-member', (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  // console.log(req.headers.token)

  axios
  .get('http://localhost:8000/team/view-member', {
    headers: {
      'Authorization': `Bearer ${req.headers.token}`
    }
  })
  .then(response => {
    console.log(response.status)
      res.status(response.status).send(response.data)
  })
  .catch(e=> res.status(500).send("Error: "+e))

})



users.get(`/team-list`, (req, res) => {
  console.log("pagination request received in node " + req.query.page + " and countsPerPage is "+req.query.limit);
  axios
  .get(`http://localhost:8000/team/list?page=${req.query.page}&limit=${req.query.limit}`, {
    headers: {
      'Authorization': `Bearer ${req.headers.token}`
    }
  })
  .then(response => {
      res.status(response.status).send(response.data)
  })
  .catch(e=> res.status(500).send("Error: "+e))
})





users.get('/profile', (req, res) => {

})

users.post('/update', (req, res) => {  
  // const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
    joining: req.body.joining,
    address: req.body.address,
    status: req.body.status,
    mobile: req.body.mobile
  }
  
  request.post('http://localhost:8000/api/users', userData, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  })

  console.log("Update request received in node")
  console.log("Name: "+userData.first_name)

})


module.exports = users

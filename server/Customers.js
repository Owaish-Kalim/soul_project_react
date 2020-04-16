const express = require("express");
const customers = express.Router();
const cors = require("cors");
const axios = require("axios");
const request = require("request");
customers.use(cors());

process.env.SECRET_KEY = "secret";
const baseURL = "http://3.6.243.136";


//Customer List
customers.get("/customer-list", (req, res) => {
    console.log(
      "pagination request received in node, page is " +
        req.query.page +
        " and countsPerPage is 5"
    );
    axios
      .get(`${baseURL}:8000/customers/list?page=${req.query.page}&limit=${10}`, {
        headers: {
          Authorization: `Bearer ${req.headers.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        res.setHeader("total-count", `${response.headers["total-count"]}`);
        res.setHeader("help", "5");
        res.status(response.status).send(
          JSON.stringify({
            data: { ...response.data },
            count: response.headers["total-count"],
          })
        );
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send(e);
      });
  });
  

  //customer search
customers.get("/customer-search", (req, res) => {
    console.log("request Recieved for filter in node (customer search)");
    axios
      .get(
        `${baseURL}:8000/customers/list?customer_souls_id=${req.query.customer_souls_id}&customer_name=${req.query.customer_name}&customer_mobile_no=${req.query.customer_mobile_no}&customer_gender=${req.query.customer_gender}&customer_email=${req.query.customer_email}&pincode=${req.query.pincode}&createtime=${req.query.createtime}&status=${req.query.status}`,
        {
          headers: {
            Authorization: `Bearer ${req.headers.token}`,
          },
        }
      )
      .then((response) => {
        console.log("response" + response);
        res.status(response.status).send(response.data);
      })
      .catch((e) => {
        console.log("ERROR:" + e);
        res.status(500).send("Error: " + e);
      });
  });
  
  //Customer Member Update
customers.put("/update-customer", (req, res) => {
    const today = new Date();
    const userData = {
      customer_name: req.body.customer_name,
      customer_mobile_no: req.body.customer_mobile_no,
      customer_gender: req.body.customer_gender,
      customer_email: req.body.customer_email,
      customer_address: req.body.customer_address,
      pincode: req.body.pincode,
      registrated_source: req.body.registrated_source,
      status: req.body.status,
    };
    axios
      .put(`${baseURL}:8000/customers/update`, userData, {
        headers: {
          Authorization: `Bearer ${req.headers.token}`,
        },
      })
      .then((response) => {
        console.log(response.status);
        res.status(response.status).send(response.data);
        console.log(response);
      })
      .catch((e) => {
        console.log("ERROR");
        console.log(e);
        res.status(500).send(e);
      });
    console.log(userData.customer_name);
  });



module.exports = customers
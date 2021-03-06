import axios from "axios";
import { store } from "react-notifications-component";
const baseURL = "http://3.6.243.136";
// const baseURL = "http://localhost";


export const displayNotification = (title, message, type) => {
  store.addNotification({
    title: title || "",
    message: message || "",
    type: type || "success", // success //danger // info //default //warning
    insert: "top",
    container: "Bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
  console.log("gel");
};

//customerList
export const customerList = async (query) => {
  let data, count;
  await axios
    // .get(`${baseURL}:5000/customers/customer-list?page=${activePage}&limit=${itemCountPerPage}`,
    .get(
      `${baseURL}:5000/customers/customer-list?page=${query.page || ""}&limit=${query.limit || ""}&customer_souls_id=${query.customer_souls_id || ""}&customer_name=${query.customer_name || ""}&customer_mobile_no=${query.customer_mobile_no || ""}&customer_gender=${query.customer_gender || ""}&customer_email=${query.customer_email || ""}&pincode=${query.pincode || ""}&created_at=${query.created_at || ""}&status=${query.status || ""}`,
    {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      if (response.status === 200) {
        data = Object.keys(response.data.data).map(o=>response.data.data[o]);
        count= response.data.count
        console.log("response in header = "+ response.headers)
      }
    })
    .catch((err) => {
      displayNotification("Error", "Internal Server Error", "danger");
    });

    
  return {data, count};
};

//PendingOrderList
export const PendingOrderList = async (query) => {
    let data, count;
    await axios
      .get(`${baseURL}:5000/pendingOrders/pendingorder-list?page=${query.page || ""}&limit=${query.limit || ""}&customer_souls_id=${query.customer_souls_id || ""}&customer_name=${query.customer_name || ""}&slot_time=${query.slot_time || ""}&slot_date=${query.slot_date || ""}&massage_duration=${query.massage_duration || ""}&pincode=${query.pincode || ""}&created_at=${query.created_at || ""}&is_order_confirmed=${query.is_order_confirmed || ""}&merchant_transaction_id=${query.merchant_transaction_id || ""}&total_order_amount=${query.total_order_amount || ""}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          data = Object.keys(response.data.data).map(o=>response.data.data[o]);
          count= response.data.count
          console.log("response in header = "+ count)
        }
      })
      .catch((err) => {
        // window.alert("Error: " + err);
        displayNotification("Error", "Internal Server Error", "danger");
      });
    return {data, count};
  };

//Transaction List
export const TransactionList = async (query) => {
  let data, count;
  await axios
    .get(`${baseURL}:5000/transactions/transaction-list?page=${query.page || ""}&limit=${query.limit || ""}&customer_souls_id=${query.customer_souls_id || ""}&customer_name=${query.customer_name || ""}&merchant_transaction_id=${query.merchant_transaction_id || ""}&total_order_amount=${query.total_order_amount || ""}&slot_time=${query.slot_time || ""}&slot_date=${query.slot_date || ""}&massage_duration=${query.massage_duration || ""}&pincode=${query.pincode || ""}&created_at=${query.created_at || ""}&payment_gateway_mode=${query.payment_gateway_mode || ""}&transaction_mode=${query.transaction_mode || ""}&bank_type=${query.bank_type || ""}&payment_gateway_id=${query.payment_gateway_id || ""}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      if (response.status === 200) {
        data = Object.keys(response.data.data).map(o=>response.data.data[o]);
        count= response.data.count
        console.log("response in header = "+ response.headers)
      }
    })
    .catch((err) => {
      // window.alert("Error: " + err);
      displayNotification("Error", "Internal Server Error", "danger");
    });
  return {data, count};
};

//Assign Partner List
export const AssignPartnerList = async (query) => {
  let data, count;
  await axios
    .get(`${baseURL}:5000/assignPartners/assign-partner-list?page=${query.page || ""}&limit=${query.limit || ""}&customer_souls_id=${query.customer_souls_id || ""}&customer_name=${query.customer_name || ""}&merchant_transaction_id=${query.merchant_transaction_id || ""}&total_order_amount=${query.total_order_amount || ""}&slot_time=${query.slot_time || ""}&slot_date=${query.slot_date || ""}&massage_duration=${query.massage_duration || ""}&pincode=${query.pincode || ""}&created_at=${query.created_at || ""}&payment_gateway_mode=${query.payment_gateway_mode || ""}&transaction_mode=${query.transaction_mode || ""}&bank_type=${query.bank_type || ""}&payment_gateway_id=${query.payment_gateway_id || ""}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      if (response.status === 200) {
        data = Object.keys(response.data.data).map(o=>response.data.data[o]);
        count= response.data.count
        console.log("response in header = "+ response.headers)
      }
    })
    .catch((err) => {
      // window.alert("Error: " + err);
      displayNotification("Error", "Internal Server Error", "danger");
    });
  return {data, count};
};

// //Customer search
// export const searchCust = async (searchCustomer) => {
//   let data = []
//   await axios.
//     get(`http://localhost:5000/customers/customer-search?customer_souls_id=${searchCustomer.customer_souls_id}&customer_name=${searchCustomer.customer_name}&customer_mobile_no=${searchCustomer.customer_mobile_no}&customer_gender=${searchCustomer.customer_gender}&customer_email=${searchCustomer.customer_email}&pincode=${searchCustomer.pincode}&CreatedAt=${searchCustomer.CreatedAt}&status=${searchCustomer.status}`,{
//       headers: {
//         token: localStorage.getItem("token")
//       }
//     })
//     .then((response) => {
//       data = [...response.data];
//     })
//     .catch((e) => console.log(e));
  
//   return data
// };

//   //PendingOrder search
// export const searchPendingOrder = async (searchPending) => {
//   let data = []
//   await axios.
//     get(`http://localhost:5000/pendingOrders/pendingorder-search?customer_souls_id=${searchPending.customer_souls_id}&customer_name=${searchPending.customer_name}&Slot_Time=${searchPending.Slot_Time}&Slot_Date=${searchPending.Slot_Date}&massage_duration=${searchPending.massage_duration}&pincode=${searchPending.pincode}&CreatedAt=${searchPending.CreatedAt}&is_order_confirmed=${searchPending.is_order_confirmed}&merchant_transaction_id=${searchPending.merchant_transaction_id}&total_order_amount=${searchPending.total_order_amount}`,{
//       headers: {
//         token: localStorage.getItem("token")
//       }
//     })
//     .then((response) => {
//       data = [...response.data];
//     })
//     .catch((e) => console.log(e));
  
//   return data
// };

//  //Transaction search
// export const searchTransaction = async (searchTrans) => {
//   let data = []
//   await axios.
//     get(`http://localhost:5000/transactions/transaction-search?customer_souls_id=${searchTrans.customer_souls_id}&customer_name=${searchTrans.customer_name}&merchant_transaction_id=${searchTrans.merchant_transaction_id}&total_order_amount=${searchTrans.total_order_amount}&Slot_Time=${searchTrans.Slot_Time}&Slot_Date=${searchTrans.Slot_Date}&massage_duration=${searchTrans.massage_duration}&pincode=${searchTrans.pincode}&CreatedAt=${searchTrans.CreatedAt}&payment_gateway_mode=${searchTrans.payment_gateway_mode}&transaction_mode=${searchTrans.transaction_mode}&bank_type=${searchTrans.bank_type}&payment_gateway_id=${searchTrans.payment_gateway_id}`,{
//       headers: {
//         token: localStorage.getItem("token")
//       }
//     })
//     .then((response) => {
//       data = [...response.data];
//     })
//     .catch((e) => console.log(e));
  
//   return data
// };

// //Assign Partner search
// export const searchAssignPart = async (searchAssignPartner) => {
//   let data = []
//   await axios.
//     get(`http://localhost:5000/assignPartners/assign-partner-search?customer_souls_id=${searchAssignPartner.customer_souls_id}&customer_name=${searchAssignPartner.customer_name}&Slot_Time=${searchAssignPartner.Slot_Time}&Slot_Date=${searchAssignPartner.Slot_Date}&partner_souls_id=${searchAssignPartner.partner_souls_id}&partner_name=${searchAssignPartner.partner_name}&partner_mobileno=${searchAssignPartner.partner_mobileno}&CreatedAt=${searchAssignPartner.CreatedAt}&status=${searchAssignPartner.status}`,{
//       headers: {
//         token: localStorage.getItem("token")
//       }
//     })
//     .then((response) => {
//       data = [...response.data];
//     })
//     .catch((e) => console.log(e));
  
//   return data
// };

//Update Customer
export const updateCustomer = updatedUser => {
  console.log("registratio source: "+ updatedUser.registrated_source);
  return axios
    .put(
      `${baseURL}:5000/customers/update-customer`,
      {
        customer_name: updatedUser.customer_name,
        customer_mobile_no: updatedUser.customer_mobile_no,
        customer_gender: updatedUser.customer_gender,
        customer_email: updatedUser.customer_email,
        customer_address: updatedUser.customer_address,
        pincode: updatedUser.pincode,
        // registrated_source: updatedUser.registrated_source,
        status: updatedUser.status
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      if (response.status === 200) displayNotification("Success", "Updated Successfully", "success");
    })
    .catch((e) => {
      // window.alert("Error: " + e);
      displayNotification("Error", "Internal Server Error", "danger");
    });
};

//Update Transaction
export const updateTransaction = updatedUser => {
  console.log("axios updated transaction worked");
  return axios
    .put(
      `${baseURL}:5000/transactions/update-transaction`,
      {
        number_of_therapist: updatedUser.number_of_therapist,
        therapist_gender: updatedUser.therapist_gender,
        massage_for: updatedUser.massage_for,
        Slot_Time: updatedUser.Slot_Time,
        Slot_Date: updatedUser.Slot_Date,
        massage_duration: updatedUser.massage_duration,
        customer_address: updatedUser.customer_address,
        pincode: updatedUser.pincode,
        latitude: updatedUser.latitude,
        longitude: updatedUser.longitude,
        merchant_transaction_id: updatedUser.merchant_transaction_id,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      if (response.status === 200) displayNotification("Success", "Updated Successfully", "success");
    })
    .catch((e) => {
      // window.alert("Error: " + e);
      displayNotification("Error", "Internal Server Error", "danger");
    });
};

//Update Assign Partner
export const updateAssignPartner = updatedUser => {
  console.log("axios updated User worked");
  return axios
    .put(
      `${baseURL}:5000/assignPartners/update-assign-partner`,
      {
        partner_souls_id: updatedUser.partner_souls_id,
        partner_name: updatedUser.partner_name,
        partner_mobileno: updatedUser.partner_mobileno,
        Commission_Type: updatedUser.Commission_Type,
        commission_type: updatedUser.commission_type,
        updated_by: updatedUser.updated_by,
        status: updatedUser.status
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      if (response.status === 200) displayNotification("Success", "Updated Successfully", "success");
    })
    .catch((e) => {
      // window.alert("Error: " + e);
      displayNotification("Error", "Internal Server Error", "danger");
    });
};

export const registerPartner = (newPartner) => {
  console.log(newPartner.partner_name);
  console.log(newPartner.Onboard_Date);
  console.log(newPartner.data)
  return axios
    .post(`${baseURL}:5000/partners/registerPartner`, {
      partner_name: newPartner.partner_name,
      partner_email: newPartner.partner_email,
      partner_mobileno: newPartner.partner_mobileno,
      partner_address: newPartner.partner_address,
      pincode: newPartner.pincode,
      latitude: newPartner.latitude,
      longitude: newPartner.longitude,
      Onboard_Date: newPartner.Onboard_Date,
      // created_by: newPartner.created_by,
      // updated_by: newPartner.updated_by,
      rate: newPartner.rate,
      commission_type: newPartner.commission_type,
      partner_gender: newPartner.partner_gender

    }, {headers:{token:localStorage.getItem('token')}})
    .then((response) => {
      if (response.status === 200) {
        console.log("Created");
        displayNotification("Success", "New Partner Created Succesfully", "success");
      }
    })
    .catch((e) => {
      displayNotification("Error", "Internal Server Error", "danger")
    });
};

export const updatePartner = updatedPartner => {
  console.log("axios updated User worked");
  return axios
    .put(
      `${baseURL}:5000/partners/update-partner`,
      {
        partner_name: updatedPartner.partner_name,
        partner_email: updatedPartner.partner_email,
        partner_mobileno: updatedPartner.partner_mobileno,
        partner_address: updatedPartner.partner_address,
        pincode: updatedPartner.pincode,
        latitude: updatedPartner.latitude,
        longitude: updatedPartner.longitude,
        // created_by: updatedPartner.created_by,
        // updated_by: updatedPartner.updated_by,
        rate: updatedPartner.rate,
        partner_gender: updatedPartner.partner_gender,
        commission_type: updatedPartner.commission_type
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        console.log("Created");
        displayNotification("Success", "Partner Updated Succesfully", "success");
      }
    })
    .catch((e) => {
      displayNotification("Error", "Internal Server Error", "danger")
    });
};



export const partnerList = async (query) => {
    let data, count;
    await axios
      // .get(`${baseURL}:5000/partners/partner-list?page=${activePage}&limit=${itemCountPerPage}`, 
      .get(
        `${baseURL}:5000/partners/partner-list?page=${query.page || ""}&limit=${query.limit || ""}&partner_id=${query.partner_id || ""}&partner_name=${query.partner_name || ""}&partner_email=${query.partner_email || ""}&partner_mobileno=${query.partner_mobileno || ""}&partner_address=${query.partner_address || ""}&pincode=${query.pincode || ""}&latitude=${query.latitude || ""}&Longitude=${query.Longitude || ""}&Rate=${query.Rate || ""}&Commission_Type=${query.Commission_Type || ""}&Onboard_Date=${query.Onboard_Date || ""}&UpdatedAt=${query.UpdatedAt || ""}&CreatedAt=${query.CreatedAt || ""}&created_by=${query.created_by || ""}&updated_by=${query.updated_by || ""}&partner_gender=${query.partner_gender || ""}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          data = Object.keys(response.data.data).map(o=>response.data.data[o])
          count = response.data.count
        }
      })
      .catch((err) => {
        displayNotification("Error", "Internal Server Error", "danger");
      });
    return {data, count};
  };

  export const searchPartner = async (searchUser) => {
    let data = []
    await axios.
      get(`http://localhost:5000/partners/search-partner?partner_id=${searchUser.partner_id}&partner_name=${searchUser.partner_name}&partner_email=${searchUser.partner_email}&partner_mobileno=${searchUser.partner_mobileno}&pincode=${searchUser.pincode}&Rate=${searchUser.Rate}&Commission_Type=${searchUser.Commission_Type}&UpdatedAt=${searchUser.UpdatedAt}&CreatedAt=${searchUser.CreatedAt}&partner_gender=${searchUser.partner_gender}`,{
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then((response) => {
        data = [...response.data];
        // console.log(response)
      })
      .catch((e) => console.log(e));
    
    return data
  };

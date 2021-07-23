import axios from 'axios'
import API from '../../constants/apiEndPoints'

const createOptions = (token) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
}

export function logInUser(payload) {
  return new Promise((resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    // axios
    //   .post(API.LOGIN, payload)
    //   .then(response => console.log(response))
    //   .catch((error) => { console.log(error.response.request); });
    async function isloginCall() {
      try {
        const res = await axios.post(API.LOGIN, payload)
        console.log('res', res)
        result.response = res.data
        resovle(result)
      } catch (error) {
        result.error = error
        resovle(result)
      }
    }
    isloginCall()
  })
}

export function getDoctorsList(payload) {
  return new Promise((resovle, reject) => {
    async function getDoctors() {
      const result = {
        response: {},
        error: '',
      }
      try {
        const res = await axios.get(API.GET_DOCTORS_LIST)
        result.response = res.data
        resovle(result)
      } catch (error) {
        result.error = error
        resovle(result)
      }
    }
    getDoctors()
  })
}

export function getDoctorsListById(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/doctors/doctor-detail/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function updateDoctorList(payload, token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.put(
        '/doctors/update-doctor-profile-by-admin/' + id,
        payload,
        options,
      )
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getPatientsList(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get(API.GET_PATIENTS_LIST, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getPatientDetails(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/patient/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function updatePatientList(payload, token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.put(
        '/patient/update-patient-profile-by-admin/' + id,
        payload,
        options,
      )
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getInterestsList(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get(API.GET_INTERESTS_LIST, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addInterestsList(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.GET_INTERESTS_LIST, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function deleteInterestsList(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.delete('/admin/blogs/interests/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function updateInterestsList(payload, token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.put(
        '/admin/blogs/interests/' + id,
        payload,
        options,
      )
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getBlogsList(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get(API.GET_BLOGS_LIST, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addBlogList(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.GET_BLOGS_LIST, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function editBlogList(payload, token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.put('/admin/blogs/' + id, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function deleteBlogList(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.delete('/admin/blogs/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getAppointments(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/appointments/users/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getFeedback(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/feedbacks/all', options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function feedbackApproval(payload, token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.put('/feedbacks/approve/' + id, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getDoctorSchedule(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/time-slots/shifts/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getPatientPrescription(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/patient/prescriptions/user/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getPatientLabReport(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/lab-reports/user/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getAllSpecialities(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/specialties', options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addSpeciality(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post('/specialties', payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function editSpeciality(payload, token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.put('/specialties/' + id, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function deleteSpecilaity(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.delete('/specialties/' + id, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

//

export function getSubSpecialities(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get('/specialties/sub-specialties', options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addSubSpeciality(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(
        '/specialties/sub-specialties',
        payload,
        options,
      )
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function editSubSpeciality(payload, token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.put(
        '/specialties/sub-specialties/' + id,
        payload,
        options,
      )
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function deleteSubSpecilaity(token, id) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.delete(
        '/specialties/sub-specialties/' + id,
        options,
      )
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function registerUser(payload) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const res = await axios.post(API.REGISTER, payload)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function forgotPassword(payload) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const res = await axios.post(API.FORGOT_PASSWORD, payload)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function resetPassword(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.RESET_PASSWORD, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function verifyOtp(url, payload) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const res = await axios.post(url, payload)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function resendOtp(payload) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const res = await axios.post(API.RESEND_OTP, payload)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getSpecialisations() {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const res = await axios.get(API.GET_SPECILISATIONS)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getSubSpecialisationsBySpecialityId(specialityId) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const url = `${API.GET_SUB_SPECILISATIONS_BY_SPECIALITYID}/${specialityId}`
      const res = await axios.get(url)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addBasicDetails(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.ADD_BASIC_DETAILS, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addCompleteDetails(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.ADD_COMPLETE_DETAILS, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getLoggedInUserDetails(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get(API.GET_USER_INFO, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addPrescription(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.ADD_PRESCRIPTION, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function getPatients(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get(API.GET_PATIENTS, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function addPatient(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.ADD_PATIENT, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

// export function getAppointments(token, doctorId, appointmentDate){
//   return new Promise(async(resovle, reject) => {
//     const result = {
//       response: {},
//       error: ''
//     }
//     try{
//       const options = createOptions(token)
//       let apiUrl = ''
//       if(appointmentDate){
//         apiUrl = `${API.GET_APPOINTMENTS}/${doctorId}?date=${appointmentDate}`
//       }
//       else{
//         apiUrl = `${API.GET_APPOINTMENTS}/${doctorId}`
//       }
//       const res = await axios.get(apiUrl, options)
//       result.response = res.data
//       resovle(result)
//     }
//     catch(error){
//       result.error = error
//       resovle(result)
//     }
//   })
// }

export function getSharedReports(token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.get(API.SHARED_REPORTS, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function uploadRawFile(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.UPLOAD_RAW_FILE, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

export function uploadAvatar(payload, token) {
  return new Promise(async (resovle, reject) => {
    const result = {
      response: {},
      error: '',
    }
    try {
      const options = createOptions(token)
      const res = await axios.post(API.UPLOAD_AVATAR, payload, options)
      result.response = res.data
      resovle(result)
    } catch (error) {
      result.error = error
      resovle(result)
    }
  })
}

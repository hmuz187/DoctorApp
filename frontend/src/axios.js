import axios from 'axios'


const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    // headers: {
    //   'Content-Type': 'application/json',
    //   'accept':'application/json'
    // },
  });

  // Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  
export default instance




















// import axios from 'axios'

// const instance = axios.create({
//     baseURL: process.env.REACT_APP_SERVER_URL,
//     // headers: {
//     //     "Content-Type": "application/json",
//     //     "Accept": 'application/json'
//     // }
// })


// console.log(process.env.REACT_APP_SERVER_URL)
// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
// });



// export default instance




// /*

// const instance = axios.create();
// instance.interceptors.request.use(function () {....})



// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



// // Set config defaults when creating the instance
// const instance = axios.create({
// baseURL: 'https://api.example.com'
// });

// // Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;




// // Create an instance using the config defaults provided by the library
// // At this point the timeout config value is `0` as is the default for the library
// const instance = axios.create();

// // Override timeout default for the library
// // Now all requests using this instance will wait 2.5 seconds before timing out
// instance.defaults.timeout = 2500;

// // Override timeout for this request as it's known to take a long time
// instance.get('/longRequest', {
// timeout: 5000
// });


// */
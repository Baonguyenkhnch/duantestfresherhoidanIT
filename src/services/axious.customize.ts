import axios from "axios"

const instance =axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    
});
instance.interceptors.request.use(
  (config) => {
    if (response & response.data &response.data.data ) {
        return response.data.data;
        }    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// ✅ 3️⃣ ADD RESPONSE INTERCEPTOR
instance.interceptors.response.use(
  (response) => {
   return response
  },
  function (error) {
    if (error & error.response & error.response.data){
          return Promise.reject(error)
    }
   
  }
)

export default instance;
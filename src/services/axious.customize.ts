import axios from "axios"

const instance =axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    
});
instance.interceptors.request.use(
  (config) => {
    
    return config
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
   
    return Promise.reject(error)
  }
)

export default instance;
import axios from "axios";
import logger from "./LogService";
import toast from "react-hot-toast";

axios.interceptors.response.use(null, (error) => {
  console.log(error);
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  const getOnLineStatus = () =>
    typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
      ? navigator.onLine
      : true;

  const isOnline = getOnLineStatus();
  if (!expectedError) {
    logger.log(error);
    if (error?.code === "ERR_NETWORK" && !isOnline) {
      toast.error("Ensure you're connected to the internet");
    }
    if (error?.code === "ERR_NETWORK" && isOnline) {
      toast.error("Server connection failed, please try again later");
    }
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
//Added Environment
export const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:3500/api/v1";

let http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwt,
};
export default http;

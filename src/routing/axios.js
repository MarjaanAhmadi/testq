
import axios from "axios";
import {toast} from "react-toastify";
import parseCookie from "./parseCookie";
import i18next from "i18next";
// const accountId = JSON.parse(parseCookie(document.cookie)['monster-auth']).accountId;

let axiosInstance = axios.create({
        baseURL: `http://77.104.116.187:8000/v2/accounts/06d2a02b9d50e169e46fb539efb88780/`,
        // baseURL: `http://77.104.116.187:8000/v2/accounts/${accountId}/`,
        timeout: 1100000,
        headers: {
            // 'x-auth-token' : JSON.parse(parseCookie(document.cookie)['monster-auth']).authToken
            'x-auth-token':
                    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlhNjc3NmMxOGFhNWZiNjI1N2M1YjVjMDgwZTJkY2VlIn0.eyJpc3MiOiJrYXpvbyIsImlkZW50aXR5X3NpZyI6InZackVMblE2Z0Q3bVBpaEkySEtKX2N1YmcyREt5WGtoZDFNcmRoTmJWbFkiLCJhY2NvdW50X2lkIjoiMDZkMmEwMmI5ZDUwZTE2OWU0NmZiNTM5ZWZiODg3ODAiLCJvd25lcl9pZCI6ImRmMGRkMTNkYTc3NWVhNmIxMzI2NjQ2ZWVjMzg5MGU2IiwibWV0aG9kIjoiY2JfdXNlcl9hdXRoIiwiZXhwIjoxNTgyNzAwMDQ2fQ.iyyvxGLmLoNpFiP_IQV4n3eN94LCgm8ToeEsrSP2mtqzinf8kKq2YeSBcEDYy26AQf4x_LlV08Tw5S9atTYSyKh7pf4S75vbGRi_9s2GWyyqfq8S3h8qUeV3vdNKIPhBOGbn_nwZOfYxfPSz0PepqhrgWEOdns3FZcnvbQy_W2OzvlzYx8fr-l-Jtt6eyO659AUL-8il-EbNUOkVrymocGzEa5eFrxIWzbVECr9lMZy9_jAAaY8oZ46gBOoC98tVLu7fozVtbAAnNG31TPz2rblQPx47o2xd3ctQG_CtSGSWvX764PlLbsNIzn-BW-h6-PgHXvY5-3oosBB7KJ1fZA"
        }
    }
);
axiosInstance.interceptors.response.use(null, (error) => {
    if (error.response.status === 500) {
        toast.error(i18next.t('Server error'));
    }
    if (error.response.status === 400) {
        toast.error(i18next.t('Please fill all required fields'));
    }
    if (error.response.status === 401) {
        toast.error('Please fill all required fields');

    }

    return Promise.reject(error)
});


export default axiosInstance;

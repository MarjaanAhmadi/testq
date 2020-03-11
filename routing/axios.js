
import axios from "axios";
import {toast} from "react-toastify";
import parseCookie from "./parseCookie";
import i18next from "i18next";
const accountId = JSON.parse(parseCookie(document.cookie)['monster-auth']).accountId;

let axiosInstance = axios.create({
        // baseURL: `http://77.104.116.187:8000/v2/accounts/06d2a02b9d50e169e46fb539efb88780/`,
        baseURL: `http://77.104.116.187:8000/v2/accounts/${accountId}/`,
        timeout: 1100000,
        headers: {
            'x-auth-token' : JSON.parse(parseCookie(document.cookie)['monster-auth']).authToken
            // 'x-auth-token':
            //     "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlhNjc3NmMxOGFhNWZiNjI1N2M1YjVjMDgwZTJkY2VlIn0.eyJpc3MiOiJrYXpvbyIsImlkZW50aXR5X3NpZyI6InZackVMblE2Z0Q3bVBpaEkySEtKX2N1YmcyREt5WGtoZDFNcmRoTmJWbFkiLCJhY2NvdW50X2lkIjoiMDZkMmEwMmI5ZDUwZTE2OWU0NmZiNTM5ZWZiODg3ODAiLCJvd25lcl9pZCI6ImRmMGRkMTNkYTc3NWVhNmIxMzI2NjQ2ZWVjMzg5MGU2IiwibWV0aG9kIjoiY2JfdXNlcl9hdXRoIiwiZXhwIjoxNTc5NTkwMjQ2fQ.nRUHfZw6T2T9gMD6t6lqX-qo7JmTcW3CEQliATzH5MH6Au2bTH3GUvvA29JPefIdfiNMrsPROFGFdtW-BikLyBzVxOq9VukcVQ_jcbs4FzEz4A_Nl1sTrWpN_rlsTCG6cqyu3VTvFnPZ0CuOuhhpLW40XGla9GRDMMtdU1IAyy5cgFNWvvLWDY-BNKtMmEpbcsYzYKRjL3a-PgxCTnDWaXvTIMDsDlMh3g1C-mQN3jnqpQljMZ_4S-0IA20Nex9s5q7_ATbDg6fbaIXmBBb2aMqMtBy3oG1nwH0_1aZEPw_ExE9drZIKC0vtN7SbRPQ_WIaBBrHC_qpWJjmJKmpv9A"

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
        toast.error(i18next.t('You are not authorized'));

    }

    return Promise.reject(error)
});


export default axiosInstance;

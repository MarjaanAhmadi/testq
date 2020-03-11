import axios from "axios";

const getToken = async ()=>{
    const token = await axios.put(`http://barancard.net:8000/v2/api_auth`, {data: {
            api_key: "165af2cfea20d9d808831e32c3ad87ad88cb110b539baf1dd3196028a702999b"
        }})
    localStorage.setItem('auth_token', token.data.auth_token)
    return token.data.auth_token
}
export default getToken

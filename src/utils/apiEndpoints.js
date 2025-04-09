const base_Url = "https://nodemailer-kappa-three.vercel.app"
import axios from "axios";

//post request using axios
export const postSendMail = async (endpoint, data) => {
  try {
    // console.log(data, `${base_Url}/${endpoint}`)
    const response = await axios.post(`${base_Url}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
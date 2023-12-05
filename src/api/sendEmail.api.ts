import axios from 'axios';
import { BASE_URL } from '../constants/data';

async function sendEmail(
  name: String,
  email: String,
  phoneNumber: String,
  message: String
) {
  // console.log(name, email, phoneNumber, message);
  try {
    let emailSent = {};
    const data = JSON.stringify({
      query: `mutation  {
            sendEmail(
                name: "${name}",
                email: "${email}",
                phoneNumber: "${phoneNumber}",
                message: "${message}",
            ) 
            }`
    });

    const config = {
      method: 'post',
      url: `${BASE_URL}/graphql`,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    };

    emailSent = await axios(config).then((response: any) => {
      if (!response?.data?.data?.sendEmail) {
        return {
          error: 'Error in the backend',
          data: {}
        };
      }
      return {
        error: {},
        data: response
      };
    });
    return emailSent;
  } catch (error: any) {
    return error;
  }
}

export { sendEmail };

// a) 

// b) ↓↓↓
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

const getAllSubscribers = async() : Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((subscriber: any) => {
    return {
      id: subscriber.id,
      name: subscriber.name,
      email: subscriber.email
    }
  })
};

const main = async () => {
  try {
    const subscribers = await getAllSubscribers();
    console.log(subscribers)  
  } catch (e) {
    console.log(e.response.data)
  }
};

main();
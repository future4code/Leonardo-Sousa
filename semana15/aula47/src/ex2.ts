// a) A diferença é que na função nomeada o "async" é posto no começo da função,
// na arrow function, não.

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
    const users = await getAllSubscribers();
    console.log(users)  
  } catch (e) {
    console.log(e.response.data)
  }
};

main();
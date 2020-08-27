// a) 

// b) ↓↓↓
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
	id: string;
	name: string;
	email: string;
}


const getAllSubscribers = async() : Promise<User[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((subscriber: any) => {
    return {
      id: subscriber.id,
      name: subscriber.name,
      email: subscriber.email
    }
  })
};

const sendNotifications = async(user: User[], message: string) : Promise<void> => {
  const promiseArray = [];
  for (const us of user) {
    promiseArray.push(
      axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: us.id,
        message: message,
      })
    );
  }
  await Promise.all(promiseArray);
  console.log("Enviados!!!")
}

const main = async () => {
  try {

    const users = await getAllSubscribers();

    await sendNotifications(users, "777---777---777---777")
    
  } catch (e) {
    console.log(e.response.data)
  }
};

main();
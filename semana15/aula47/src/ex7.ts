// a) 

// b) ↓↓↓
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
	id: string;
	name: string;
	email: string;
}

const createUser = async(name: string, email: string) : Promise<void> => {
  await axios.put(`${baseUrl}/subscribers`, {
    name,
    email
  });
};

const createNews = async(title: string, content: string, date: number = Date.now()) : Promise<void> => {
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date
  });
};

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
}

const getAllNotifications = async (): Promise<any> => {
  const users = await getAllSubscribers();

  const notificationPromises = [];
  for (const user of users) {
    notificationPromises.push(
      axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
    );
  }

  const result = await Promise.all(notificationPromises);

  const dataFromResult = result.map((res) => res.data);

  return dataFromResult;
  console.log(dataFromResult)
};

const createAndSendNotifications = async () => {
  try {
    await createNews("Deu Bom!!!", "()()()()()()====()()()()()()"); 

    const users = await getAllSubscribers();

    await sendNotifications(users, "Testando mensagens");
  } catch (err) {
    console.log("err: ", err.message);
  }
};

const main = async () => {
  try {
    
    await createUser("Leo Gomes", "leo@leo.com")

    await createAndSendNotifications();

    await getAllNotifications()
    
  } catch (e) {
    console.log(e.response.data)
  }
};

main();
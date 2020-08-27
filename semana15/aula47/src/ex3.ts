// a) Não haverá nenhum tipo de erro.

// b) Para que ela receba qualquer tipo, já que não sabemos qual tipo de dado está sendo retornado

// c) ↓↓↓
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

const main = async () => {
  try {
    const subscribers = await getAllSubscribers();
    console.log(subscribers)  
  } catch (e) {
    console.log(e.response.data)
  }
};

main();
// a) 

// b) ↓↓↓
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

const createNews = async(title: string, content: string, date: number = Date.now()) : Promise<void> => {
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date
  });
};

const main = async () => {
  try {
    await createNews("Deu Bom!!!", "()()()()()()====()()()()()()"); 
  } catch (e) {
    console.log(e.response.data)
  }
};

main();
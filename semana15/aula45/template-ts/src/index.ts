
const nome: string = (process.argv[2])
console.log(process.argv)

type person = {
  name: string
}

function createPerson(name: string): person {
	return {name: name} 
} 

const myPerson2 = createPerson("Robson");

console.log(myPerson2);
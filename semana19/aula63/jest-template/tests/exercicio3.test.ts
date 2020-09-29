import { verifyAge } from "../src/Exercicio3"
import { User, Casino, NACIONALITY, LOCATION} from "../src/Exercicio3"

test("brasileiro que possa entrar em um estabelecimento no Brasil", () => {
	const leo: User = {
		name: "Leo",
		age: 22,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.BRAZIL,
	}

	const result = verifyAge(casino, [leo])
	
	expect(result.brazilians.allowed).toEqual(["Leo"])
})

test("americando que possa entrar em um estabelecimento no Brasil", () => {
	const leo: User = {
		name: "Leo",
		age: 22,
		nacionality: NACIONALITY.AMERICAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.BRAZIL,
	}

	const result = verifyAge(casino, [leo])
	
	expect(result.americans.allowed).toEqual(["Leo"])
})

test("dois usuários brasileiros(19y) e dois americanos(19y) quererem entrar em um estabelecimento nos Estados Unidos", () => {
	const leo: User = {
		name: "Leo",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const viny: User = {
		name: "Viny",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const leo2: User = {
		name: "Leo2",
		age: 19,
		nacionality: NACIONALITY.AMERICAN,
	}
	const viny2: User = {
		name: "Viny2",
		age: 19,
		nacionality: NACIONALITY.AMERICAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.EUA,
	}

	const result = verifyAge(casino, [leo, leo2, viny, viny2])
	
	expect(result.americans.unallowed).toEqual(["Leo2", "Viny2"])
	expect(result.brazilians.unallowed).toEqual(["Leo", "Viny"])
})

test("dois usuários brasileiros(19y) e dois americanos(21y) quererem entrar em um estabelecimento nos Estados Unidos", () => {
	const leo: User = {
		name: "Leo",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const viny: User = {
		name: "Viny",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const leo2: User = {
		name: "Leo2",
		age: 21,
		nacionality: NACIONALITY.AMERICAN,
	}
	const viny2: User = {
		name: "Viny2",
		age: 21,
		nacionality: NACIONALITY.AMERICAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.EUA,
	}

	const result = verifyAge(casino, [leo, leo2, viny, viny2])
	
	expect(result.americans.allowed).toEqual(["Leo2", "Viny2"])
	expect(result.brazilians.unallowed).toEqual(["Leo", "Viny"])
})

//---------------------------------------------------------------------------------------------

test("brasileiro que possa entrar em um estabelecimento no Brasil", () => {
	const leo: User = {
		name: "Leo",
		age: 22,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.BRAZIL,
	}

	const result = verifyAge(casino, [leo])
	
	expect(result.brazilians.allowed.length).toBeGreaterThan(0)
	expect(result.brazilians.allowed.length).toBeLessThan(2)
})

test("americando que possa entrar em um estabelecimento no Brasil", () => {
	const leo: User = {
		name: "Leo",
		age: 22,
		nacionality: NACIONALITY.AMERICAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.BRAZIL,
	}

	const result = verifyAge(casino, [leo])
	
	expect(result.americans.unallowed.length).toBe(0)
})

test("dois usuários brasileiros(19y) e dois americanos(19y) quererem entrar em um estabelecimento nos Estados Unidos", () => {
	const leo: User = {
		name: "Leo",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const viny: User = {
		name: "Viny",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const leo2: User = {
		name: "Leo2",
		age: 19,
		nacionality: NACIONALITY.AMERICAN,
	}
	const viny2: User = {
		name: "Viny2",
		age: 19,
		nacionality: NACIONALITY.AMERICAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.EUA,
	}

	const result = verifyAge(casino, [leo, leo2, viny, viny2])
	
	expect(result.americans.unallowed).toContain("Viny2")
	expect(result.brazilians.unallowed).toContain("Leo")
})

test("dois usuários brasileiros(19y) e dois americanos(21y) quererem entrar em um estabelecimento nos Estados Unidos", () => {
	const leo: User = {
		name: "Leo",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const viny: User = {
		name: "Viny",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN,
	}
	const leo2: User = {
		name: "Leo2",
		age: 21,
		nacionality: NACIONALITY.AMERICAN,
	}
	const viny2: User = {
		name: "Viny2",
		age: 21,
		nacionality: NACIONALITY.AMERICAN,
	}
	
	const casino: Casino = {
		name: "Grande",
		location: LOCATION.EUA,
	}

	const result = verifyAge(casino, [leo, leo2, viny, viny2])
	
	expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
	expect(result.americans.unallowed.length).toBeLessThan(1)
	expect(result.americans.allowed.length).toBe(2)
})
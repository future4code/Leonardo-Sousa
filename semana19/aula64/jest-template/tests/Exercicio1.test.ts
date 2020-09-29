import { Character, performAttack, validateCharacter } from "../src/Exercicio1"


describe("teste de validação dos campos", () => {
  test("personagem com o nome vazio, isto é, '' ", () => {
    const personagem: Character = {
      name: "",
      life: 1500,
      strength: 100,
      defense: 100
    }

    expect(validateCharacter(personagem)).toBe(false)
  })

  test("personagem com a vida vazia, isto é, undefined", () => {
    const personagem: Character = {
      name: "Homem-Aranha",
      life: undefined,
      strength: 100,
      defense: 100
    }

    expect(validateCharacter(personagem)).toBe(false)
  })

  test("personagem com a força vazia, isto é, undefined", () => {
    const personagem: Character = {
      name: "Homem-Aranha",
      life: 1500,
      strength: undefined,
      defense: 100
    }

    expect(validateCharacter(personagem)).toBe(false)
  })

  test("personagem com a defesa vazia, isto é, undefined", () => {
    const personagem: Character = {
      name: "Homem-Aranha",
      life: 1500,
      strength: 100,
      defense: undefined
    }

    expect(validateCharacter(personagem)).toBe(false)
  })

  test("personagem com a vida ou a força ou a defesa com um valor negativo", () => {
    const personagem: Character = {
      name: "Homem-Aranha",
      life: 1500,
      strength: -100,
      defense: 100
    }

    expect(validateCharacter(personagem)).toBe(false)
  })

  test("personagem com a vida ou a força ou a defesa com um valor 0", () => {
    const personagem: Character = {
      name: "Homem-Aranha",
      life: 1500,
      strength: 100,
      defense: 0
    }

    expect(validateCharacter(personagem)).toBe(false)
  })

  test("personagem com as informações validas", () => {
    const personagem: Character = {
      name: "Homem-Aranha",
      life: 1500,
      strength: 100,
      defense: 100
    }

    expect(validateCharacter(personagem)).toBe(true)
  })
})


describe("teste de ataque e defesa", () => {
  test("conseguindo atacar", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "pepsi",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "coca",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("retornando um personagem inválido", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "dolly",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "guaraná",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
})

describe("Testes exericio 6", ()=>{

  test("Verificando estado final da vida dos personagens após 4 ataques alternados", () => {
      const validatorMock = jest.fn(() => {
        return true;
      });
  
      const attacker: Character = {
        name: "Leo",
        life: 1500,
        defense: 200,
        strength: 800,
      };
  
      const defender: Character = {
        name: "Viny",
        life: 1500,
        defense: 400,
        strength: 800,
      };

      performAttack(attacker, defender, validatorMock as any);
      performAttack(defender, attacker, validatorMock as any);
      performAttack(defender, attacker, validatorMock as any);
      performAttack(attacker, defender, validatorMock as any);

      expect(defender.life).toEqual(700);
      expect(attacker.life).toEqual(300);
  })

  test("Verificação exata de vidas", () => {
      const validatorMock = jest.fn(() => {
        return true;
      });
  
      const attacker: Character = {
        name: "Leo",
        life: 1500,
        defense: 200,
        strength: 800,
      };
  
      const defender: Character = {
        name: "Viny",
        life: 1500,
        defense: 400,
        strength: 800,
      };

      performAttack(attacker, defender, validatorMock as any);
      performAttack(defender, attacker, validatorMock as any);
      performAttack(defender, attacker, validatorMock as any);
      performAttack(attacker, defender, validatorMock as any);

      expect(defender.life).toBeGreaterThan(699);
      expect(defender.life).toBeLessThan(701);
      expect(attacker.life).toBeGreaterThan(299);
      expect(attacker.life).toBeLessThan(301);
  })

  test("Verificação de vida após a morte do defender", () => {
      const validatorMock = jest.fn(() => {
        return true;
      });
  
      const attacker: Character = {
        name: "Leo",
        life: 1500,
        defense: 200,
        strength: 800,
      };
  
      const defender: Character = {
        name: "Viny",
        life: 1500,
        defense: 400,
        strength: 800,
      };

      performAttack(attacker, defender, validatorMock as any);
      performAttack(attacker, defender, validatorMock as any);
      performAttack(attacker, defender, validatorMock as any);
      performAttack(attacker, defender, validatorMock as any);

      expect(defender.life).toBeLessThan(0);
      expect(attacker.life).toEqual(1500);
  })

  test("Verificação de vida após a morte do attacker", () => {
      const validatorMock = jest.fn(() => {
        return true;
      });
  
      const attacker: Character = {
        name: "Leo",
        life: 1500,
        defense: 200,
        strength: 800,
      };
  
      const defender: Character = {
        name: "Viny",
        life: 1500,
        defense: 400,
        strength: 800,
      };

      performAttack(defender, attacker, validatorMock as any);
      performAttack(defender, attacker, validatorMock as any);
      performAttack(defender, attacker, validatorMock as any);

      expect(attacker.life).toBeLessThan(0);
      expect(defender.life).toEqual(1500);
  })
})
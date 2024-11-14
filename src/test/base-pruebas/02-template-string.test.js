import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas archivo 02-template-string.js', () => {

  test('getSaludo debe retornar "Hola Tomas', () => {

      const name = "Tomas";
      const message = getSaludo(name);

      expect (message).toBe( `Hola ${name}`)
   })
 })

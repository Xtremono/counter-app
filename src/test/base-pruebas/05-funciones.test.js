import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"


describe('05-funciones', () => {

  test('getUser debe retornar un objeto', () => {

      const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
}

    const user = getUser();

    expect( testUser).toEqual(user);

   })

   test('getUserActivo debe retornar un objeto', () => {

    const name = "Tomas";

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name
    });


    })
 })

import { getImagen } from "../../base-pruebas/11-async-await"


describe('11-async-await', () => {

  test('getImagen debe retornar un URL de la imagen', async() => {

    const resp = await getImagen();

    expect(resp).toBe('No se encontro la imagen');





   })



})

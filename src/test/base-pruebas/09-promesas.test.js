import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";



describe('pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {


      const id = 1;
      getHeroeByIdAsync(id).then(hero => {

        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
      });
        done();
      });


  })

  test('getHeroeByIdAsync debe de obtener un error si el heroe no existe', (done) => {


    const id = 100;
    getHeroeByIdAsync(id).catch(error => {

      expect(error).toBe(´No se puede encontra el heroe con el id ${id}´)
      done();
    })


})


 })

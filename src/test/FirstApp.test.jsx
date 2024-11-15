
import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"




describe('FirstApp', () => {

  test('Debe hacer match con el snapshot', () => {
      const title = "Hola, soy Tomas"
      render(<FirstApp title={title}/>)




  })
})

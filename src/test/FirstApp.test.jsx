
import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"




describe('FirstApp', () => {

  test('Debe hacer match con el snapshot', () => {
      const title = "Hola, soy Tomas"
      const {container} = render(<FirstApp title={title}/>)

      expect(container).toMatchSnapshot();


  })

  test('debe de mostrar el titulo en un h1', () => {
    const title = "Hola, soy Tomas"
    const {container, getByText} = render(<FirstApp title={title}/>)
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toBe(title);




   })
})

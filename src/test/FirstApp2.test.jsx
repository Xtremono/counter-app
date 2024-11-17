import { render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"




describe('FirstApp', () => {

    const title = "Hola, soy Goku"
    const subTitle = "Hola, soy Goku"

    test('hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();




    })

    test('debe demostar un mensaje que diga "Hola, soy Goku"', () => {

      render(<FirstApp title={title}/>);
      expect( screen.getByText(title)).toBeTruthy();



    })

    test('debe de mostrar el titulo de un h1', () => {

      render(<FirstApp title={title}/>);
      expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain(title);

    })

    test('debe de enviar el subititulo enviado por props', () => {

      render(<FirstApp
        title={title}
        subTitle={subTitle}/>);

        expect( screen.getAllByText(subTitle).length).toBe(2);

    })
  })

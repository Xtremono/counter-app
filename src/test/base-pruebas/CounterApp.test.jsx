import { render, screen } from "@testing-library/react"
import { CounterApp } from "../../CounterApp"



describe('CounterApp', () => {

  test('counteapp debe hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={0}/>);
    expect(container).toMatchSnapshot();




  })

  test('se debe mostrar el valor inicial de 0', () => {

    render(<CounterApp value={100}/>);
    expect(screen.getByText('100')).toBeTruthy();


  })

})

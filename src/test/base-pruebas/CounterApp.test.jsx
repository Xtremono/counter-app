import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../../CounterApp"

const initialValue = 10;

describe('CounterApp', () => {

  test('counteapp debe hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={0}/>);
    expect(container).toMatchSnapshot();




  })

  test('se debe mostrar el valor inicial de 0', () => {

    render(<CounterApp value={100}/>);
    expect(screen.getByText(100)).toBeTruthy();


  })

  test('debe de incrementar con el btn +1', () => {

    render(<CounterApp value={initialValue}/>);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  })

  test('debe de decrementar con el btn -1', () => {

    render(<CounterApp value={initialValue}/>);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('9')).toBeTruthy();
  })

  test('debe de funcionar el boton de reset', () => {
    render(<CounterApp value={initialValue}/>);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText(initialValue)).toBeTruthy();



  })

})

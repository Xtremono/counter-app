import { useState } from "react";
import PropTypes from "prop-types";


export const CounterApp = ({value}) => {

  const [ counter, setCounter ] = useState( value );
  const handleAdd = () => setCounter( counter + 1);
  const handleSubstract = () => setCounter(counter -1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>RESET</button>
    </>
  )
};

CounterApp.propTypes = {
  value: PropTypes.number
};


// usaamos onClick, para notar que cada vez que se presiona el boton se genera una acccion
// const [ counter, setCounter ] = useState( 0 );                 1. INICIALIZAMOS EL VALOR DE COUNTER EN 0 EN "USESTATE()""
  //const handleAdd = (event) => {                                2. DENTRO DE NUESTRO METODO HANDLEADD LLAMAMOS A LA FUNCION SETCOUNTER
  //  setCounter( counter + 1);                                   3. DENTRO DE SETCOUNTER LE AGREGAMOS EL VALOR DE COUNTER +1;
 // }

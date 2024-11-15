import PropTypes from "prop-types";


export const FirstApp = ({title, subTitle, namee }) => {


  return (
    <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    <p>{namee}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string,                        //
  subTitle: PropTypes.number
};


// <></> A esto se le llama fragmento, es un agrupador de elementos html. Esto tambien lo conocemos como "Nodo Padre"
// {Dentro de esta llaves no podemos colocar un objeto} <h1>{{nombre:tomas, apellido: ruiz}}</h1>. Esto no es valido.
//Podriamos llamar al objeto si queremos con puntuacion. Digamos que nuestro objeto esta en const me = {nombre:tomas, apellido: ruiz}. Lo llamariamos <h1>{me.nombre}</h1>
// El tittle es un props, una propiedad. Defini esa propiedad en el archivo main.jsx en la parte de mi componente <FirstApp title="Hola soy Tomas!"/>

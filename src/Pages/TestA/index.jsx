import React, { useState } from "react";

import "./styles.scss";

const TestA = () => {
  const [imparArray, setImparArray] = useState([]);
  const [multiplcadoArray, setMultiplicadoArray] = useState([]);
  const [numerosSumados,setNumerosSumados] = useState(0)
  const myArray = [1, 2, 3, 4, 5, 6, 7];

  async function filterNumber() {
    let newArray = [];
    myArray.forEach((num) => {
      if (num % 2 != 0) {
        newArray.push(num);
      }
    });
    setImparArray(newArray);
  }
  async function multipleNumbers() {
    let newArray = [];
    imparArray.forEach((num) => {
      newArray.push(num * 2);
    });
    // await setMultiplicador(newArray);
    await setMultiplicadoArray(newArray);
  }

  async function sumarArray(){
    let suma=0;
    multiplcadoArray.forEach((val)=>{
      suma+=val;
    });
    setNumerosSumados(suma);
  }
  return (
    <>
      <div className="testA-container">
        <h1>TestA</h1>
        <ul>
          <li>Primero filtrar solo los números impares.</li>
          <li>Del resultado anterior, multiplicar cada número por 2</li>
          <li>
            Finalmente de los resultados obtenidos del punto 2, sumarlos y
            entregar un único resultado.
          </li>
        </ul>

        <p>Input : [1, 2, 3, 4, 5, 6, 7]</p>
        <span>
          <button onClick={() => filterNumber()}>Obtener numeros filtrados</button>
        </span>
        <div className="outputOne">
          <ul>
            {imparArray.map((num) => (
              <li>{num}</li>
            ))}
          </ul>
        </div>
        <span>
          <button onClick={() => multipleNumbers()}>Obtener numeros multiplicados</button>
        </span>
        <div className="outputOne">
          <ul>
            {multiplcadoArray.map((numM) => (
              <li>{numM}</li>
            ))}
          </ul>
        </div>
        <span>
          <button onClick={() => sumarArray()}>Obtener numeros sumados</button>
        </span>
        <div className="outputOne">
            <h5>El valor total es: {numerosSumados}</h5>
        </div>
      </div>
    </>
  );
};

export default TestA;

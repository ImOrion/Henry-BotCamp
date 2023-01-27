/* 6️⃣ ***COMPONENTE CREATEBAND*** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { createBands } from '../../redux/actions';
// import * as acttions from "../../redux/actions/index"
// const CreateBand = () => {

//       const[input,setInput]=React.useState({
//             name:"",
//             origin:"",
//             description:"",
//             tickets: 0,
//         })

//       const dispatch = useDispatch();

//       const chance =(e)=>{
//             setInput({...input,[e.target.name]:e.target.value})
//         }

//         const submit=(event)=>{
//             event.preventDefault();
//             dispatch(acttions.createBands(input))
//             setInput({
//                   name:"",
//                   origin:"",
//                   description:"",
//                   tickets: 0,
//             })
//         }
      
//       const [error, setError]=React.useState({
//             name:"",
//             origin:""
//       })


//       React.useEffect(()=>{
//             let error=validation(input);
//             if(error.name!==""){
//                   let p=document.createElement("p");
//                   p.innerHTML=error.name;
      
//             }else if(error.origin!==""){
//                   let p=document.createElement("p");
//                   p.innerHTML=error.origin
//             }
//         },[input]);
      
//         const validation=()=>{
//             let error={
//                   name:"",
//                   origin:"",
//             }
//             if(input.name.length>30){
//                   error.name="Nombre u Origen demasiado largo"
//             }else if (input.origin.length>30){
//                   error.origin="Nombre u Origen demasiado largo"
//             }
//             return error
//         }


//    return <div>
//             <form onSubmit={submit} >
//                 <label >Name: </label>
//                 <input onChange={chance} value={input.name}name="name" id="i_name"></input>
//                 <label>Origin: </label>
//                 <input onChange={chance} value={input.origin} name="origin" id="i_origin"></input>
//                 <label>Description: </label>
//                 <textarea onChange={chance} value={input.description} name="description"></textarea>
//                 <label>Tickets: </label>
//                 <input type="number" onChange={chance} value={input.tickets} name="tickets"></input>
//                 <button type='submit'>Create Band</button>
//             </form>
//           </div>;
// };


// export default CreateBand;

import React from "react";
import * as actions from "./../../redux/actions/index";
import { useDispatch } from "react-redux";

const CreateBand = () => {
  const [input, setInput] = React.useState({
    name: "",
    origin: "",
    description: "",
    tickets: 0,
  });

  const [errors, setErrors] = React.useState({
    name: "",
    origin: "",
    tickets: 0,
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(validation({ ...input, [e.target.name]: e.target.value }));
  };

  function validation(input) {
    const error = {};
    if (input.name.length > 30) error.name = "Nombre u Origen demasiado largo";
    if (input.origin.length > 30)
      error.origin = "Nombre u Origen demasiado largo";
    if (input.tickets < 0)
      error.tickets = "Los tickets deben ser un numero positivo";

    return error;
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.origin && !errors.tickets) {
      dispatch(actions.createBands(input));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={input.name}
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="">Origin: </label>
        <input
          type="text"
          name="origin"
          onChange={handleInput}
          value={input.origin}
        />
        {errors.origin && <p>{errors.origin}</p>}
        <label htmlFor="">Description: </label>
        <textarea
          name="description"
          onChange={handleInput}
          value={input.description}
        />
        <label htmlFor="">Tickets: </label>
        <input
          type="number"
          name="tickets"
          onChange={handleInput}
          value={input.tickets}
        />
        {errors.tickets && <p>{errors.tickets}</p>}
        <button type="submit">Create Band</button>
      </form>
    </div>
  );
};

export default CreateBand;
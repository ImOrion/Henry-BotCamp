/// =========================================================================== ///
/// =============================== HENRY-CATS ================================ ///
/// =========================================================================== ///

'use strict'

let cats = []
let accessories = []

module.exports = {

  testCats: () => cats,

  testAccessories: () => accessories,

  reset: function () {
    // No es necesario modificar esta función. La usamos para "limpiar" los arreglos entre test y test.

    cats = []
    accessories = []
  },

  // ==== COMPLETAR LAS SIGUIENTES FUNCIONES (vean los test de `controller.js`) =====

  addCat: function (name) {
    // Agrega un nuevo gato, verificando que no exista anteriormente su nombre.
    // Debe tener una propiedad <age> que inicialmente debe ser '1 year'.
    // Debe tener una propiedad <color> que inicialmente es un array vacío.
    // Debe tener una propiedad <accessories> que inicialmente es un array vacío.
    // El gato o gata debe guardarse como un objeto con el siguiente formato:
    // { name, age: '1 year', color: [], accessories: [] }
    // En caso exitoso debe retornar el objeto, osea el gato creado'.
    // En caso de haber un gato existente, no se agrega y debe arrojar el Error ('El gato o gata ya existe') >> ver JS throw Error
    const foundCat = cats.find((ele) => ele.name === name)
    if(foundCat) throw ('El gato o gata ya existe')
    let obj = { name, age: '1 year', color: [], accessories: [] }
    cats.push(obj)
    return obj
  },
  listCats: function (age) {
    // Si no se recibe parametro <age> retornar todos los gatos del array 'cats'
    // En caso de recibir el parámetro <age: "1 year">, devuelve sólo los gatos correspondientes a dicho age.
    // Si recibe parámetro <age> pero lo recibe con diferente edad, debe arrojar el Error ('El gato o gata tiene una edad diferente') >> ver JS throw Error
  if(!age)return cats
 const elGatoxd = cats.filter((ele) => ele.age === age)

 if(elGatoxd.length === 0 )  throw ("El gato o gata tiene una edad diferente")
 return elGatoxd
  },

  addAccessory: function (obj) {
    let xd = {id: obj.id, color: obj.color, type: obj.type, description: obj.description, popularity: "low"}

    // Agrega un nuevo accesorio al catálogo.
    // Si el accesorio ya existe, no es agregado y arroja un Error ('El accesorio con el id <id> ya existe')
    // Debe devolver el mensaje 'El accesorio <nombre_accesorio> fue agregado correctamente'
    // Inicialmente debe guardar la propiedad <popularity> del accesorio como 'low'
    const buscaracc = accessories.find((ele) => ele.id === obj.id)
    if(buscaracc) throw "El accesorio con el id " + obj.id + " ya existe"
    accessories.push(xd)
    return "El accesorio " + obj.type + " fue agregado correctamente"
  },

  getAccessories: function (type, color) {
    // Devuelve un array con todos los accesorios.
    // Si recibe parámetro "type", debe retornar  los accesorios que coincidan con el tipo.
    // Si recibe parámetro "color" debe retornar los accesorios que coincidan con el color
    // Si recibe ambos parámetros, se devuelven los accesorios que coincidan con el color o con el tipo
    const filtroAccesorios = accessories.filter(
      (el) => el.type === type || el.color === color
    );
    if (type || color) return filtroAccesorios;
    return accessories;
  },

  deleteAccessory: function (id) {
    // Elimina un accesorio del array
    // Si el id no existe dentro del array de accesorios, arrojar un Error ('El accesorio con el id <id> no fue encontrado')
    // Una vez eliminado el accesorio del array, devolver un mensaje que diga 'El accesorio con el id <id> fue eliminado correctamente'
  const idBusq = accessories.findIndex((ele) => ele.id === id)
  if(idBusq === -1) throw "El accesorio con el id " + id + " no fue encontrado"
  accessories.splice(idBusq, 1)
  return "El accesorio con el id " + id + " fue eliminado correctamente"
  },

  modifyAccessory: function (obj) {
    // Modifica un accesorio del array
    // Si el id no existe dentro del array de accesorios arrojar un Error ('Accesorio no encontrado')
    // Si el objeto viene vacio, arrojar un Error ('No se detectaron cambios a aplicar')
    // Una vez modificado el accesorio del array, devolver el accesorio modificado
    const ola = accessories.find((ele) => ele.id === obj.id)
    if(Object.keys(obj).length === 0) throw ('No se detectaron cambios a aplicar')
    if(!ola) throw ('Accesorio no encontrado')
     ola.id = obj.id
     ola.type = obj.type
    ola.color = obj.color
    ola.description = obj.description 
     return ola
   
  },

  addCatAccessory: function (catName, catAccessory) {
    // Agrega un accesorio a un gatito
    // Si el gato no existe arrojar un Error ('El gato <nombre_gato> no existe')
    // Si el gato ya tiene puesto el accesorio, arrojar un Error('El gato <nombre_gato> ya tiene el accesorio puesto') y no lo agrega
    // Si el accesorio fue agregado correctamente retornar un mensaje: 'El accesorio <tipo_accesorio> fue agregado a <nombre_gato> con exito'
    const gato = cats.find(element=>element.name === catName)
   
    if(!gato) throw Error(`El gato ${catName} no existe`)

    const buscar = gato.accessories.find(element=>element.id === catAccessory.id)
    if(!buscar){
      gato.accessories.push(catAccessory)
      return `El accesorio ${catAccessory.type} fue agregado a ${gato.name} con exito`
    }else{
      throw Error(`El gato ${gato.name} ya tiene el accesorio puesto`)
    }
  },

  updateAccessoryPopularity: function (accessoryId) {
    // Actualiza la propiedad <popularity> del accesorio,
    // Para eso deberás comprobar cuantos gatos visten el accesorio recibido por parámetros (es un id)
    // Si la cantidad de gatos que visten el accesorio son 2, entonces la popularidad del accesorio debe valer 'average'
    // Si la cantidad de gatos que visten el accesorio son 3 (o mas), entonces la popularidad del accesorio debe valer 'high'
    // Si se actualizó la popularidad del accesorio, devolver un mensaje que diga 'La popularidad del accesorio <color_accesorio> <tipo_accesorio> fue actualizada a <popularidad>'
    // Si no se actualizó la popularidad del accesorio, devolver un mensaje que diga 'No hubieron cambios en la popularidad del accesorio <color_accesorio> <tipo_accesorio>'
    // Si el id de accesorio no existe arrojar un Error ('accesorio no encontrado' y no actualiza la popularidad)
    let foudGato = accessories.find((cat) => cat.id === accessoryId);
    
    if (!foudGato) {
      throw ("accesorio no encontrado");
    }
    
    let counterAccessories = 0;
    
    cats.map((cat) => {
      if (cat.accessories.includes(foudGato)) {
        counterAccessories++;
      }
    });

    if (counterAccessories > 2) {
      foudGato.popularity = "high";
      return (`La popularidad del accesorio ${foudGato.color} ${foudGato.type} fue actualizada a ${foudGato.popularity}`);
    } else 
    if (counterAccessories === 2) {
      foudGato.popularity = "average";
      return (`La popularidad del accesorio ${foudGato.color} ${foudGato.type} fue actualizada a ${foudGato.popularity}`);
    } else {
    return (`No hubieron cambios en la popularidad del accesorio ${foudGato.color} ${foudGato.type}`);
    }
  },
}

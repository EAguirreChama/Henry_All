/// =========================================================================== ///
/// =============================== HENRY-CATS ================================ ///
/// =========================================================================== ///

'use strict'

const e = require("express")

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

    let Gatito = cats.find(c => c.name === name);
    if(Gatito === undefined) {
      let Gato = {name: name, age: "1 year", color: [], accessories: []}
      cats.push(Gato);
      return Gato;
    }
    if (Gatito !== undefined){
      throw Error("El gato o gata ya existe")
    }
    // Termine el Test 01
  },
  
  listCats: function (age) {
    // Si no se recibe parametro <age> retornar todos los gatos del array 'cats'
    // En caso de recibir el parámetro <age: "1 year">, devuelve sólo los gatos correspondientes a dicho age.
    // Si recibe parámetro <age> pero lo recibe con diferente edad, debe arrojar el Error ('El gato o gata tiene una edad diferente') >> ver JS throw Error

    if(!age) return cats;

    if (age !== "1 year") throw Error ("El gato o gata tiene una edad diferente")

    let Gato1Año = cats.filter((cat) => cat.age === "1 year")

    return Gato1Año

    // Termine el Test 02
  },

  addAccessory: function ({id, color, type, description}) {
    // Agrega un nuevo accesorio al catálogo.
    // Si el accesorio ya existe, no es agregado y arroja un Error ('El accesorio con el id <id> ya existe')
    // Debe devolver el mensaje 'El accesorio <nombre_accesorio> fue agregado correctamente'
    // Inicialmente debe guardar la propiedad <popularity> del accesorio como 'low'
    let AccesoriosGato = accessories.find(e => e.id === id);
    if(AccesoriosGato){
      throw Error(`El accesorio con el id ${ id } ya existe`);
    }
    let Accesorio = {id, color, type, description, popularity: "low"};
    accessories.push(Accesorio) 
    return ("El accesorio " + Accesorio.type + " fue agregado correctamente")

    // Termine el Test 03
  },

  getAccessories: function (type, color) {
    // Devuelve un array con todos los accesorios.
    // Si recibe parámetro "type", debe retornar  los accesorios que coincidan con el tipo.
    // Si recibe parámetro "color" debe retornar los accesorios que coincidan con el color
    // Si recibe ambos parámetros, se devuelven los accesorios que coincidan con el color o con el tipo
    let AllAccesorios = [];
    if (type || color) {
      AllAccesorios = accessories.filter((a) => a.type === type || a.color === color);
      return AllAccesorios
    }
    return accessories

    // Termine el Test 03
  },

  deleteAccessory: function (id) {
    // Elimina un accesorio del array
    // Si el id no existe dentro del array de accesorios, arrojar un Error ('El accesorio con el id <id> no fue encontrado')
    // Una vez eliminado el accesorio del array, devolver un mensaje que diga 'El accesorio con el id <id> fue eliminado correctamente'

    if(!accessories.find((e) => e.id === id)){
      throw Error (`El accesorio con el id ${ id } no fue encontrado`)
    }
    accessories = accessories.filter((e) => e.id !== id);
    return `El accesorio con el id ${ id } fue eliminado correctamente`

    // Termine el Test 04
  },

  modifyAccessory: function (obj) {
    // Modifica un accesorio del array
    // Si el id no existe dentro del array de accesorios arrojar un Error ('Accesorio no encontrado')
    // Si el objeto viene vacio, arrojar un Error ('No se detectaron cambios a aplicar')
    // Una vez modificado el accesorio del array, devolver el accesorio modificado

    if (Object.keys(obj).length === 0) {
      throw Error ("No se detectaron cambios a aplicar")
    }
    let Accesorio = accessories.find((e) => e.id === obj.id);
    if(!Accesorio) {
      throw Error ("Accesorio no encontrado")
    }
    accessories = accessories.map((e) => {
      if(e.id === obj.id) {
        return {...e, ...obj}
      }
      return e;
    })
    return accessories.find((e) => e.id === obj.id)

    // Termine el Test 04
  },

  addCatAccessory: function (catName, catAccessory) {
    // Agrega un accesorio a un Gatito
    // Si el gato no existe arrojar un Error ('El gato <nombre_gato> no existe')
    // Si el gato ya tiene puesto el accesorio, arrojar un Error('El gato <nombre_gato> ya tiene el accesorio puesto') y no lo agrega
    // Si el accesorio fue agregado correctamente retornar un mensaje: 'El accesorio <tipo_accesorio> fue agregado a <nombre_gato> con exito'

    let index
    for(let i = 0 ; i < cats.length ; i++){
      if(cats[i].name == catName) {
        index = i
      }
    }
    if (index === undefined) {
      throw Error (`El gato ${catName} no existe`)
    }
    if (cats[index].accessories.find((e) => e.id == catAccessory.id)) {
       throw Error(`El gato ${catName} ya tiene el accesorio puesto`);
    }
    cats[index].accessories.push(catAccessory) 
    return `El accesorio ${catAccessory.type} fue agregado a ${catName} con exito`;

    // Termine el Test 05
  },

  updateAccessoryPopularity: function (accessoryId) {
    // Actualiza la propiedad <popularity> del accesorio,
    // Para eso deberás comprobar cuantos gatos visten el accesorio recibido por parámetros (es un id)
    // Si la cantidad de gatos que visten el accesorio son 2, entonces la popularidad del accesorio debe valer 'average'
    // Si la cantidad de gatos que visten el accesorio son 3 (o mas), entonces la popularidad del accesorio debe valer 'high'
    // Si se actualizó la popularidad del accesorio, devolver un mensaje que diga 'La popularidad del accesorio <color_accesorio> <tipo_accesorio> fue actualizada a <popularidad>'
    // Si no se actualizó la popularidad del accesorio, devolver un mensaje que diga 'No hubieron cambios en la popularidad del accesorio <color_accesorio> <tipo_accesorio>'
    // Si el id de accesorio no existe arrojar un Error ('accesorio no encontrado' y no actualiza la popularidad)
    const AccesorioE = accessories.find((acc) => acc.id === accessoryId)

    if(!AccesorioE) throw Error ("accesorio no encontrado")

    let pop = AccesorioE.popularity;

    let count = 0

    for(let i = 0 ; i < cats.length ; i++){
      for(let j = 0 ; j < cats[i].accessories.length ; j++){
        if(cats[i].accessories[j].id === accessoryId) {
          count += 1;
        }
      }
    }
    if (count === 2){
      this.modifyAccessory({
        id: accessoryId,
        popularity: "average"
      })
      if(pop !== "average"){
        return `La popularidad del accesorio ${AccesorioE.color} ${AccesorioE.type} fue actualizada a average`
      }
    }
    if (count >= 3){
      this.modifyAccessory({
        id: accessoryId,
        popularity: "high"
      })
      if(pop !== "high"){
        return `La popularidad del accesorio ${AccesorioE.color} ${AccesorioE.type} fue actualizada a high`
      }
    }
    return `No hubieron cambios en la popularidad del accesorio ${AccesorioE.color} ${AccesorioE.type}`

  // Termine el Test 06
  }
}

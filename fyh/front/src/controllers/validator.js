export const validator =(input)=>{
    const numbers = /^[0-9]/
    // const blanc = /^[^]+$/
    let error = {}

    if(input.id_vehicle === '') error.id_vehicle = 'Ingrese una placa'
    if(input.pit === '') error.pit = 'No puede estar vacio'
    // if(typeof(input.pit) !== 'number') error.pit = 'Debes ser un numero'
    if(numbers.test(input.pit) === false) error.pit = 'Coloque numeros'
    if(input.driver === '') error.driver = 'Ingrese un conductor'
    if(input.tecnician === '') error.tecnician = 'Asigne un tecnico'
    if(input.kilometers === '') error.kilometers = 'Ingrese el kilometraje'
    if(numbers.test(input.kilometers) === false) error.kilometers = 'Coloque numeros'
    if(input.type === '') error.type = 'El tipo no puede estar vacio'
    if(input.datetime === '') error.datetime = 'La fecha no puede estar vacio'
    return error
}
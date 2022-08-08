export const validator =(input)=>{
    const numbers = /^[0-9]/
    // const blanc = /^[^]+$/
    let error = {}

    if(input.id_vehicle === '') error.id_vehicle = 'Ingrese una placa'
    if(input.pit === '') error.pit = 'No puede estar vacio'
    if(input.driver === '') error.driver = 'Ingrese un conductor'
    if(input.tecnician === '') error.tecnician = 'Asigne un tecnico'
    if(numbers.test(input.pit) === false) error.pit = 'Coloque numeros'
    return error
}
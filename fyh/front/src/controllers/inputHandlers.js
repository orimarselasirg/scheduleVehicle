 
 export const inputChanger =(setError, validator, setData, data, name, value)=>{
    setData({
        ...data,
        [name] : (name === 'pit') ? Number(value.toUpperCase()) : value.toUpperCase()
    })
    setError(validator({
        ...data,
        [name] : value.toUpperCase()
    }))
}
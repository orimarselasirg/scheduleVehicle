 
 export const inputChanger =(setError, validator, setData, data, name, value)=>{
    setData({
        ...data,
        [name] : value.toUpperCase()
    })
    setError(validator({
        ...data,
        [name] : value.toUpperCase()
    }))
}

module.exports = {
    start : async (second, minute, hour)=> {
        const time =  setTimeout(() =>{
            if(minute > 59){
                hour = hour + 1
                minute = 0
            }
            if(second < 59){
                    second = second + 1
                } else{
                    second = 1
                    minute = minute + 1
                }
            }, 100)
            console.log(time)
            return time
    }
}
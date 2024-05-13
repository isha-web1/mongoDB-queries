function promiseFn(){
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("i am resolved")
        }else{
            reject("i am reject")
        }
    })
}

promiseFn()
.then((data) =>{
    console.log(data)
})
.catch((error) =>{
    console.log(error)
})
.then(()=>{
    console.log("i am last then blog")
})
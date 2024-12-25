module.exports={
    studied: ["python","javascript"],
    display: function(){
        this.studied.forEach((course)=>{
            console.log(course)
        })
    }
}
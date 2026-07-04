//wrapper that does tr/catch for you automatically 
//written a single time reused everywhere 


const asyncHandler = (fn) =>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next);

}
module.exports=asyncHandler;

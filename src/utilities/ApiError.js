class ApiError extends Error{
    constructor(status ,
         message="SomeThing went wrong" ,
         error =[],
         statck = "",
         ){
            super(message)
            this.status = status,
            this.errors = error,
            this.data = null,
            this.message = message,
            this.success= false

            if(stack){
                this.stack = statck
            }else{
                Error.captureStackTrace(this, this.constructor)
            }
         }
}
export default ApiErro
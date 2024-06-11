function Form(){
    function Myform(event){
        event.prevetDefault();
        const ok=new FormData(event.target)
        const mydata=Object.fromEntries(ok.entries())
        console.log(mydata)
    }
    return(
        <>
            <form onSubmit={Myform} className="lod">
                <h2>Login form</h2>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                /><br/>
                <label htmlFor="password">password</label>
                <input

                type="password"
                name="password"
                id="password"
                />
                <button type="submit">send</button>
            </form><br/><br/>
        </>
    );
        
    }
    
    
    
    export default Form;
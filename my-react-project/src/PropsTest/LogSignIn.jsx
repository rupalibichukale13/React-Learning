import React from 'react'



const LogSignIn = () => {

    const Condition = true;

        //1] Conditional Rendering Using If else
         if( Condition){
        return  (
            <div>
            <h1>Login Page</h1>
            <form action="" id="table">
                <table>
                <tbody>
                    
                <tr>
                    <td><label for=""  class="heading">Email Id</label></td>
                    <br></br> <br></br>
                    <td><input type="email" required placeholder="Email Id"></input></td>
                </tr>
                <tr>
                    <td><label for=""  class="heading">Password:</label></td>
                    <br></br> <br></br>
                    <td><input type="password" required placeholder="Enter Password"></input></td>

                </tr>
                <tr>
                <button type="submit" class="heading" >LOGIN</button> 
                </tr>
               
               
                </tbody>
                
                </table>
                </form>
            </div>
        )
        
        } else{
        return(
            <div>
               <h1>Sign Up Page</h1>
     
               <form action="" id="table">
                <table>
                <tbody>
                <tr>
                    <td><label for=""  class="heading">Username</label></td>
                    <br></br> <br></br>
                    <td><input type="text" required placeholder="USername"></input></td>
                </tr>
                <tr>
                    <td><label for=""  class="heading">Email Id</label></td>
                    <br></br> <br></br>
                    <td><input type="email" required placeholder="Email Id"></input></td>
                </tr>
                <tr>
                    <td><label for=""  class="heading">Password:</label></td>
                    <br></br> <br></br>
                    <td><input type="password" required placeholder="Enter Password"></input></td>

                </tr>
                <tr>
                <button type="submit" class="heading" >Sign In</button> 
                <br></br> <br></br>
                </tr>
               
               
                </tbody>
                
                </table>
                </form>
            </div>
        )
        
    }
}
    export default LogSignIn;
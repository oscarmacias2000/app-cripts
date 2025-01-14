import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import trx from "../assets/tron-trx-icon.svg"


 function Login(){ 
   const navigate = useNavigate();
   //hooks:components:functions
    useEffect(()=>{
        const button = document.getElementById("button");
        if(button){
         button.addEventListener("click", handleClick);
        };

        return(()=>{
            button.removeEventListener("click", handleClick);
        })
    })
    //autenticacion:DOM:id:register:user:password:/Home
    const handleClick = ()=>{
         const username = document.getElementById("email").value;
         const password = document.getElementById("password").value;

         if(username && password){
            console.log("inicio exitoso!");
            //:/Home
            navigate("/Home")
         }else{
            console.log("username", username)
            console.log("password", password)
           
         }
    }
    return(
        <section id="app" onSubmit={handleClick} className='bg-gray-500 dark:bg-white w-full h-full'>
           <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
              <a href='$' className='flex  items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-dark'>
                    <img className='w-8 h-8 mr-1' src={trx} alt='logotipo'>
                      </img>
                         TRON
                </a>
   <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                   Inicia Sesion con tu cuenta  
          </h1>
          <form  className='space-y-6 md:space-y-7 action:$ flex flex-col'>
             <div>
                 <label for="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Your email </label>
                 <input for="email"  type="email" placeholder="email" name='email' id='email'   className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder="email' required="">
                 </input>
             </div>
             <div>
                <label for="password"  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Your password </label>               
                <input for="email" name='password' id='password' alt="password" type="password" placeholder="password" className='bg-gray-50 border   border-gray-300  text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500 placeholder="password"' required="">
                </input>      
             </div>

             <div>
               <button type="button" id="button"   aria-placeholder="iniciar sesion" className="bg-gray-50 border border-gray-300 hover:bg-red  text-gray-900 rounded-lg focus:ring-primary-600 dark:bg-black dark:text-white">iniciar sesion</button>
             </div>
          </form>
        </div>
   </div>
</div>
</section>
);
};
export default Login;
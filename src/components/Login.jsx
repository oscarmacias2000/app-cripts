import { useEffect } from "react";
import {useNavigate} from "react-router-dom";


 function Login(){ 
   const navigate = useNavigate();
    useEffect(()=>{
        const button = document.getElementById("button");
        if(button){
         button.addEventListener("click", handleClick);
        };

        return(()=>{
            button.removeEventListener("click", handleClick);
        })
    })

    const handleClick = ()=>{
         const username = document.getElementById("email").value;
         const password = document.getElementById("password").value;

         if(username && password){
            console.log("inicio exitoso!");
            navigate("/home.jsx")
         }else{
            console.log("username", username)
            console.log("password", password)
           
         }
    }

    return(
        <section id="app" onSubmit={handleClick} className='bg-gray-50 dark:bg-gray-900 w-96 h-full'>
           <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
              <a href='$' className='flex  items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
                    <img className='w-8 h-8 mr-2' src='https://cdn.icon-icons.com/icons2/1487/PNG/512/8369-bitcoin_102502.png' alt='logotipo'>
                      </img>
                         CriptoMania
                </a>
   <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                   Inicia Sesion con tu cuenta  
          </h1>
          <form  className='space-y-6 md:space-y-7 action:$ flex flex-col'>
             <div>
                 <label for="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Your email </label>
                 <input for="email"  type="email" name='email' id='email'   className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder="email' required="">
                 </input>
             </div>
             <div>
                <label for="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Your password </label>               
                <input for="email" name='password' id='password' className='bg-gray-50 border   border-gray-300  text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500 placeholder="password"' required="">
                </input>      
             </div>

             <div>
               <button type="button" id="button"   aria-placeholder="iniciar sesion" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 dark:bg-black dark:text-white">iniciar sesion</button>
             </div>
          </form>
        </div>
   </div>
</div>
</section>
);
};
export default Login;
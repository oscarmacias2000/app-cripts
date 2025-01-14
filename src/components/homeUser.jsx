import tron from "../assets/tron-trx-icon.svg"
import ComponentTable from "./MainComponent";
import Footer from "./footer";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "../App.css";

export default function Home() {
  //hooks:components:functions:render:/Accounts:DOM:id
  const UseNavigate = useNavigate();
    useEffect(()=>{
          const aClick = document.getElementById("accounts");
          const dashboardClick = document.getElementById("dashboard");

          if(aClick && dashboardClick){
            aClick.addEventListener("click", handleClickAccounts);
            dashboardClick.addEventListener("click", handleClickAccounts);
          };

          return(()=>{
            aClick.removeEventListener("click", handleClickAccounts);
            dashboardClick.removeEventListener("click", handleClickAccounts);
          });         
    })
  

 const handleClickAccounts =async ()=>{
    const a = document.getElementById("accounts");
    const dash = document.getElementById("dashboard");

    if(a && dash ){
        console.log("log exitoso!");
        await UseNavigate("/Accounts");
        await UseNavigate("/Dashboard");
      }else((err)=>{
          console.error(err);
      });
  };

  return (
   <>
    <header class='flex bg-[#ffffff] py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide static z-50 w-80%  h-30'>
      <div class='flex flex-wrap justify-between gap-4  max-w-screen-xl mx-auto static inset-x-0 h-20'>
       <div>
       <a href="javascript:void(0)"><img src={tron} alt="logo" class='w-8 h-8'/>  
        </a>
        <a href="logotipo" className="text-gray-300 hover:text-gray-600 text-base"><h2>TRON</h2></a>
       </div>
        <div id="collapseMenu"
          class="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
          <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            class='lg:!flex lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li class='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo"
                class='w-36' />
              </a>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' class='text-gray-300 hover:text-red-600 text-base flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-8 h-8  bi bi-house" viewBox="0 0 16 16">
               <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
               </svg>
                Home
              </a>
            </li>
          
            <li class='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' class='text-gray-300 hover:text-red-600 text-base flex items-center' id="dashboard" onClick={handleClickAccounts}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8 mr-3" viewBox="0 0 32 32">
                  <path
                    d="M27.531 30h-8.062A2.472 2.472 0 0 1 17 27.531V17.469A2.472 2.472 0 0 1 19.469 15h8.062A2.472 2.472 0 0 1 30 17.469v10.062A2.472 2.472 0 0 1 27.531 30zm-8.062-13a.469.469 0 0 0-.469.469v10.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469V17.469a.469.469 0 0 0-.469-.469zm8.062-4h-8.062A2.472 2.472 0 0 1 17 10.531V4.469A2.472 2.472 0 0 1 19.469 2h8.062A2.472 2.472 0 0 1 30 4.469v6.062A2.472 2.472 0 0 1 27.531 13zm-8.062-9a.469.469 0 0 0-.469.469v6.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469V4.469A.469.469 0 0 0 27.531 4zm-6.938 13H4.469A2.472 2.472 0 0 1 2 14.531V4.469A2.472 2.472 0 0 1 4.469 2h8.062A2.472 2.472 0 0 1 15 4.469v10.062A2.472 2.472 0 0 1 12.531 17zM4.469 4A.469.469 0 0 0 4 4.469v10.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469V4.469A.469.469 0 0 0 12.531 4zm8.062 26H4.469A2.472 2.472 0 0 1 2 27.531v-6.062A2.472 2.472 0 0 1 4.469 19h8.062A2.472 2.472 0 0 1 15 21.469v6.062A2.472 2.472 0 0 1 12.531 30zm-8.062-9a.469.469 0 0 0-.469.469v6.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469v-6.062a.469.469 0 0 0-.469-.469z"
                    data-original="#000000" />
                </svg>
                Dashboard
              </a>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' class='text-gray-300 hover:text-red-600 text-base flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8 mr-3" viewBox="0 0 512 512">
                  <path
                    d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                    data-original="#000000"></path>
                </svg>
                Profile
              </a>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'>
              <a href='javascript:void(0)' class='text-gray-300 hover:text-red-600 text-base flex items-center' id="accounts" onClick={handleClickAccounts}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                Cuentas
              </a>
            </li>
          </ul>
        </div>

        <div class='flex items-center max-lg:ml-20'>
          <input type="text" placeholder="Search something..."
            class="bg-transparent border border-gray-300 text-sm w-full px-4 text-gray-300 rounded h-9 outline-none max-sm:hidden"></input>
            
          <div className="user-register flex ml-5">
             <ul>
                <li className="item">
                  <a href="/img"><img src="https://avatars.githubusercontent.com/u/250617?s=60&v=4" className="w-10 h-full rounded-full"></img> </a>
               
                </li>
              </ul>            
          </div>

          <button id="toggleOpen" class='lg:hidden ml-4'>
            <svg class="w-7 h-7 fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    
    //section:components:ComponentTable:table:tailwind:footer
    <section>
      <ComponentTable/>
    </section>
    <footer>
      <Footer/>
    </footer>
    </>
  )
};

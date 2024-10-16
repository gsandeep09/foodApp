import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
// import Grocery from "./components/Grocery";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import RestroInfo from "./components/RestroInfo";
import {lazy,Suspense} from "react";
import UseContext from "./utils/UseContext";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const Grocery=lazy(()=>import("./components/Grocery"));
 



const AppLayout=()=>{
    const [userName,setUserName]=useState();
    useEffect(()=>{

        data={
            name:"Sandeep"
        }
        setUserName(data.name)
    },[])
    return(
        <Provider store={appStore}>
        <UseContext.Provider value={{loginUser:userName,setUserName}}>
        <div className="app">
    <Header/>
   <Outlet/>
    </div>
    </UseContext.Provider>
    </Provider>
    )
}

const appRouter=createBrowserRouter(
    [{
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about_us",
                element:<AboutUs/>
            },
            {
                path:"/contact_us",
                element:<ContactUs/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h2>loading......</h2>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                    path:"/restro/:resId",
                    element:<RestroInfo/>
            }
        ],
        errorElement:<Error/>
        
        
   } ]
)



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
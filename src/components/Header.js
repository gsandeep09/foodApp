import { LOGO_URL } from "../utils/constant";
import {useState,useContext} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UseContext from "../utils/UseContext";
import { useSelector } from "react-redux";


const Header=()=>{
   
    const OnlineStatus=useOnlineStatus();
    const {loginUser}=useContext(UseContext);
    console.log(loginUser);
    const [btnName,setBtnName]=useState("login");

    const cart=useSelector((store)=>store.cart.items);
    console.log(cart);

    return(
        <div className="h-22 flex justify-between border border-black m-4 items-center bg-gray-300">
            <img src={LOGO_URL} className="w-20 m-4 border border-black "/>
            <div className="flex mx-20 items-center ">
                <ul className="flex p-4 ">
                  <li className="px-4">Online-Status:{OnlineStatus?"true":"false"}</li>
                  <li className="px-4"><Link to="/">Home</Link></li>
                  <li className="px-4"><Link to="/about_us">About Us</Link></li>
                  <li className="px-4"><Link to="/contact_us">Contact Us</Link></li>
                  <li className="px-4 font-bold text-lg"><Link  to="/cart">Cart-({cart.length} items)</Link></li>
                  <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                </ul>
                <button className="bg-stone-400 px-4 border border-black h-7 w-[120px] " onClick={()=>{
                    btnName==="login"?setBtnName("logout"):setBtnName(loginUser);

                }}
                >{loginUser}</button>
            </div>
           

        </div>
    )

   

}

export default Header;
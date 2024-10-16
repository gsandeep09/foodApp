

import { useDispatch, useSelector } from "react-redux";
import RestroListMenu from "../components/RestroListMenu";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const showItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handlerClearCart=()=>{
        dispatch(clearCart())

    };
   
    return <div className="w-6/12 mx-auto bg-gray-200 p-2  ">
        <div className="text-center my-2 ">
        <p className="m-1 p-1 text-xl text-center">Cart</p>
        <button className="px-2 rounded-lg bg-black text-white"  onClick={handlerClearCart}>ClearCart</button>
        </div>
        <div className="text-center "> {showItems.length===0 && <h1>Cart is empty Go and shop</h1>}</div>
        <div>
       
       <RestroListMenu Menudata={showItems}/>
        </div>
    </div>
}
export default Cart;
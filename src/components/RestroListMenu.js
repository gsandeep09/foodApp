import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestroListMenu = ({ Menudata }) => {
    console.log(Menudata);
    const dispatch=useDispatch();
    const handlerAddItem=(m)=>{
        dispatch(addItem(m));
        
        
    }

    return (
        <div>

            {
                Menudata.map((m) =>
                    <div  key={m?.card?.info?.id} className=" my-4 border-b-2 border-gray-300 flex justify-between">
                        <div className="w-9/12 mx-2">
                            <h3 className="font-bold text-green-800">{m?.card?.info?.name}</h3>
                            <h4 className="font-bold">₹ {m?.card?.info?.price / 100}</h4>
                            <p className="text-gray-800">{m?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 mb-2 relative  border border-black">
                       
                            
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + m?.card?.info?.imageId} />
                                <div className="absolute bottom-1 left-10 " >
                                <button className="py-1 px-4 rounded-lg bg-black text-white" onClick={()=>handlerAddItem(m)}>Add +</button>
                            </div>
                            
                            
                        </div>

                    </div>)
            }

        </div>
    )
}
export default RestroListMenu;
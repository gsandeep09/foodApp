import {useState} from "react";
import { useParams } from "react-router-dom";
import Shimar from "./Shimar";
import useRestroMenu from "./useRestroMenu";
import RestroInfoList from "./RestroInfoList";
const RestroInfo=()=>{

    // const [menuList,setMenuList]=useState([]);
    const {resId}=useParams();
    const menuList=useRestroMenu(resId);
    
    const [showIndex, setShowIndex] = useState(null);
    // useEffect(()=>{

    //     fetchData();
    // },[]);
    // const fetchData= async()=>{
    //     const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId);
    //     const json=await data.json();
    //     console.log(json);
        

        
    //     setMenuList(json);

        
    // }
   
    if(menuList.length===0){ return <Shimar/>;}
    console.log(menuList);
    const {name,cuisines,costForTwoMessage}=menuList?.data?.cards[2]?.card?.card?.info;
    
    const {itemCards}=menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //  console.log(itemCards);
    // console.log(menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const Categories=menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
       return c?.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    // console.log(Categories);
    
     
    return(
        <div className="restroInfo w-6/12 bg-gray-100 mx-auto">
           <div className="my-8 mx-4"> <h2 className="font-bold text-2xl" >{name}</h2>
            <p className="font-bold"><span>{cuisines.join(",")}</span> <span>-{costForTwoMessage}</span></p>
            </div>
            <div>
                //controlled one
                {
                    Categories.map((item,index)=>{
                        // console.log(item);
                       return <RestroInfoList key={item?.card?.card?.title} Listdata={item} showItems={index===showIndex?true:false} setShow={()=>setShowIndex(index)} />
     
                    })
                }
            </div>

        </div>
    )
}
export default RestroInfo;

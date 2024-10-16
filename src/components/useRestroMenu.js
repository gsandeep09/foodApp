import {useState,useEffect} from "react";
const useRestroMenu=(resId)=>{
    const [menuList,setMenuList]=useState([]);
    
    useEffect(()=>{

        fetchData();
    },[]);
    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId);
        const json=await data.json();
        console.log(json);
        

         
        setMenuList(json);

        
    }
    return menuList;
}
export default useRestroMenu;
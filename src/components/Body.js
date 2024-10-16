import useOnlineStatus from "../utils/useOnlineStatus";
import RestroCard,{WithPromotedRestroCard} from "./RestroCard";
import {useState,useEffect,useContext} from "react";
import Shimar from "./Shimar";
import { Link } from "react-router-dom";
import UseContext from "../utils/UseContext";


const Body=()=>{

    const [listOfRestro,setListOfRestro]=useState([]);
    const [filterOfRestro,setFilterOfRestro]=useState([]);
    const [isFiltered,setIsFiltered]=useState(false);
    const [searchText,setSearchText]=useState("");
    // let isFiltered="false";
    const PromotedRestroCard=WithPromotedRestroCard(RestroCard);
    const {loginUser,setUserName}=useContext(UseContext);

    useEffect(()=>{

        fetchData();

    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();
        console.log(json);
        setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        

    }
    // console.log(listOfRestro);
    // console.log(filterOfRestro);


   

    const OnlineStatus=useOnlineStatus();
    

    if(OnlineStatus===false){
       return( <h2>Check your internt connection</h2>)
    }
    if(listOfRestro.length===0){
        console.log(listOfRestro.length);
        return<Shimar/>
    }
return(
    <div className="body">
       <div className="mx-4">
        <input type="text" placeholder="Search here" className="border border-black" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);

        }}/>
        <button className="mx-4 px-2 border border-black bg-green-400" onClick={()=>{
            const searchFilter=filterOfRestro.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            
            })
            console.log(searchFilter);
            setListOfRestro(searchFilter);
        }} >Search</button>
        <button className="mx-4 px-2 border border-black bg-green-600" onClick={()=>{
          const filtered=filterOfRestro.filter((response)=>{return response.info.avgRating>=4.5});
         
          if(isFiltered===false){
          setListOfRestro(filtered);
          setIsFiltered(true);
        // isFiltered="true";
          }
          else{
            setListOfRestro(filterOfRestro);
            setIsFiltered(false);
            // isFiltered="false";
          }
                
        
            
        }}>Filter</button>
        <div>
            <label>User name </label>
            <input className=" my-2 border border-black" type="text" value={loginUser} onChange={(e)=>{
               
              return console.log(setUserName(e.target.value));
            }}/>
        </div>
       </div>
       
       <div className="flex flex-wrap m-4">
         { listOfRestro.map((restro)=>{
            return <Link key={restro?.info?.id } to={"/restro/"+ restro?.info?.id}>
              {(restro?.info?.id)?(<PromotedRestroCard resData={restro}/>):(<RestroCard resData={restro} />)}
              
              </Link>

          })}
       </div>
    </div>
)

    
}


export default Body;
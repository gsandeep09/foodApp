

const RestroCard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId="",avgRating,costForTwo,cuisines,name,sla }=resData?.info;
    return(
        <div className="restro_card m-4 hover:border h-[425px]  hover:border-black p-4 bg-gray-200 rounded-md w-[260px]">
            <img className="w-[220px] h-[220px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}alt="restro_img"/>
            <p className="font-bold my-2 ">{name}</p>
            <div className=" my-2  text-wrap overflow-auto">{cuisines.join(",")}</div>
            <p className="my-2"><span>{avgRating} stars</span> <span>{sla.deliveryTime} mins</span> <span>{costForTwo}</span></p>

        </div>


    )
}

 export const WithPromotedRestroCard=(RestroCard)=>{
    return(props)=>{
        return(
            <div>
            <label className="absolute bg-black text-white">Promoted</label>
            <RestroCard {...props}/>
            </div>
        )
    }

}
export default RestroCard;
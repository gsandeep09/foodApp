import RestroListMenu from "../components/RestroListMenu";
// import { useState } from "react";

const RestroInfoList = ({ Listdata,showItems,setShow }) => {
    console.log(Listdata);
   
    // const [showList,setShowList]=useState(false);

    const handler = () => {
//  setShowList(!showList);
    setShow();
    

    }

    return (
        <div>
            <div className="my-4 shadow-lg border-b-2 border-gray-300 mx-8">
                <div className="flex justify-between font-bold  cursor-pointer" onClick={handler} > 
                     <span>{Listdata?.card?.card?.title}-({Listdata?.card?.card?.itemCards.length})</span>
                    <span>🔻</span>
                </div>
                <div>
                    {showItems && <RestroListMenu Menudata={Listdata?.card?.card?.itemCards} />}

                </div>
            </div>


        </div>

    )

}

export default RestroInfoList;
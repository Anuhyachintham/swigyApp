import { useState,useEffect } from "react";
import ResturantCard from "./Resturant";



const Body=()=>{

    const [RestList,setRestlist]=useState([{
        info: {    
             id : "334475",
             name: "paradise",
             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 36,
             avgRating : "3.8"
         }
     },
     {
         info: {    
             id : "334476",
             name: "Eat panchavat",
             cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 20,
             avgRating : "4.3"
         }
     },
     {
         info: {    
             id : "334477",
             name: "Dominos",
             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 40,
             avgRating : "4.4"
         }
     },
     {
         info: {    
             id : "334478",
             name: "kritunga",
             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 40,
             avgRating : "3.9"
         }
     },
     {
         info: {    
             id : "334479",
             name: "Suprabhat",
             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 40,
             avgRating : "3.5"
         }
     }]);
     const [search,setSearch]=useState("");
     useEffect(()=>{
        const fetchData = async()=>{
            //doubt
            const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const res_data = await response.json();
            console.log(res_data);
            setRestlist(res_data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData()

     },[])

   const filteredData=()=>{
    const filData = RestList.filter(each=>each.info.avgRating>4.3);
    setRestlist(filData);

   }
     



    return(<div className="">
        <div>
        <button onClick={filteredData}>Top rated Resturant</button>
        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button>search</button>

        </div>
        

        <div className="Body">{
        RestList.map((each,index)=><ResturantCard key={index} res={each}/>)

}
        </div>
        
        
    
        
    </div>)
}

export default Body;
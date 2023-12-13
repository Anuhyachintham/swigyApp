import body from "./Body"

const ResturantCard=(props)=>{
    console.log(props.res.info);

   let image= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

    const {name,cloudinaryImageId,cuisines,costForTwo,deliveryTime,avgRating}=props.res.info
    

    

    return(
    <div className="Res-con">
        <img className="Rest-logo" src={image+cloudinaryImageId}/>
        
        <h1>{name}</h1>
        <h2>{cuisines[0]}</h2>
        <h3>{avgRating}</h3>
        <h4>{deliveryTime}</h4>
        <h5>{costForTwo}</h5>
    </div>)
}

export default ResturantCard
import React from "react";

//3rd method
export default function Card({title, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <div className="card--content">
            <div className="img--content">
                <img src={imageUrl}/>
            </div>
            <div className="card-detail">
                <div className="location--detail">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span> {title} </span>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <h5>{startDate} - {endDate}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

//2nd method
// export default function Card({item, title, googleMapsUrl, startDate, endDate, description, imageUrl}) {
//     return (
//         <div className="card--content">
//             <div className="img--content">
//                 <img src={item.imageUrl}/>
//             </div>
//             <div className="card-detail">
//                 <div className="location--detail">
//                     <i class="fa fa-map-marker" aria-hidden="true"></i>
//                     <span> {item.title} </span>
//                     <a href={item.googleMapsUrl}>View on Google Maps</a>
//                 </div>
//                 <h2>{item.title}</h2>
//                 <h5>{item.startDate} - {item.endDate}</h5>
//                 <p>{item.description}</p>
//             </div>
//         </div>
//     )
// }

//1st method
// export default function Card(item) {
//     return (
//         <div className="card--content">
//             <div className="img--content">
//                 <img src={item.img}/>
//             </div>
//             <div className="card-detail">
//                 <div className="location--detail">
//                     <i class="fa fa-map-marker" aria-hidden="true"></i>
//                     <span> {item.title} </span>
//                     <a href={item.googleMapsUrl}>View on Google Maps</a>
//                 </div>
//                 <h2>{item.title}</h2>
//                 <h5>{item.startDate} - {item.endDate}</h5>
//                 <p>{item.description}</p>
//             </div>
//         </div>
//     )
// }
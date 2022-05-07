const TicketsHeroItem = ({image, ticket, update,userName, last, lastDate, hour, btnClass, btnText})=>{
    return(
        <>
           <li className="tickets__hero__item">
            <img src={image} alt="user img"/>
             <h4>{ticket}   <time>{update}</time></h4>
             <h4>{userName} <time>{last}</time></h4>
             <h4>{lastDate} <time>{hour}</time></h4>
             <button className={btnClass}>{btnText}</button>
             <span className="more__info"></span>
        </li>
        </>
    )
}

export default TicketsHeroItem;
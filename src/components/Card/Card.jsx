import CardImage from '/public/Katalog/card.png'
import BagImage from '/public/Katalog/bag.png'
import LikeImage from '/public/Katalog/like.png'
import {Link} from 'react-router-dom'

export default function Card({name, price, id}){
    return(
        <div className="card">
            <img src={CardImage} alt="" className="" />
            <p className="name">{name}</p>
             <div className="price-icons">
                <p className="price">{price} ₽</p>
                <div className="icons">
                    <img src={LikeImage} alt="" className="" />
                    <img src={BagImage} alt="" className="" />                       
                </div>
            </div>
            <Link to={`${id}`} className="to-bag">Подробнее</Link>
        </div>
    )
}
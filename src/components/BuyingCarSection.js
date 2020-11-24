import React, {useState} from "react";
import Pic1 from "../images/buy-1.webp"
import Pic2 from "../images/buy-2.webp"
import Pic3 from "../images/buy-3.webp"


export const BuyingCarSection = (props) => {
    const [buyingCarItems, setBuyingCarItems] = useState([
        {
            title: 'Без юридических проблем',
            miniDesc: 'от 2005 года выпуска',
            img: Pic1
        },
        {
            title: 'С ограничениями',
            miniDesc: 'с повреждениями и после ДТП',
            img: Pic2
        },
        {
            title: 'Лизинг/Кредит',
            miniDesc: 'не на ходу в связи с поломкой',
            img: Pic3
        }
    ]);

    return (
        <section className="buy-car-section section-ind">
            <div className="container">
                <h2 className="page-title page-title--center page-title--dark-color">
                    Какие авто <br/> мы выкупаем?
                </h2>
            </div>

            <div className="buy-car-list">
                {
                    buyingCarItems.map((item, i) => {
                        return (
                            <div className={`buy-car-list__col buy-car-list__col-${i + 1}`} key={i}>
                                <div className="buy-car">
                                    <img className="buy-car__img" src={item.img} alt={item.title}/>
                                    <div className="buy-car__wrap"/>
                                    <div className="buy-car__cont">
                                        <h3 className="buy-car__title">{item.title}</h3>
                                        <div className="buy-car__mini-desc">({item.miniDesc})</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
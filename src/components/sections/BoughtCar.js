import React, {useState, useRef} from "react";
import {Carousel} from "../common/Carousel";
import Auto1 from "../../images/auto-1.webp";
import Auto2 from "../../images/auto-2.webp";
import Auto3 from "../../images/auto-3.webp";
import Auto4 from "../../images/auto-4.webp";
import Auto5 from "../../images/auto-5.webp";
import Auto6 from "../../images/auto-6.webp";

export const BoughtCar = (props) => {
    let flkty = useRef(null);

    const [cars, setCars] = useState([
        {
            model: 'Opel Mokka I',
            img: Auto1,
            price: 849000,
            year: 2013,
            run: 80400
        },
        {
            model: 'Audi Q5 I (8R)',
            img: Auto2,
            price: 750000,
            year: 2010,
            run: 142200
        },
        {
            model: 'Volvo XC70 II',
            img: Auto3,
            price: 1560000,
            year: 2013,
            run: 148183
        },
        {
            model: 'Citroen C4 Aircross',
            img: Auto4,
            price: 780000,
            year: 2014,
            run: 73000
        },
        {
            model: 'Kia Optima IV Рестайлинг',
            img: Auto5,
            price: 1599000,
            year: 2019,
            run: 3788
        },
        {
            model: 'Kia Rio IV',
            img: Auto6,
            price: 720000,
            year: 2018,
            run: 47800
        }
    ])

    return (
        <section className="bought-car-section section-ind">
            <div className="container">
                <h2 className="page-title page-title--center page-title--dark-color">
                    Выкупленные <br/> автомобили
                </h2>

                <Carousel className="carousel-cars" flickityRef={(crs) => {flkty = crs}}>
                    {
                        cars.map(
                            (item, i) => {
                                return (
                                    <div className="carousel-cars__sell carousel-cell" key={i}>
                                        <div className="car">
                                            <img className="car__img" src={item.img} alt=""/>
                                            <div className="car__cont">
                                                <h3 className="car__model">{item.model}</h3>
                                                <div className="car__price">
                                                    <span className="car__title">Выкуплен за:</span>&nbsp;
                                                    <span className="car__currency">{item.price.toLocaleString('ru-RU')}</span>&nbsp;
                                                    <span className="car__ruble">₽</span>
                                                </div>
                                                <div className="car__year">
                                                    <span className="car__title">Год выпуска:</span> {item.year}
                                                </div>
                                                <div className="car__run">
                                                    <span className="car__title">Пробег:</span> {item.run.toLocaleString()} км
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </Carousel>

            </div>

            <div className="line-top"/>
            <div className="line-bottom"/>
        </section>
    )
}
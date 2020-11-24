import React, {useState} from "react";
import {Buttons} from "../common/Buttons";

export const SaleProcess = (props) => {
    const [saleProcessItems, setSaleProcessItems] = useState([
        {
            title: 'Звоните, или отправьте',
            desc: 'Звоните +7 (968) 8-736-736 отправьте фото/видео в WhatsApp или Telegram',
            icon: 'sale-1-icon'
        },
        {
            title: 'Выезд эксперта',
            desc: 'Приезжайте на осмотр, или договоритесь об осмотре на месте',
            icon: 'sale-2-icon'
        },
        {
            title: 'Выплата наличных',
            desc: 'Расчет в удобной форме: наличные, передача и проверка в вашем банке, банковский перевод',
            icon: 'sale-3-icon'
        },
        {
            title: 'Совершение сделки',
            desc: 'Мы подготовим все документы, включая договор купли-продажи. Все расходы по подготовке сделки берем на себя',
            icon: 'sale-4-icon'
        }
    ]);

    return (
        <section className="sale-process-section section-ind">
            <div className="container">
                <h2 className="page-title page-title--dark-color page-title--center">
                    Как происходит <br/> процесс продажи
                </h2>

                <Buttons className="banner-btns--center"/>

                <div className="sale-list">
                    {
                        saleProcessItems.map((item, i) => {
                            return (
                                <div className="sale-list__item" key={i}>
                                    <div className="sale-item">
                                        <div className="sale-item__num">{i + 1}</div>
                                        <h3 className="sale-item__title">{item.title}</h3>
                                        <div className="sale-item__desc">{item.desc}</div>
                                        <i className={`sale-item__icon ${item.icon}`}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
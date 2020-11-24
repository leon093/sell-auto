import React from "react";
import WhatsappImg from "../../images/whatsapp.webp"
import {Buttons} from "../common/Buttons";


export const WhatsappSection = (props) => {
    return (
        <section className="whatsapp-section section-ind">
            <div className="container">
                <div className="whatsapp-b">
                    <div className="whatsapp-b__col-1">
                        <img className="whatsapp__img" src={WhatsappImg} alt="Whatsapp"/>
                    </div>

                    <div className="whatsapp-b__col-2">
                        <h2 className="page-title page-title--dark-color">
                            Узнайте стоимость <br/> авто прислав фото
                        </h2>

                        <div className="page-desc">
                            <div className="page-sub-title">Быстро. Просто. Удобно</div>
                            Пришлите фотографии и детальное описание Вашего авто в WhatsApp и получите оценку онлайн.
                            Далее, обговорите детали и место встречи с нашими выездными специалистами.
                        </div>

                        <Buttons />
                    </div>
                </div>
            </div>
        </section>
    )
}
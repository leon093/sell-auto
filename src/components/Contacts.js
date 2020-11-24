import React from "react";
import {ContactForm} from "./contacts/ContactsForm";

export const Contacts = (props) => {
    return (
        <section className="contacts-section">
            <div className="container">
                <h2 className="page-title page-title--center">
                    Контакты
                </h2>

                <div className="contacts-block">
                    <div className="contacts-block__col-1">
                        <div className="contacts-info">
                            <div className="contacts-info__item">
                                <a className="tel" href="tel:+79688736736" title="Позвонить">
                                    +7 (968) <span className="tel__big">8-736-736</span>
                                </a>
                            </div>

                            <div className="contacts-info__item">
                                <a className="email" title="Написать"
                                   href="mailto:info@autosell.ru">info@sell-auto.ru</a>
                            </div>

                            <div className="contacts-info__item">
                                <div className="address">
                                    Королёв, Станционная<br/> площадь, д.25
                                </div>
                            </div>

                            <div className="contacts-info__item">
                                <div className="contacts-region">
                                    Работаем по Москве и<br/> Московской области
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contacts-block__col-2">
                       <ContactForm />
                    </div>
                </div>
            </div>

            <div className="line-top"/>
            <div className="line-bottom"/>
        </section>
    )
}
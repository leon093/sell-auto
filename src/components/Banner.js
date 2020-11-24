import React, {useState} from "react";
import {Parallax} from "react-parallax";
import BannerBg from "../images/banner.webp"
import {Buttons} from "./common/Buttons";
import {motion} from "framer-motion";

export const Banner = (props) => {
    const animInitial = {x: -100, opacity: 0};
    const animAnimate = {x: 0, opacity: 1};
    const animTransition = {
        delay: 0,
        type: 'spring',
        stiffness: 300,
        damping: 24
    }

    const [bannerListItems, setBannerListItems] = useState([
        {
            title: 'Деньги в день обращения',
            animInitial: animInitial,
            animAnimate: animAnimate,
            animTransition: {type: 'spring', stiffness: 300, damping: 24, delay: 0.2}

        },
        {
            title: 'До 90% рыночной стоимости',
            animInitial: animInitial,
            animAnimate: animAnimate,
            animTransition: {...animTransition, delay: 0.4}
        },
        {
            title: 'Выезд по Москве и МО бесплатный, после онлайн оценки',
            animInitial: animInitial,
            animAnimate: animAnimate,
            animTransition: {...animTransition, delay: 0.6}
        },
        {
            title: 'Оформление за нас счёт',
            animInitial: animInitial,
            animAnimate: animAnimate,
            animTransition: {...animTransition, delay: 0.8}
        },
        {
            title: 'Гарантия юридической чистоты',
            animInitial: animInitial,
            animAnimate: animAnimate,
            animTransition: {...animTransition, delay: 1}
        }
    ]);

    return (
        <Parallax bgImage={BannerBg} strength='200' blur={{min: -15, max: 15}} bgClassName="banner">
            <header className="header">
                <div className="container">
                    <div className="header__cont">
                        <div className="header__cont-col-1">
                            <h1 className="header__logo logo">
                                <span className="logo__sell">Sell</span>
                                <span className="logo__auto">
                                    -Авт <i className="logo__icon tire-icon"/>
                                </span>
                            </h1>
                        </div>

                        <div className="header__cont-col-2">
                            <div className="header__tel">
                                <a className="header__tel-link tel" href="tel:+79688736736">
                                    +7 (968) <span className="tel__big">8-736-736</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="banner__wrap"/>

            <div className="banner-cont-wrap">
                <div className="container">
                    <div className="banner-cont">
                        <div className="banner-cont__desc">

                            <div className="banner-cont__desc-col-1">
                                <motion.h1
                                    initial={animInitial}
                                    animate={animAnimate}
                                    transition={animTransition}
                                    className="banner-cont__title page-title">
                                    Срочный выкуп автомобиля за час
                                </motion.h1>
                            </div>

                            <div className="banner-cont__desc-col-2">
                                <ul className="banner-list">
                                    {
                                        bannerListItems.map((item, i) => {
                                            return (
                                                <motion.li
                                                    key={i}
                                                    initial={item.animInitial}
                                                    animate={item.animAnimate}
                                                    transition={item.animTransition}
                                                    className="banner-list__item">
                                                    {item.title}
                                                </motion.li>
                                            )
                                        })
                                    }
                                </ul>

                                <Buttons/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner__line-top"/>
            <div className="banner__line-bottom"/>
        </Parallax>
    )
}
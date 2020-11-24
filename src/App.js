import React, {useRef, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import {Banner} from "./components/Banner";

import './scss/app.scss';
import {WhatsappSection} from "./components/WhatsappSection";
import {BuyingCarSection} from "./components/BuyingCarSection";
import {SaleProcess} from "./components/SaleProcess";
import {BoughtCar} from "./components/BoughtCar";
import {Faq} from "./components/Faq";
import {Contacts} from "./components/Contacts";
import {PopupOrder} from "./components/popups/PopupOrder";
import Emitter from "./components/common/EventEmitter";

function App() {
    let popupOrderRef = useRef(null);

    useEffect(() => {
        Emitter.on('onOrder', () => {
            popupOrderRef.openPopup()
        });

        Emitter.on('onClosePopupContacts', () => {
            popupOrderRef.closePopup();
        })

        return () => {
            Emitter.off('onOrder');
            Emitter.off('onClosePopupContacts');
        }
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Banner/>
                <WhatsappSection/>
                <BuyingCarSection/>
                <SaleProcess/>
                <BoughtCar/>
                <Faq/>
                <Contacts/>
                <PopupOrder refPopup={(el) => {popupOrderRef = el}}/>
            </div>
        </BrowserRouter>
    );
}

export default App;

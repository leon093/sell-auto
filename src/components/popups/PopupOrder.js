import React from "react";
import {Popup} from "../common/Popup";
import {ContactForm} from "../contacts/ContactsForm";

export const PopupOrder = (props) => {
    return(
        <Popup classPopup="popup-order" ref={props.refPopup}>
            <h2 className="page-title">
                Заявка на оценку
            </h2>

            <ContactForm />
        </Popup>
    )
}
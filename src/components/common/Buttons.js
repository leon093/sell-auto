import React from "react";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import Emitter from "./EventEmitter";

export const Buttons = (props) => {
    return (
        <motion.div
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
                delay: 1.2,
                type: 'spring',
                stiffness: 250,
                damping: 35
            }}
            className={`banner-btns ${props.className}`}>
            <div className="banner-btns__col-1">
                <a className="btn btn--green"
                   href="https://wa.me/79688736736?text=Заявка%20на%20оценку">
                    Оценка в whatsapp
                </a>
            </div>

            <div className="banner-btns__col-2">
                <button className="btn btn--bg-full" onClick={() => Emitter.emit('onOrder')}>
                    Заявка на оценку
                </button>
            </div>
        </motion.div>
    )
}

Buttons.propTypes = {
    className: PropTypes.string
}

Buttons.defaultProps = {
    className: ''
}
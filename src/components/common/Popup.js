import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import ReactDOM from 'react-dom';

export const Popup = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            openPopup: () => open(),
            closePopup: () => close()
        }
    })

    const open = () => {
        setIsOpen(true)
        document.body.classList.add('scroll-hide')
    }

    const close = () => {
        setIsOpen(false)
        document.body.classList.remove('scroll-hide')
    }

    const keyEsc = useCallback((e) => {
        if (e.key === "Escape") {
            close()
        }
    }, []);

    const clickBackdrop = (e) => {
        if (e.target && e.target.className === 'popup__cont') {
            close()
        }
    }

    // componentDidMount
    useEffect(() => {
        window.addEventListener("keydown", keyEsc);

        // componentWillUnmount
        return () => {
            window.removeEventListener("keydown", keyEsc);
        }
    }, [keyEsc])

    const {classPopup, children} = props;

    return (
        ReactDOM.createPortal(
            <AnimatePresence>
                {
                    (isOpen) &&
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="popup"
                        onClick={clickBackdrop}
                        onKeyPress={keyEsc}>

                        <div className="popup__cont">
                            <motion.div
                                initial={{x: -300}}
                                animate={{x: 0}}
                                exit={{x: 0}}
                                transition={{ type: "spring", stiffness: 100 }}
                                className={`popup__wrap ${classPopup}`}>

                                <button className="popup__btn-close" onClick={close}>
                                    <i className="popup__close-icon close-icon"/>
                                </button>
                                {children}
                            </motion.div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            , document.getElementById('popup-root'))
    )
})

Popup.displayName = 'Popup';

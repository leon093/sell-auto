import React, {useState} from "react";
import PropTypes from "prop-types";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";

export const FaqItem = (props) => {
    const [isShowAnswer, setIsShowAnswer] = useState(false);
    const animTransition = {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        duration: 5
    }

    return (
        <AnimateSharedLayout>
            <div className="faq-item" onClick={() => setIsShowAnswer(!isShowAnswer)}>
                <motion.div className="faq-item__question" layout>
                    <div className="faq-item__question-col-1">
                        <h3 className="faq-item__title">
                            {props.data.question}
                        </h3>
                    </div>

                    <div className="faq-item__question-col-2">
                        <button className="faq-item__btn btn-def">
                            <i className={`faq-item__icon down-arrow-icon ${isShowAnswer ? 'down-arrow-icon--rotate' : ''}`}/>
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {
                        isShowAnswer &&
                        <motion.div
                            style={{overflow: "hidden"}}
                            initial={{height: 0, opacity: 0}}
                            animate={{height: 'auto', opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={animTransition}
                            className="faq-item__answer"
                            dangerouslySetInnerHTML={{__html: props.data.answer}}
                        />
                    }
                </AnimatePresence>

            </div>
        </AnimateSharedLayout>
    )
}

FaqItem.propTypes = {
    data: PropTypes.object.isRequired
}
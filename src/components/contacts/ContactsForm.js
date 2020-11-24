import React, {useState, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Emitter from "../common/EventEmitter";
import InputMask from 'react-input-mask'

export const ContactForm = () => {
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');
    const [file, setFile] = useState();
    const [tel, setTel] = useState('');
    const [name, setName] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [isStatusDone, setIsStatusDone] = useState(false);

    let fileRef = useRef(null);


    // Отправка данных на сервер
    function send(event) {
        setIsLoading(true);
        console.log("Отправка запроса");
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        const req = new XMLHttpRequest();
        req.open('POST', 'send.php', true);
        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                let json = JSON.parse(this.response); // Ебанный internet explorer 11
                console.log(json);

                // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
                if (json.result == "success") {
                    // Если сообщение отправлено
                    setIsLoading(false);
                    setIsStatusDone(true);

                    setModel('');
                    setYear('');
                    setMileage('');
                    setFile(null);
                    setTel('');
                    setName('');
                    setStatusText('Сообщение отправлено');

                    setTimeout(() => {
                        Emitter.emit('onClosePopupContacts');
                    }, 1000);
                } else {
                    // Если произошла ошибка
                    setIsLoading(false);
                    setIsStatusDone(false);
                    setStatusText('Ошибка. Сообщение не отправлено');
                }
                // Если не удалось связаться с php файлом
            } else {
                setIsLoading(false);
                setIsStatusDone(false);
                setStatusText(`Ошибка сервера. Номер: ${req.status}`);
            }
        };

        // Если не удалось отправить запрос. Стоит блок на хостинге
        req.onerror = function () {
            alert("Ошибка отправки запроса");
        };
        req.send(new FormData(event.target));
    }

    const handleUpload = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <>
            <form className="contacts-form"
                  encType="multipart/form-data"
                  method="post"
                  id="form"
                  onSubmit={send}>

                <div className="contacts-form__item">
                    <input
                        name="model"
                        className="inp"
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Марка, модель авто"
                    />
                </div>

                <div className="contacts-form__item">
                    {/*<input
                        name="year"
                        className="inp"
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Год выпуска"
                    />*/}

                    <InputMask
                        type="tel"
                        onChange={(e) => setYear(e.target.value)}
                        mask="9999"
                        name="year"
                        value={year}
                        placeholder="Год выпуска"
                        className="inp"
                    />
                </div>

                <div className="contacts-form__item">
                    <input
                        name="mileage"
                        className="inp"
                        type="number"
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                        placeholder="Пробег, км"
                    />
                </div>

                <div className="contacts-form__item">
                    <input
                        name="file[]"
                        id="myfile"
                        type="file"
                        ref={(el) => {
                            fileRef = el
                        }}
                        onChange={handleUpload}
                    />
                </div>

                <div className="contacts-form__item">
                    <AnimatePresence>
                        {
                            file &&
                            <motion.img
                                initial={{opacity: 0, y: -30}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0}}
                                className="contacts-form__thumbnail"
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                            />
                        }
                    </AnimatePresence>
                </div>

                <div className="contacts-form__item">
                    {/*<input
                        name="tel"
                        className="inp"
                        type="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder="Телефон"
                    />*/}

                    <InputMask
                        type="tel"
                        onChange={(e) => setTel(e.target.value)}
                        mask="+7 (999) 999-99-99"
                        name="tel"
                        value={tel}
                        required
                        placeholder="Телефон"
                        className="inp"
                    />
                </div>

                <div className="contacts-form__item">
                    <input
                        name="name"
                        className="inp"
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="contacts-form__item">
                    <input className="btn btn--bg-full" type="submit" value="Отправить"/>
                </div>
            </form>

            <AnimatePresence>
                {
                    statusText &&
                    <motion.div
                        initial={{opacity: 0, y: -30}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0}}
                        className={`contacts-status ${isStatusDone ? 'done' : 'error'}`}>

                        {statusText}
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence>
                {
                    isLoading &&
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="loading">

                        <motion.i
                            initial={{opacity: 0, y: -30}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0}}
                            className="loading__icon tire-icon"
                        />
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
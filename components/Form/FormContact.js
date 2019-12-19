import React from "react";
import { FormStyle } from "./FormStyle";

import { withTranslation } from '../../i18n'
import { Formik } from 'formik';

import Error from "../../styles/fontsStyles/error"

import Button from "../Button/Button"

const FormContact = props => {
    const { t } = props;

    const handleResponse = (status) => {
        if (status === 200) {
            //reset input and show ok status
        } else {
            //show errors
        }
    }

    return (
        <FormStyle>
            <Formik
                initialValues={{ email: '', name: '', phone: '', comentarios: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Información necesaria';
                        errors.name = 'Necesitamos tu nombre para dirigirnos a tí';
                        errors.phone = 'Necesitamos tu teléfono para poderte llamar';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    fetch("/contacto", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(values)
                    })
                        .then(res => handleResponse(res.status))
                        .catch(err => {
                            console.log("Error while uploading the file: ", err);
                        });
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form>
                            <div data-aos="fade-in">
                                <div className="error">
                                    <input
                                        placeholder={t("nameSurname")}
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <Error>{errors.name && touched.name && errors.name}</Error>
                                </div>
                            </div>

                            <div data-aos="fade-in">
                                <div className="error">
                                    <input
                                        placeholder={t("email")}
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <Error>{errors.email && touched.email && errors.email}</Error>
                                </div>
                                <div className="error">
                                    <input
                                        placeholder={t("phone")}
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                    />
                                    <Error>{errors.phone && touched.phone && errors.phone}</Error>
                                </div>
                            </div>
                            <div className="error">
                                <textarea
                                    data-aos="fade-in"
                                    placeholder={t("contactWrite")}
                                    name="comentarios"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comentarios}
                                />
                            </div>

                            <Button content={t("button")} type="submit" method={handleSubmit} />

                        </form>
                    )}
            </Formik>
        </FormStyle>
    )

}

export default withTranslation("contact")(FormContact);
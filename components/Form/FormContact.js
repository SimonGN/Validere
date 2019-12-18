import React from "react";
import { FormStyle } from "./FormStyle";

import { withTranslation } from '../../i18n'
import { Formik } from 'formik';

import Button from "../Button/Button"

const FormContact = props => {
    const { t } = props;

    return (
        <FormStyle>
            <Formik
                initialValues={{ email: '', name: '', phone: '', comentarios: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
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
                        .then(res => res.json())
                        .then(data => {
                        })
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
                                <input
                                    placeholder={t("nameSurname")}
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>

                            <div data-aos="fade-in">
                                <input
                                    placeholder={t("email")}
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <input
                                    placeholder={t("phone")}
                                    type="text"
                                    name="phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                            </div>
                            <textarea
                                data-aos="fade-in"
                                placeholder={t("contactWrite")}
                                name="comentarios"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comentarios} />


                            <Button content={t("button")} type="submit" method={handleSubmit} />

                        </form>
                    )}
            </Formik>
        </FormStyle>
    )

}

export default withTranslation("contact")(FormContact);
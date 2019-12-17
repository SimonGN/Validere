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
                initialValues={{ email: '', password: '', }}
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
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                        <form onSubmit={handleSubmit}>
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
                                name="comentarios"
                                rows="10" cols="40">
                                {t("contactWrite")}
                            </textarea>



                            <Button content={t("button")} />

                        </form>
                    )}
            </Formik>
        </FormStyle>
    )

}

export default withTranslation("contact")(FormContact);
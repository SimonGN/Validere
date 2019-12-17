import React from "react";
import { FormStyle } from "./FormStyle";



import { withTranslation } from '../../i18n'
import { Formik } from 'formik';

import Button from "../Button/Button"

const FormValidate = props => {
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
                            <div data-aos="fade-in">
                                <input
                                    placeholder={t("country")}
                                    type="text"
                                    name="country"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.country}
                                />
                                <input
                                    placeholder={t("university")}
                                    type="text"
                                    name="university"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.university}
                                />
                            </div>
                            <div data-aos="fade-in">
                                <select>
                                    <option>{t("selectUniversity0")}</option>
                                    <option>{t("selectUniversity1")}</option>
                                    <option>{t("selectUniversity2")}</option>
                                    <option>{t("selectUniversity3")}</option>
                                </select>
                                <input
                                    placeholder={t("nameUniversity")}
                                    type="text"
                                    name="nameUniversity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nameUniversity}
                                />
                            </div>
                            <div data-aos="fade-in">
                                <select>
                                    <option>{t("nameUniversity")}</option>
                                    <option>{t("selectTime0")}</option>
                                    <option>{t("selectTime1")}</option>
                                    <option>{t("selectTime2")}</option>
                                </select>
                                <input
                                    placeholder={t("level")}
                                    type="text"
                                    name="level"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.level}
                                />
                            </div>
                            <Button content={t("button")} />

                        </form>
                    )}
            </Formik>
        </FormStyle>
    )

}

export default withTranslation("validate")(FormValidate);
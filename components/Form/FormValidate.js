import React from "react";
import { FormStyle } from "./FormStyle";



import { withTranslation } from '../../i18n'
import { Formik } from 'formik';

import Button from "../Button/Button"

const FormValidate = props => {
    const { t } = props;

    const handleResponse = (status) => {
        if(status === 200) {
            //reset input and show ok status
        } else {
            //show errors
        }
    }
    
    return (
        <FormStyle>
            <Formik
                initialValues={{ email: '', name: '', phone: '', country: '', university: '', nameUniversity: '', level: '', degreeType: `${t("selectUniversity1")}`, degreeTime: `${t("selectTime0")}`}}
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
                    fetch("/validate", {
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
                                <select 
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.degreeType}
                                 name="degreeType"
                                >                
                                    <option value={t("selectUniversity1")}>{t("selectUniversity1")}</option>
                                    <option value={t("selectUniversity2")}>{t("selectUniversity2")}</option>
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
                                <select
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.degreeTime}
                                name="degreeTime"
                                >                        
                                    <option value={t("selectTime0")}>{t("selectTime0")}</option>
                                    <option value={t("selectTime1")}>{t("selectTime1")}</option>
                                    <option value={t("selectTime2")}>{t("selectTime2")}</option>
                                    <option value={t("selectTime3")}>{t("selectTime3")}</option>
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
                            <Button content={t("button")} method={handleSubmit}/>

                        </form>
                    )}
            </Formik>
        </FormStyle>
    )

}

export default withTranslation("validate")(FormValidate);
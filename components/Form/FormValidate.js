import React, { useState } from "react";
import { FormStyle } from "./FormStyle";

import Error from "../../styles/fontsStyles/error"

import { withTranslation } from '../../i18n'
import { Formik } from 'formik';

import Button from "../Button/Button"

const FormValidate = props => {
    const { t, send, error, loading } = props;
    const [state, setState] = useState({ send: false, error: false })

    const handleResponse = (status) => {
        if (status === 200) {
            setState({ ...state, send: true })
        } else {
            setState({ ...state, error: true })
        }
    }


    return (
        <FormStyle>
            <Formik
                initialValues={{ email: '', name: '', phone: '', country: '', university: '', nameUniversity: '', level: '', degreeType: `${t("selectUniversity1")}`, degreeTime: `${t("selectTime0")}` }}

                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Necesitamos tu email para ponernos en contacto contigo';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Tu email no es correcto';
                    }
                    if (!values.name) {
                        errors.name = 'Información necesaria';
                    }
                    if (!values.phone) {
                        errors.phone = 'Información necesaria';
                    }
                    if (!values.country) {
                        errors.country = 'Información necesaria';
                    }
                    if (!values.university) {
                        errors.university = 'Información necesaria';
                    }
                    if (!values.nameUniversity) {
                        errors.nameUniversity = 'Información necesaria';
                    }
                    if (!values.level) {
                        errors.level = 'Información necesaria';
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
                        <form onSubmit={handleSubmit}>
                            <div data-aos="fade-in">
                                <div className="error">
                                    <input
                                        placeholder={t("nameSurname")}
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        required
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
                                        required
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
                                        required
                                    />
                                    <Error>{errors.phone && touched.phone && errors.phone}</Error>
                                </div>

                            </div>
                            <div data-aos="fade-in">
                                <div className="error">
                                    <input
                                        placeholder={t("country")}
                                        type="text"
                                        name="country"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.country}
                                        required
                                    />
                                    <Error>{errors.country && touched.country && errors.country}</Error>
                                </div>
                                <div className="error">
                                    <input
                                        placeholder={t("university")}
                                        type="text"
                                        name="university"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.university}
                                        required
                                    />
                                    <Error>{errors.university && touched.university && errors.university}</Error>
                                </div>
                            </div>
                            <div data-aos="fade-in">
                                <div className="error">
                                    <select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.degreeType}
                                        name="degreeType"
                                        required
                                    >
                                        <option value={t("selectUniversity1")}>{t("selectUniversity1")}</option>
                                        <option value={t("selectUniversity2")}>{t("selectUniversity2")}</option>
                                    </select>
                                </div>
                                <div className="error">
                                    <input
                                        placeholder={t("nameUniversity")}
                                        type="text"
                                        name="nameUniversity"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nameUniversity}
                                        required
                                    />
                                    <Error>{errors.nameUniversity && touched.nameUniversity && errors.nameUniversity}</Error>
                                </div>
                            </div>

                            <div data-aos="fade-in">
                                <div className="error">
                                    <select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.degreeTime}
                                        name="degreeTime"
                                        required
                                    >
                                        <option value={t("selectTime0")}>{t("selectTime0")}</option>
                                        <option value={t("selectTime1")}>{t("selectTime1")}</option>
                                        <option value={t("selectTime2")}>{t("selectTime2")}</option>
                                        <option value={t("selectTime3")}>{t("selectTime3")}</option>
                                    </select>
                                </div>
                                <div className="error">
                                    <input
                                        placeholder={t("level")}
                                        type="text"
                                        name="level"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.level}
                                        required
                                    />
                                    <Error>{errors.level && touched.level && errors.level}</Error>
                                </div>
                            </div>
                            {!state.send && !error && !loading && (
                                <Button
                                    type="submit"
                                    className="send-button"
                                    content={t("button")}
                                >

                                </Button>
                            )}
                            {loading && (
                                <Button
                                    type="submit"
                                    className="send-button"
                                    disabled={true}
                                >
                                    Cargando...
                    </Button>
                            )}
                            {state.send && (
                                <Button className="success-button" content={"Solicitud enviada"} disabled={true}>             
                    </Button>
                            )}

                            {error && (
                                <Button className="error-button" content={"Se ha producido un error"}disabled={true}>
                    </Button>
                            )}

                        </form>
                    )}
            </Formik>
        </FormStyle >
    )

}

export default withTranslation("validate")(FormValidate);
import React from "react";
import { FormStyle } from "./FormStyle";

import Error from "../../styles/fontsStyles/error"

import { withTranslation } from '../../i18n'
import { Formik } from 'formik';

import Button from "../Button/Button"

const FormValidate = props => {
    const { t } = props;

    // const handleResponse = (status) => {
    //     if (status === 200) {
    //         this.setState({ ...this.state, send: true, loading: false }, () => {
    //             setTimeout(() => {
    //                 this.resetForm();
    //             }, 2000);
    //         });
    //     } else {
    //         this.setState({ ...this.state, error: true, loading: false }, () => {
    //             setTimeout(() => {
    //                 this.resetForm(true);
    //             }, 2000);
    //         });
    //     }
    // };
    // resetForm = (error = false) => {
    //     const data = {
    //         email: "",
    //         name: "",
    //         phone: "",
    //         country: "",
    //         university: "",
    //         nameUniversity: "",
    //         level: ""
    //     };
    //     const errors = {
    //         email: true,
    //         name: true,
    //         phone: true,
    //         country: true,
    //         university: true,
    //         nameUniversity: true,
    //         level: true
    //     };
    //     if (!error) {
    //         this.setState({ ...this.state, send: true, check: false, data, errors });
    //     } else {
    //         this.setState({ ...this.state, error: true, check: false, data, errors });
    //     }
    // };


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
                            <div data-aos="fade-in">
                                <div className="error">
                                    <input
                                        placeholder={t("country")}
                                        type="text"
                                        name="country"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.country}
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
                                    />
                                    <Error>{errors.level && touched.level && errors.level}</Error>
                                </div>
                            </div>
                            {!send && !error && !loading && (
                                <Button
                                    type="submit"
                                    className="send-button"
                                    content={t("button")}
                                    disabled={this.controlForm()}
                                >
                                    Enviar
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
                            {send && (
                                <Button className="success-button" disabled={true}>
                                    Solicitud enviada
                    </Button>
                            )}

                            {error && (
                                <Button className="error-button" disabled={true}>
                                    Se ha producido un error
                    </Button>
                            )}


                            {/* <Button content={t("button")} method={handleSubmit} disabled={isSubmitting} /> */}

                        </form>
                    )}
            </Formik>
        </FormStyle >
    )

}

export default withTranslation("validate")(FormValidate);
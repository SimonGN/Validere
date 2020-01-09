import React, { useState } from "react";
import { FormStyle } from "./FormStyle";

import { withTranslation } from '../../i18n'
import { Formik } from 'formik';

import Error from "../../styles/fontsStyles/error"

import Button from "../Button/Button"

const FormContact = props => {
    const { t } = props;
    const [state, setState] = useState({ send: false, error: false, loading: false })


    const handleResponse = (status) => {
        if (status === 200) {
            setState({ ...state, send: true, loading: false });
        } else {
            setState({ ...state, error: true, loading: false });
        }
    }

    const { send, error, loading } = state;
    return (
        <FormStyle>
            <Formik
                initialValues={{ email: '', name: '', phone: '', comentarios: '' }}
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

                    return errors;
                }}
                onSubmit={(values) => {
                    setState({ ...state, loading: true});
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
                        <form onSubmit={handleSubmit}>
                            <div data-aos="fade-in">
                                <div className="error">
                                    <input
                                        placeholder={t("contactName")}
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

                            <div>
                                <div className="error">
                                    <input
                                        placeholder={t("contactEmail")}
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
                                        placeholder={t("contactPhone")}
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
                            <div className="error">
                                <textarea
                                
                                    placeholder={t("contactWrite")}
                                    name="comentarios"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comentarios}
                                    required
                                />
                                <Error>{errors.comentarios && touched.comentarios && errors.comentarios}</Error>
                            </div>
                            {!send && !error && !loading && (
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
                                    content={"Cargando..."}
                                />
                            )}
                            {send && (
                                <Button className="success-button" content={"Solicitud enviada"} disabled={true}>Solicitud enviada</Button>
                            )}

                            {error && (
                                <Button className="error-button" content={"Se ha producido un error"} disabled={true}></Button>
                            )}
                        </form>
                    )}
            </Formik>
        </FormStyle>
    )

}

export default withTranslation("contact")(FormContact);
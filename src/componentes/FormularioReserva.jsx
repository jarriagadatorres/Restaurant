import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

const FormularioReservas = (props) => {


    const initalStateValues = {
        nombres: '',
        apellidos: '',
        correo: '',
        fechaReserva: '',

    }

    const [values, setValues] = useState(initalStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    };

    const handleSubmit = e => {
        e.preventDefault();
        props.agregaRegistro(values);
        setValues({ ...initalStateValues })
    }


    return (
        <div className='container1 card ' >
            <h2>Formulario de Reserva</h2>
            <br />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="correo"
                            onChange={handleInputChange}
                            value={values.correo} /></Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombres:
                        <Form.Control
                            type="text"
                            placeholder="Nombres"
                            name="nombres"
                            onChange={handleInputChange}
                            value={values.nombres} />
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Apellidos:
                        <Form.Control
                            type="text"
                            placeholder="Apellidos"
                            name="apellidos"
                            onChange={handleInputChange}
                            value={values.apellidos} />
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fecha de Reserva:
                        <Form.Control
                            type="date"
                            name="fechaReserva"
                            onChange={handleInputChange}
                            value={values.fechaReserva} />
                    </Form.Label>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Solicitar Reserva
                </Button>
            </Form>
        </div >
    );
};
export default FormularioReservas
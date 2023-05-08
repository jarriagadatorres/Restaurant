import FormularioReservas from '../componentes/FormularioReserva'
import { db } from '../Firebase'
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

const Reserva = (props) => {

    const agregaRegistro = async (linkObject) => {

        await addDoc(collection(db, linkObject.fechaReserva), linkObject);

    }


    return (
        <FormularioReservas agregaRegistro={agregaRegistro} />
    )
}
export default Reserva;
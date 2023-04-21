import React from 'react';
import ItemCarta from '../componentes/ItemCarta.jsx';
import { Postres, Carnes, Pescados, Entradas } from '../componentes/MenuCarta.jsx';

function Carta() {
    return (
        <div className='carta-card'>
            <section className='card'>
                <div className='card-header'><h3>ENTRADAS</h3></div>
                {
                    Entradas.map(({ imagen, detalle, plato, precio }) => (
                            <ItemCarta 
                                key={plato}
                                imagen={imagen}
                                detalle={detalle}
                                plato={plato}
                                precio={precio}
                            >
                            </ItemCarta>
                    ))
                }
            </section>
            <section className='card'>
            <div className='card-header'><h3>POSTRES</h3></div>
                {
                    Postres.map(({ imagen, detalle, plato, precio }) => (

                        <ItemCarta
                            key={plato}
                            imagen={imagen}
                            detalle={detalle}
                            plato={plato}
                            precio={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </section>
            <section className='card'>
            <div className='card-header'><h3>CARNES</h3></div>
                {
                    Carnes.map(({ imagen, detalle, plato, precio }) => (

                        <ItemCarta
                            key={plato}
                            imagen={imagen}
                            detalle={detalle}
                            plato={plato}
                            precio={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </section>
            <section className='card'>
            <div className='card-header'><h3>PESCADOS</h3></div>
                {
                    Pescados.map(({ imagen, detalle, plato, precio }) => (

                        <ItemCarta
                            key={plato}
                            imagen={imagen}
                            detalle={detalle}
                            plato={plato}
                            precio={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </section>

        </div>
    )

}
export default Carta
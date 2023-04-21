import React from 'react';
import ItemCarta from '../componentes/ItemCarta.jsx';
import { Postres, Carnes, Pescados, Entradas } from '../componentes/MenuCarta.jsx';

function Carta() {
    return (
        <div className='carta-card'>
                        <section className='card'>
                {
                    Entradas.map(({ imagen, detalle, plato, precio }) => (

                        <ItemCarta
                            key={plato}
                            imagen={imagen}
                            detalle={detalle}
                            plato={plato}
                            valor={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </section>
            <section className='card'>
                {
                    Postres.map(({ imagen, detalle, plato, precio }) => (

                        <ItemCarta
                            key={plato}
                            imagen={imagen}
                            detalle={detalle}
                            plato={plato}
                            valor={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </section>
            <section className='card'>
                {
                    Carnes.map(({ imagen, detalle, plato, precio }) => (

                        <ItemCarta
                            key={plato}
                            imagen={imagen}
                            detalle={detalle}
                            plato={plato}
                            valor={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </section>
            <section className='card'>
                {
                    Pescados.map(({ imagen, detalle, plato, precio }) => (

                        <ItemCarta
                            key={plato}
                            imagen={imagen}
                            detalle={detalle}
                            plato={plato}
                            valor={precio}
                        >
                        </ItemCarta>
                    ))
                }
            </section>

        </div>
    )

}
export default Carta
import React from 'react';
import ItemCarta from '../componentes/ItemCarta.jsx';
import { menuItems } from '../componentes/MenuCarta.jsx';

function Carta() {
    return (
        <div className='carta-card'>
            {
                menuItems.map((item) => (
                    <section className='card' key={item.TipoCarta}>
                        <div className='tmenu'><h2>{item.TipoCarta}</h2></div>
                            {
                                item.platos.map(({ imagen, detalle, plato, precio }) => (
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
                ))
            }
        </div>
    )
};
export default Carta
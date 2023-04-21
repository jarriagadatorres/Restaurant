
function ItemCarta({ imagen, plato, detalle, precio }) {
    return (
        <article className='item-menu'>
            <header className='im-header'>
                <p><strong>{plato}</strong></p>
                <img
                    className='img-item'
                    alt=''
                    src={imagen} />
                <span>{detalle}${precio}</span>
                <p></p>
            </header>
        </article>
    );
};
export default ItemCarta
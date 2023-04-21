
function ItemCarta({ imagen, plato, detalle, precio }) {
    return (
        <article >
            <p><strong><h4>{plato}</h4></strong></p>
            <table className="table">
                <td className="td-imagen">
                <img
                    className='img-item'
                    alt=''
                    src={imagen} 
                    width={80}/>
                    </td>
                    <td className="td-detalle">
                <span>{detalle}</span>
                </td>
                <td className="td-precio">
                <strong><p>${precio}.-</p></strong>
                </td>
            </table>
        </article>
    );
};
export default ItemCarta
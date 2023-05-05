import { Table } from "react-bootstrap";

function ItemCarta({ imagen, plato, detalle, precio }) {
    return (
        <div className="card-body">
            <h4>{plato}</h4>
            <Table>
                <tr>
                    <td className="td-imagen">
                        <img
                            className='img-item'
                            alt=''
                            src={imagen}
                            />
                    </td>
                    <td className="td-detalle">
                        {detalle}
                    </td>
                    <td className="td-precio">
                        <h5>${precio}.-</h5>
                    </td>
                </tr>
            </Table>
        </div>
    );
};
export default ItemCarta
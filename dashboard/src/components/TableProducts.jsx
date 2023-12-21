import { Card, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { TableItemProduct } from "./TableItemProduct";

import { useState } from "react";
import { Paginator } from "./Paginator";



export const TableProducts = ({
  loading,
  products,
  handleDeleteProduct,
  handleEditProduct,
  itemsPerPage,

  
}) => {
  const [itemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
 

   

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
         
          <Paginator/>

        </div>
        {loading ? (
          <p>cargando...</p>
        ) : (
          <Table striped responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Descuento</th>
                <th>Marca</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((product, index) => (
                <TableItemProduct
                  key={index + product.name}
                  product={product}
                  handleEditProduct={handleEditProduct}
                  handleDeleteProduct={handleDeleteProduct}
                 
           
                />
              ))}
            </tbody>
          </Table>
         
        )}
       
      </Card.Body>
    </Card>
  );
};

TableProducts.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
  handleEditProduct: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
  itemsPerPage : PropTypes.number,
 
};

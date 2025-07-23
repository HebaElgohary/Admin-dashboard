import React, { useEffect, useState } from "react";
import { MainBtn } from "../components/StyledComponents/MainBtn";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../api/ProductsApi";

export function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProducts().then((resp) => setData(resp.data));
    console.log(data);
  }, []);

  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    setData(data.filter((p) => p.id !== productId));
  };

  return (
    <div className="container bg-dark p-3 m-5 rounded-3 text-center mx-auto">
      <MainBtn>
        <Link to="/products/:0/edit" className="nav-link">
          {" "}
          Add New Product
        </Link>
      </MainBtn>

      <Table striped bordered hover className="p-3 mt-5 " variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`${product.id}/edit`}>
                  <FaEdit className="text-info m-2 fs-3" />
                </Link>

                <Link to={`${product.id}`}>
                  <FaEye className="text-warning m-2 fs-3" />
                </Link>

                <Link>
                  <MdDelete
                    onClick={() => handleDelete(product.id)}
                    className="text-danger m-2 fs-3"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

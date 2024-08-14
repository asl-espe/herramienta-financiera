import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import FormMaterials from "./Components/FormMaterials";

interface Product {
  id: number;
  name: string;
  provider: string;
  quantity: number;
  unit: string;
  price: number;
  stock: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProductId, setDeletingProductId] = useState<number | null>(
    null
  );
  const [form, setForm] = useState({
    name: "",
    provider: "",
    quantity: 0,
    unit: "",
    price: 0,
    stock: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
      ...form,
    };
    setProducts([...products, newProduct]);
    setForm({
      name: "",
      provider: "",
      quantity: 0,
      unit: "",
      price: 0,
      stock: 0,
    });
  };

  const handleClearForm = () => {
    setForm({
      name: "",
      provider: "",
      quantity: 0,
      unit: "",
      price: 0,
      stock: 0,
    });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setForm(product);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...p, ...form } : p
        )
      );
      setShowEditModal(false);
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
    setShowDeleteModal(false);
    setDeletingProductId(null);
  };

  const confirmDeleteProduct = (id: number) => {
    setDeletingProductId(id);
    setShowDeleteModal(true);
  };

  return (
    <div className="container">
      <h1>Registro de Materiales</h1>
      <FormMaterials
        form={form}
        handleInputChange={handleInputChange}
        handleAddProduct={handleAddProduct}
        handleClearForm={handleClearForm}
      />
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Nombre del Producto</th>
            <th>Proveedor</th>
            <th>Cantidad</th>
            <th>Unidad de Medida</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.provider}</td>
              <td>{product.quantity}</td>
              <td>{product.unit}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditProduct(product)}
                  className="me-2"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                  variant="danger"
                  onClick={() => confirmDeleteProduct(product.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormMaterials
            form={form}
            handleInputChange={handleInputChange}
            handleAddProduct={handleSaveEdit}
            handleClearForm={handleClearForm}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este producto?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDeleteProduct(deletingProductId!)}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;

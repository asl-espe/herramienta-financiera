import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

interface FormMaterialsProps {
  form: {
    name: string;
    provider: string;
    quantity: number;
    unit: string;
    price: number;
    stock: number;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleAddProduct: () => void;
  handleClearForm: () => void;
}

const FormMaterials: React.FC<FormMaterialsProps> = ({
  form,
  handleInputChange,
  handleAddProduct,
  handleClearForm,
}) => {
  return (
    <Form>
      <Row>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Proveedor</Form.Label>
            <Form.Control
              as="select"
              name="provider"
              value={form.provider}
              onChange={handleInputChange}
            >
              <option value="">Seleccionar</option>
              <option value="Proveedor 1">Proveedor 1</option>
              <option value="Proveedor 2">Proveedor 2</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Unidad de Medida</Form.Label>
            <Form.Control
              as="select"
              name="unit"
              value={form.unit}
              onChange={handleInputChange}
            >
              <option value="">Seleccionar</option>
              <option value="Unidad 1">Kg</option>
              <option value="Unidad 2">g</option>
              <option value="Unidad 2">mg</option>
              <option value="Unidad 2">µg</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              name="price"
              value={form.price}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3} className="d-flex align-items-end">
          <Button variant="primary" onClick={handleAddProduct} className="me-2">
            Agregar
          </Button>
          <Button variant="secondary" onClick={handleClearForm}>
            Limpiar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormMaterials;

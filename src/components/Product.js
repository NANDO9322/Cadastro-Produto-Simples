import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  const addProduct = () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!name || !description || !price.toString().trim() || available === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Verifica se o preço é um número válido
    const priceAsNumber = parseFloat(price);
    if (isNaN(priceAsNumber) || priceAsNumber <= 0) {
      alert("Por favor, insira um preço válido.");
      return;
    }

    // Adiciona um novo produto
    const newProduct = {
      name,
      description,
      price: priceAsNumber,
      available,
    };
    setProducts([...products, newProduct]);
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(false);
  };

  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  return (
    <div className="container mt-5">
      <h2>Lista de Produtos</h2>
      <ul className="list-group mb-4">
        {sortedProducts.map((product, index) => (
          <li key={index} className="list-group-item">
            <strong>{product.name}</strong> - ${product.price} -{" "}
            {product.available ? "Disponível" : "Indisponível"}
          </li>
        ))}
      </ul>
      <h2>Adicionar Produto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="available">Disponível para venda:</label>
          <select
            id="available"
            className="form-control"
            value={available}
            onChange={(e) => setAvailable(e.target.value === "true")}
          >
            <option value="">Selecione</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={addProduct}>
          Adicionar Produto
        </button>
      </form>
    </div>
  );
};

export default Product;

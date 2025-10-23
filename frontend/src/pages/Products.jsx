import React, { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function AddProduct() {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", form);
      setMessage("✅ Produit ajouté avec succès !");
      setForm({ name: "", price: "", description: "" });
    } catch (err) {
      setMessage("❌ Erreur lors de l’ajout du produit.");
    }
  };

  return (
    <div className="container">
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Nom du produit"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={form.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <button type="submit" className="btn">Ajouter</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddProduct;

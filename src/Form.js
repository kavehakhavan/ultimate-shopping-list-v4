import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import "./MyStyle.css";
import { FaShoppingBasket, FaCartPlus } from "react-icons/fa";

import { AiOutlinePlusCircle } from "react-icons/ai";

function ShoppingForm({ addItem, errorMessage }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() && parseInt(itemQuantity) > 0) {
      addItem(itemName, itemQuantity);
      setItemName(""); // Clear input fields after submitting
      setItemQuantity("");
    } else if (!itemName.trim() && !itemQuantity.trim()) {
      alert("Please enter valid Item Name and Quantity!");
    } else if (!itemName.trim()) {
      alert("Item name cannot be empty!");
    } else if (!itemQuantity.trim()) {
      alert("Quantity cannot be empty!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup
        className="mb-3 align-items-start d-flex px-4"
        style={{ width: "70%", height: "60px" }}
      >
        <Form.Control
          aria-label="Item Name"
          placeholder="e.g. Orange"
          //className="custom-input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{
            width: "60%",
            backgroundColor: "white",
            //"::placeholder": { fontSize: "20px" }, // Decrease the placeholder font size inline
          }}
        />
        <Form.Control
          type="number"
          placeholder="e.g. 4"
          //className="custom-input"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          min={1}
          style={{ width: "20%", backgroundColor: "white" }}
        />
        <Button
          variant="outline-secondary"
          type="submit"
          style={{ width: "10%", backgroundColor: "#562664", color: "white" }}
        >
          <FaPlusCircle style={{ fontSize: "20px" }} />
        </Button>
      </InputGroup>
      {errorMessage && (
        <div
          style={{ textAlign: "center", marginBottom: "10px", color: "red" }}
        >
          {errorMessage}
        </div>
      )}
    </Form>
  );
}

export default ShoppingForm;

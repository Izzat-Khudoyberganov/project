import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const products = await axios.get(
        "https://fakestoreapi.com/products?limit=6"
      );
      if (products.status == 200) {
        setData(products.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Tryed to data fetching");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "data");

  return <section className="product-list">
    {JSON.stringify(data)}
  </section>
};

export default ProductList;

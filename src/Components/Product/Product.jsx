
import React from "react";

const Product = ({ products, addToCart, removeFromCart, cart }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    {product.price}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {cart.some((item) => item.id === product.id) ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

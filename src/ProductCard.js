import React from 'react';

const ProductCard = ({ title, price, salePrice, rating, isOnSale }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {isOnSale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
            Sale
          </div>
        )}
        <img
          className="card-img-top"
          src="https://via.placeholder.com/450x300"
          alt="..."
        />
        <div className="card-body p-4 text-center">
          <h5 className="fw-bolder">{title}</h5>
          {rating && (
            <div className="d-flex justify-content-center small text-warning mb-2">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <div key={i} className="bi-star-fill">  <span class="star">⭐</span></div>
                ))}
            </div>
          )}
          {salePrice ? (
            <span>
              <span className="text-muted text-decoration-line-through">
                ${price}
              </span>
              ${salePrice}
            </span>
          ) : (
            <span>${price}</span>
          )}
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
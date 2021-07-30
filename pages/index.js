import products from "../utils/data";
import Link from "next/link";

const index = () => {
  // console.log(products);
  return (
    <div className="main_wrapper">
      <h1>Products</h1>
      <div className="pro_wrapper">
        {products.map((x) => {
          const { id, name, price, img, category } = x;
          return (
            <div key={id} className="pro_details">
              <img src={img} alt={name} width="160" height="200" />
              <h3>
                {name} - {category}
              </h3>
              <div className="price-sec">
                <small>$ {price}</small>
                <Link href={`/product/${id}`}>
                  <a>Buy Now</a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

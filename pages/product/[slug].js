import { useRouter } from "next/router";
import products from "../../utils/data";

const news = () => {
  const { slug } = useRouter().query;
  const productDetail = products?.find((x) => x.id === parseInt(slug));
  console.log(productDetail);

  return (
    <div className="pro_details">
      <img
        src={productDetail?.img}
        alt={productDetail?.name}
        width="160"
        height="200"
      />
      <h1>{productDetail?.name}</h1>
      <h3>$ {productDetail?.price}</h3>
    </div>
  );
};

export default news;

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Home = async () => {
  const latestProducts = await getLatestProducts()
  return (
    <>
      <ProductList data={latestProducts} title="Newly added products" limit={4} />
    </>
  );
};

export default Home;
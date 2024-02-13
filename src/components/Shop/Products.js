import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: "my first book oi ever wrote",
  },
  {
    id: "p2",
    price: 9,
    title: "my second book",
    description: "my second book oi ever wrote",
  },
  {
    id: "p3",
    price: 12,
    title: "my third book",
    description: "my third book oi ever wrote",
  },
  {
    id: "p4",
    price: 15,
    title: "my fourth book",
    description: "my fourth book oi ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

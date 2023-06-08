const productData = [
  {
    id: '1',
    name: 'Laptop',
    price: 100000,
    description: 'Laptop Gaming 2023',
  },
  {
    id: '2',
    name: 'Desktop',
    price: 200000,
    description: 'PC Gaming 2023',
  },
];

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

// This function gets called at build time
export async function getStaticPaths() {
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  const paths = productData.map((p) => ({
    params: { id: p.id },
  }));
  return { paths, fallback: false };
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = ({ params }) => {
  const product = productData.find((product) => product.id === params?.id);

  // Pass post data to the page via props
  return { props: { product } };
};

const ProductDetail: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ product } = {} as Product) => {
  const { description, id, name, price } = product;
  return (
    <div>
      ProductDetail {id}
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

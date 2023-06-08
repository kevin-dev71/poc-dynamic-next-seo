const productData = {
  '1': {
    id: '1',
    name: 'Laptop',
    price: 100000,
    description: 'Laptop Gaming 2023',
  },
  '2': {
    id: '2',
    name: 'Desktop',
    price: 200000,
    description: 'PC Gaming 2023',
  },
};

import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id = '1' } = context.params ?? {};
  // do validations that id is valid
  const stringifyId = String(id) as keyof typeof productData;

  // do fetching product detail
  const product = id ? productData[stringifyId] : null;

  // Return the fetched data as props for the component
  return {
    props: {
      product,
    },
  };
};

const ProductDetail: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
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

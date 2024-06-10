import { useState } from 'react';
import ProductApi from "@api/products";
import useApi from "@hooks/useApi";
import { Flex, Pagination } from "antd";
import ProductsGrid from "components/ProductsGrid";

function App() {
  const [paginationParams, setPaginationParams] = useState<[page: number, pageSize: number]>([1, 6]);

  const { loading, data } = useApi(ProductApi.getProducts, paginationParams);

  return (
    <>
      <ProductsGrid loading={loading} products={data?.products ?? []} />
      <Flex justify="center">
        <Pagination
          current={paginationParams[0]}
          pageSize={paginationParams[1]}
          total={data?.pagination.totalCount}
          onChange={(p, pz) => {
            setPaginationParams([p, pz]);
          }}
        />
      </Flex>
    </>
  );
}

export default App

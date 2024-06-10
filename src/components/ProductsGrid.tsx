import { IProduct } from "@api/products";
import { Row, Col, Card } from "antd";
import type { FC } from "react"

interface IProductGridProps {
  loading: boolean;
  products: IProduct[];
}

const { Meta } = Card;

const ProductsGrid: FC<IProductGridProps> = ({
  loading,
  products,
}) => (
  <div className="p-4">
    <Row gutter={[16, 16]}>
      {loading ? (
        new Array(6).fill(0).map((_, index) => (
          <Col key={index} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 8 }}>
              <Card loading>
                <Meta
                  title="Dummy title"
                  description="Loading description"
                />
              </Card>
          </Col>
        ))
      ) : products.map((product) => (
        <Col key={product.id} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 8 }}>
          <Card title={product.name} hoverable>
            <h4 className="font-medium">Categories</h4>
            <p>{product.categories.map(({ name }) => name).join(', ')}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
)

export default ProductsGrid;
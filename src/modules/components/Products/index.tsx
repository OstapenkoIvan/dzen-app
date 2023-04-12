import { List, Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import { ordersSelector, productsSelector } from "../../../store/products";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProductsOrderItem from "../ProductsOrderItem";
import { orderProducts } from "../../../helpers/orderProducts";

function Products() {
  const orders = useAppSelector(ordersSelector);
  const products = useAppSelector(productsSelector);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "fit-content",
            gap: 1,
            width: "100%",
          }}
        >
          <AddCircleIcon />
          <Typography variant="h5">Приходы / {orders.length}</Typography>
        </Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "fit-content",
          }}
        >
          {orders.map((order) => {
            const { productsCount } = orderProducts(products, order.id);

            return (
              <ProductsOrderItem
                key={order.id}
                order={order}
                productsCount={productsCount}
              />
            );
          })}
        </List>
      </Box>
    </>
  );
}

export default Products;

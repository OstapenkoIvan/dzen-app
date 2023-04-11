import { List, Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import { ordersSelector, productsSelector } from "../../../store/products";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import OrderItem from "../OrderItem";
import { orderProducts } from "../../../helpers/orderProducts";

function Orders() {
  const orders = useAppSelector(ordersSelector);
  const products = useAppSelector(productsSelector);

  return (
    <>
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
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {orders.map((order) => {
          const { price, productsCount, currentProducts } = orderProducts(
            products,
            order.id
          );

          return (
            <OrderItem
              key={order.id}
              order={order}
              productsCount={productsCount}
              price={price}
            />
          );
        })}
      </List>
    </>
  );
}

export default Orders;

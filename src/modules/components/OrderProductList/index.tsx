import { List, Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import OrderProductItem from "../OrderProductItem";
import { IOrder } from "../../../types";
import { useAppSelector } from "../../../hooks/redux";
import { ordersProductSelector } from "../../../store/products";

function OrderProducList() {
  const location = useLocation();
  const { order }: { order: IOrder } = location.state;

  const products = useAppSelector(ordersProductSelector(order.id));

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
        <Typography variant="h5">Продукты / {products.length}</Typography>
      </Box>
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {products.map((product) => (
          <OrderProductItem product={product} key={product.id} order={order} />
        ))}
      </List>
    </>
  );
}

export default OrderProducList;

import { useState } from "react";
import {
  List,
  Box,
  Typography,
  Button,
  IconButton,
  Hidden,
} from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import { ordersSelector, productsSelector } from "../../../store/products";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ProductsOrderItem from "../ProductsOrderItem";
import { orderProducts } from "../../../helpers/orderProducts";
import ProductOrderListItem from "../ProductOrderListItem";

function Products() {
  const [isActive, setIsActive] = useState<number>(0);
  const orders = useAppSelector(ordersSelector);
  const products = useAppSelector(productsSelector);

  const currentOrder = orders.find((order) => order.id === isActive);
  const { currentProducts } = orderProducts(products, isActive);

  const handleClose = () => {
    setIsActive(0);
  };

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
          <IconButton>
            <AddCircleIcon fontSize="medium" sx={{ color: "#cc5a2a" }} />
          </IconButton>
          <Typography variant="h5">Приходы / {orders.length}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 4, px: 0, mt: 2 }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "fit-content",
              height: "fit-content",
              py: 0,
            }}
          >
            {orders.map((order) => {
              const { productsCount } = orderProducts(products, order.id);

              return (
                <ProductsOrderItem
                  key={order.id}
                  order={order}
                  productsCount={productsCount}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              );
            })}
          </List>

          {isActive > 0 && (
            <Box
              sx={{
                display: "flex",
                position: "relative",
                height: "fit-content",
                flex: 1,
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  height: 32,
                  width: 32,
                  backgroundColor: "#fff",
                  boxShadow: "3px 3px 20px 1px rgba(0,0,0,0.55)",
                  zIndex: 1,
                  ":hover": {
                    backgroundColor: "#fff",
                  },
                }}
                onClick={handleClose}
              >
                <HighlightOffIcon fontSize="large" />
              </IconButton>
              <Box
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  border: "1px solid #ccc",
                  borderRadius: 1,
                  backgroundColor: "#fff",
                  // overflow: "hidden",
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    px: 4,
                    py: 3,
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <Typography>{currentOrder?.title}</Typography>
                  <Button
                    startIcon={<AddCircleIcon fontSize="small" />}
                    sx={{ color: "#cc5a2a" }}
                  >
                    Добавить продукт
                  </Button>
                </Box>
                <List disablePadding>
                  {currentProducts.map((product) => (
                    <ProductOrderListItem product={product} key={product.id} />
                  ))}
                </List>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Products;

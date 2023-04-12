import { useState } from "react";
import {
  List,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../../hooks/redux";
import { ordersProductSelector } from "../../../store/products";
import OrderProductItem from "../OrderProductItem";
import { IOrder, IProduct } from "../../../types";

function OrderProducList() {
  const [type, setType] = useState("");
  const location = useLocation();
  const { order }: { order: IOrder } = location.state;

  const products = useAppSelector(ordersProductSelector(order.id));
  const productTypes = Array.from(
    new Set(products.map((product: IProduct) => product.type))
  );
  const filteredProducts = type
    ? products.filter((product) => product.type === type)
    : products;

  const handleChange = (e: SelectChangeEvent) => {
    setType(e.target.value as string);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "fit-content",
          gap: 3,
          width: "100%",
        }}
      >
        <Typography variant="h5">
          Продукты / {filteredProducts.length}
        </Typography>
        <FormControl sx={{ width: 200 }} size="small" margin="none">
          <InputLabel id="porduct-type">Тип</InputLabel>
          <Select
            labelId="porduct-type"
            id="porduct-type-select"
            value={type}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={""}>Все</MenuItem>
            {productTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {filteredProducts.map((product) => (
          <OrderProductItem product={product} key={product.id} order={order} />
        ))}
      </List>
    </>
  );
}

export default OrderProducList;

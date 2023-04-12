import { useContext } from "react";
import {
  ListItem,
  ListItemText,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { removeProduct } from "../../../store/products";
import { useAppDispatch } from "../../../hooks/redux";

import { IOrder, IProduct } from "../../../types";

function OrderProductItem({
  product,
  order,
}: {
  product: IProduct;
  order: IOrder;
}) {
  const dispatch = useAppDispatch();

  const currentDate = new Date(product.date);
  const day = currentDate.getDate();
  const month = new Intl.DateTimeFormat("ru", { month: "long" }).format(
    currentDate
  );
  const year = currentDate.getFullYear();

  const handleDelete = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <ListItem
      sx={{
        flex: 1,
        justifyContent: "space-between",
        border: "1px solid #ccc",
        borderRadius: 1,
        backgroundColor: "#fff",
        ":hover": {
          boxShadow: "3px 3px 20px 1px rgba(0,0,0,0.55)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: 48,
          width: 48,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            backgroundColor: product.isNew ? "#ADFF2F" : "#000",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>
      <Box
        component="img"
        sx={{
          height: 48,
          width: 48,
          mr: 2,
        }}
        alt={product.title}
        src={product.photo}
      />
      <Box
        sx={{
          display: "flex",
          minWidth: "fit-content",
          maxWidth: 400,
          flexDirection: "column",
          mb: 0,
          mr: 2,
        }}
      >
        <Typography variant="subtitle2">{product.title}</Typography>
        <Typography variant="caption">{product.specification}</Typography>
      </Box>
      <Box sx={{ width: 85 }}>
        {product.isNew ? (
          <Typography variant="body2" color={"#ADFF2F"}>
            Свободен
          </Typography>
        ) : (
          <Typography variant="body2" color={"#000"}>
            В ремонте
          </Typography>
        )}
      </Box>

      <Box sx={{ width: 100, mr: 2 }}>
        <Typography variant="body2">
          с{" "}
          {new Intl.DateTimeFormat("en-GB").format(
            new Date(product.guarantee.start)
          )}
        </Typography>
        <Typography variant="body2">
          по{" "}
          {new Intl.DateTimeFormat("en-GB").format(
            new Date(product.guarantee.end)
          )}
        </Typography>
      </Box>
      <Box sx={{ width: 50, mr: 2, textAlign: "center" }}>
        {product.isNew ? (
          <Typography variant="body2">Новый</Typography>
        ) : (
          <Typography variant="body2">Б/У</Typography>
        )}
      </Box>
      <Box sx={{ textAlign: "left", mr: 2, width: 80 }}>
        {product.price[0].value && (
          <Typography variant="caption">{product.price[0].value} $</Typography>
        )}
        {product.price[1].value && (
          <Typography variant="body2" sx={{ lineHeight: 1 }}>
            {product.price[1].value} UAH
          </Typography>
        )}
      </Box>
      <Box sx={{ minWidth: 100, mr: 2 }}>
        <Typography>{product.type ? product.type : "-"}</Typography>
      </Box>
      <Box sx={{ minWidth: 100, mr: 2 }}>
        <Typography>{order.title ? order.title : "-"}</Typography>
      </Box>
      <Box sx={{ width: 110, mr: 2 }}>
        <Typography variant="caption">
          {day} / {month} / {year}
        </Typography>
      </Box>
      <IconButton aria-label="delete order" size="small" onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </ListItem>
  );
}

export default OrderProductItem;

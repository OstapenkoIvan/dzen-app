import { ListItem, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { removeProduct } from "../../../store/products";
import { useAppDispatch } from "../../../hooks/redux";
import ModalProductComponent from "../ModalProductComponent";
import { IProduct } from "../../../types";
import { useState } from "react";

function ProductOrderListItem({ product }: { product: IProduct }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    setIsOpen(!isOpen);
  };

  const confirmDelete = () => {
    setIsOpen(!isOpen);
    dispatch(removeProduct(product.id));
  };

  return (
    <ListItem
      sx={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        ":hover": {
          boxShadow: "3px 3px 20px 1px rgba(0,0,0,0.55)",
          zIndex: 2,
        },
        ":not(:last-child)": {
          borderBottom: "1px solid #ccc",
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
      <IconButton aria-label="delete order" size="small" onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
      {isOpen && (
        <ModalProductComponent
          modalState={isOpen}
          setClose={handleDelete}
          confirmDelete={confirmDelete}
          product={product}
        />
      )}
    </ListItem>
  );
}

export default ProductOrderListItem;

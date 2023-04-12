import { useState } from "react";
import {
  ListItem,
  ListItemText,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { IOrderItem } from "../../../types";
import { getNoun } from "../../../helpers/getNoun";
import { getOrderDate } from "../../../helpers/getDate";
import ModalComponent from "../ModalComponent";

function OrderItem({ order, price, productsCount }: IOrderItem) {
  const [modalState, setModalState] = useState<boolean>(false);

  const { day, month, year } = getOrderDate(order.date);

  const handleDelete = () => {
    setModalState(true);
  };

  return (
    <ListItem
      key={order.id}
      sx={{
        flex: 1,
        border: "1px solid #ccc",
        borderRadius: 1,
        backgroundColor: "#fff",
        ":hover": {
          boxShadow: "3px 3px 20px 1px rgba(0,0,0,0.55)",
        },
      }}
    >
      <Link to={`/${order.id}`} state={{ order }}>
        <ListItemText>{order.description}</ListItemText>
      </Link>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mr: 5,
          ml: "auto",
          width: 120,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            p: 1,
            border: "1px solid #ccc",
            borderRadius: "50%",
          }}
        >
          <FormatListBulletedIcon />
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ display: "flex", flexDirection: "column", mb: 0 }}
          >
            {productsCount}
          </Typography>
          <Typography variant="caption">
            {getNoun(productsCount, "Продукт", "Продукта", "Продуктов")}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: 100, mr: 4 }}>
        <Typography variant="caption">
          {day} / {month} / {year}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left", mr: 2, width: 200 }}>
        {price.USD && <Typography variant="caption">{price.USD} $</Typography>}
        {price.UAH && (
          <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
            {price.UAH} UAH
          </Typography>
        )}
      </Box>
      <IconButton aria-label="delete order" size="small" onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
      {modalState && (
        <ModalComponent onClose={setModalState} order={order} price={price} />
      )}
    </ListItem>
  );
}

export default OrderItem;

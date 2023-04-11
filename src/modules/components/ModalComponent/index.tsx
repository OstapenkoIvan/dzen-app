import {
  ListItem,
  ListItemText,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getOrderDate } from "../../../helpers/getDate";
import { removeOrder } from "../../../store/products";
import { useAppDispatch } from "../../../hooks/redux";

import { IOrderModal } from "../../../types";

function ModalComponent({ order, price, onClose }: IOrderModal) {
  const { day, month, year } = getOrderDate(order.date);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    onClose(false);
  };

  const handleDelete = () => {
    dispatch(removeOrder(order.id));
    onClose(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        zIndex: 100,
        overflowY: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 500,
          height: 200,
          backgroundColor: "#fff",
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
            ":hover": {
              backgroundColor: "inherit",
            },
          }}
          onClick={handleClose}
        >
          <HighlightOffIcon fontSize="large" />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: 60,
            px: 3,
            borderBottom: "1px solid #ccc",
          }}
        >
          <Typography variant="subtitle1">
            Вы уверены, что хотите удалить этот приход?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: 3,
            height: 70,
          }}
        >
          <Box>
            <Typography variant="subtitle1">{order.description}</Typography>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Typography variant="subtitle1">
              {day} / {month} / {year}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            {price.USD && (
              <Typography variant="caption">{price.USD} $</Typography>
            )}
            {price.UAH && (
              <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
                {price.UAH} UAH
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: 70,
            backgroundColor: "#FBDBAF",
            gap: 2,
            px: 3,
          }}
        >
          <Button onClick={handleClose} sx={{ height: 36 }}>
            Отмена
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{ height: 36 }}
          >
            Удалить
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ModalComponent;

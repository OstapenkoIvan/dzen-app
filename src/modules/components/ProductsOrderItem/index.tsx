import { ListItem, ListItemText, Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { IProductOrderItem } from "../../../types";
import { getNoun } from "../../../helpers/getNoun";
import { getOrderDate } from "../../../helpers/getDate";

function OrderItem({
  order,
  productsCount,
  isActive,
  setIsActive,
}: IProductOrderItem) {
  const { day, month, year } = getOrderDate(order.date);

  const handleClick = () => {
    isActive === order.id ? setIsActive(0) : setIsActive(order.id);
  };

  return (
    <ListItem
      key={order.id}
      sx={{
        flex: 1,
        border: "1px solid #ccc",
        borderRadius: 1,
        backgroundColor: "#fff",
        overflow: "hidden",
        cursor: "pointer",
        ":hover": {
          boxShadow: "3px 3px 20px 1px rgba(0,0,0,0.55)",
        },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mr: 5,
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
      {isActive === order.id && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ccc",
            color: "#fff",
            position: "absolute",
            top: 0,
            right: 0,
            height: 66,
            width: 30,
          }}
        >
          <ArrowForwardIosIcon />
        </Box>
      )}
    </ListItem>
  );
}

export default OrderItem;

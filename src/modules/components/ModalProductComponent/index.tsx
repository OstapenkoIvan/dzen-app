import { useEffect } from "react";

import { Box, Typography, IconButton, Button } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getOrderDate } from "../../../helpers/getDate";
import { removeOrder } from "../../../store/products";
import { useAppDispatch } from "../../../hooks/redux";

import { IProductModal } from "../../../types";

function ModalProductComponent({
  modalState,
  product,
  setClose,
  confirmDelete,
}: IProductModal) {
  useEffect(() => {
    function handleToggleModalByEsc(evt: KeyboardEvent) {
      let { code } = evt;

      if (code === "Escape") {
        setClose();
      }
    }

    if (modalState) {
      window.addEventListener("keydown", handleToggleModalByEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleToggleModalByEsc);
    };
  }, [setClose, modalState]);

  const handleClose = () => {
    setClose();
  };

  const handleDelete = () => {
    confirmDelete();
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
      onClick={handleClose}
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
          onClick={setClose}
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
            Вы уверены, что хотите удалить этот товар?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: 1,
            height: 70,
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
              flex: 1,
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

export default ModalProductComponent;

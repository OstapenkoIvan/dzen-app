import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Box, Typography, IconButton, Button } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { motion } from "framer-motion";

import { getOrderDate } from "../../../helpers/getDate";
import { removeOrder } from "../../../store/products";
import { useAppDispatch } from "../../../hooks/redux";
import { dropIn } from "../../../constants/motionVariants";

import { IOrderModal } from "../../../types";

function ModalComponent({
  order,
  price,
  setModalState,
  modalState,
}: IOrderModal) {
  const { day, month, year } = getOrderDate(order.date);
  const dispatch = useAppDispatch();
  const modalRootEl = document.querySelector("#modal");

  useEffect(() => {
    function handleToggleModalByEsc(evt: KeyboardEvent) {
      let { code } = evt;

      if (code === "Escape") {
        setModalState(false);
      }
    }

    if (modalState) {
      window.addEventListener("keydown", handleToggleModalByEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleToggleModalByEsc);
    };
  }, [setModalState, modalState]);

  const handleClose = () => {
    setModalState(false);
  };

  const handleDelete = () => {
    dispatch(removeOrder(order.id));
    setModalState(false);
  };

  return modalRootEl
    ? createPortal(
        <motion.div
          onClick={handleClose}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
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
                <Typography variant="caption">
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
        </motion.div>,
        modalRootEl
      )
    : null;
}

export default ModalComponent;

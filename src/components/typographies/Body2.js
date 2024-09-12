import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Body2 = (props) => {
  const { text,color,border,padding, fontWeight } = props;
  const { t } = useTranslation();
  return (
    <Typography variant="body2" padding={padding?padding: ""} border={border? border: ""} color={color? color:"text.secondary"} fontWeight={fontWeight}>
      {t(text)}
    </Typography>
  );
};

Body2.propTypes = {};

export default Body2;

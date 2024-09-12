import React, { useEffect, useState } from "react";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";

import {
  alpha,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { t } from "i18next";

import { Box } from "@mui/system";
import { getCurrentModuleType } from "../../../helper-functions/getCurrentModuleType";
import { getLanguage } from "../../../helper-functions/getLanguage";
import CustomImageContainer from "../../CustomImageContainer";
import DollarSignHighlighter from "../../DollarSignHighlighter";
import down_arrow from "../assets/downarrow.png";
import HeroLocationForm from "./HeroLocationForm";
import ModuleSelectionRaw from "./module-selection/ModuleSelectionRaw";
import DownArrow from "../assets/DownArrow";
import { RTL } from "components/rtl";
import DownArrowRTL from "../assets/DownArrowRTL";

const HeroTitleSection = ({ configData, landingPageData, handleOrderNow }) => {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const currentLanguage = getLanguage();
  const [currentLocation, setCurrentLocation] = useState(null);
  const lanDirection = getLanguage() ? getLanguage() : "ltr";
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLocation(window.localStorage.getItem("location"));
    }
  }, []);
  const getSearchOrModulesBySelectedModules = () => {
    if (currentLocation) {
      return <ModuleSelectionRaw />;
    } else {
      return (
        <CustomStackFullWidth mt="0px">
          <HeroLocationForm />
        </CustomStackFullWidth>
      );
    }
  };
  return (
    <CustomStackFullWidth>
      <CustomStackFullWidth spacing={0.4}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={0.5}
          flexWrap="wrap"
        >
          <Typography
            sx={{
              marginTop: !isXSmall && isTab?"3.2rem":"",
              color: "white",
              // color: (theme) => theme.palette.primary.main,
              // fontSize: isXSmall ? "20px" : "54px",
              // lineHeight: isXSmall ? "24px" : "58px",
              fontSize: isXSmall ? "20px": isTab?"2.5rem":"54px",
              lineHeight: isXSmall ? "24px" : "58px",
              fontWeight: "bold",
              zIndex: 1
            }}
          >
            <DollarSignHighlighter
              theme={theme}
              text={landingPageData?.header_title}
            />
          </Typography>
        </Stack>
        <Typography
          // color={alpha(theme.palette.neutral[700], 0.8)}
          color={"white"}
          fontSize={isXSmall ? "16px" : "35px"}
          lineHeight={isXSmall ? "22px" : "58px"}
          fontWeight="400"
          zIndex={1}
        >
          <DollarSignHighlighter
            theme={theme}
            text={landingPageData?.header_sub_title}
          />
        </Typography>
      </CustomStackFullWidth>
      <CustomStackFullWidth flexDirection="row" spacing={2}  mt="14px" sx={{ position: "relative" }}>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "20px" },
            // color: (theme) => alpha(theme.palette.neutral[500], 0.5),
            color: "white"
          }}
          fontWeight="400"
        >
          <DollarSignHighlighter
            theme={theme}
            text={landingPageData?.header_tag_line}
          />
        </Typography>
        {/* {(!getCurrentModuleType() && !isXSmall) && (<Stack sx={{}}>{lanDirection === "rtl" ? <DownArrowRTL /> : <DownArrow />}</Stack>)} */}
        {(!getCurrentModuleType() && !isXSmall) && (<DownArrow />)}
      </CustomStackFullWidth>
      {!isXSmall && getSearchOrModulesBySelectedModules()}
    </CustomStackFullWidth>
  );
};

export default HeroTitleSection;

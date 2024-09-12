import React, { useState } from "react";
import { Stack,useMediaQuery,useTheme } from "@mui/material";
import Link from "next/link";
import { NavLinkStyle } from "../NavBar.style";

import dynamic from "next/dynamic";

const NavLinks = ({ zoneid, t, moduleType }) => {
  const theme = useTheme();
  const [openCategoryModal, setCategoryModal] = useState(false);
  const [openRestaurantModal, setRestaurantModal] = useState(false);
  const isxlarge = useMediaQuery(theme.breakpoints.up('xl'));
  const NavStore = dynamic(() => import("./NavStore"), {
    ssr: false,
  });
  const NavCategory = dynamic(() => import("./NavCategory"), {
    ssr: false,
  });

  return (
    <Stack
      direction="row"
      mt={isxlarge?"3px":"3px"}
      ml={isxlarge?"13px":"15px"}
      alignItems="center"
      spacing={2}
      sx={{ paddingRight: "20px" }}
    >
      {zoneid && (
        <>
          <Link href="/home">
            <NavLinkStyle
              underline="none"
              // language_direction={language_direction}
              sx={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {t("Home")}
            </NavLinkStyle>
          </Link>
          {moduleType !== "parcel" ? (
            <>
              {/* <NavCategory
                openModal={openCategoryModal}
                setModal={setCategoryModal}
                setRestaurantModal={setRestaurantModal}
              /> */}
              <NavStore
                openModal={openRestaurantModal}
                setModal={setRestaurantModal}
              />
            </>
          ) : (
            <Link href="/help-and-support">
              <NavLinkStyle
                underline="none"
                // language_direction={language_direction}
                sx={{ cursor: "pointer" }}
              >
                {t("Contact")}
              </NavLinkStyle>
            </Link>
          )}
        </>
      )}
    </Stack>
  );
};

NavLinks.propTypes = {};

export default React.memo(NavLinks);

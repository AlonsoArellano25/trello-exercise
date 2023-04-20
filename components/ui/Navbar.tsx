import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar data-testid="toolbar">
        <NextLink href={"/"} passHref>
          <Link underline="none" color={"white"}>
            <Typography data-testid="title" variant="h6">
              Trello
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};

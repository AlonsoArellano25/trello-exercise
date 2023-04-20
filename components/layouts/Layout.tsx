import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Box data-testid="main-box" sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <Box data-testid="box" sx={{ padding: "10px 20px" }}>
        {children}
      </Box>
    </Box>
  );
};

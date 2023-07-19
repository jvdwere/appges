/* eslint-disable react/no-children-prop */
"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box bg={'teal.500'} w='100vw' p={"0px 0px 250px"}>{children}</Box>
        </Providers>
      </body>
    </html>
  );
}

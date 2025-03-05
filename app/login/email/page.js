"use client"

import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';

export default function CheckEmail() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Full screen height
                width: "100vw", // Full screen width
            }}
        >
            <Card size="lg" sx={{ textAlign: "center", p: 3 }}>

                <img
                    src="https://images.seeklogo.com/logo-png/32/2/next-js-logo-png_seeklogo-321806.png"
                    srcSet="https://images.seeklogo.com/logo-png/32/2/next-js-logo-png_seeklogo-321806.png 2x"
                    loading="lazy"
                    alt=""
                />
                <Typography
                    level="h1"
                    sx={{
                        fontWeight: "xl",
                        fontSize: "2rem",
                        color: "black",
                    }}
                >
                    Please, check your email!
                </Typography>
                <Typography
                    level="h1"
                    sx={{
                        fontWeight: "sm",
                        fontSize: "1.5rem",
                        color: "black",
                    }}
                >(also check the spam folder)
                </Typography>
            </Card>
        </Box>
    );
}
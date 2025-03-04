"use client"

import * as React from 'react';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from './TwoSidedLayout';

export default function Welcome() {
  return (
    <TwoSidedLayout>
      <Typography
        level="h1"
        sx={{
          fontWeight: 'xl',
          fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
          color: "black"
        }}
      >
        Welcome to the landing page!
      </Typography>

    </TwoSidedLayout>
  );
}
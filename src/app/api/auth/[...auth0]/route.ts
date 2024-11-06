// src/app/api/auth/[...auth0]/route.ts

import { NextResponse } from 'next/server';
import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();
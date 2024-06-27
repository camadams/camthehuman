import { config } from 'dotenv';
import { Config, defineConfig } from 'drizzle-kit';
import { loadEnvConfig } from '@next/env';
import { cwd } from 'node:process';


loadEnvConfig(cwd());

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './supabase/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
} satisfies Config);

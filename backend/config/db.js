import { neon, neonConfig } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

neonConfig.fetchConnectionCache = true;

// creates a SQL connection using our env variables
export const sql = neon(process.env.DATABASE_URL);
// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely

// postgresql://neondb_owner:npg_NW8olSOGfx5E@ep-dawn-meadow-a83i0d05-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
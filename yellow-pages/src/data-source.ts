import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user";
import { Contact } from "./entities/contact";
import path from "path";
import { initial1680210172739 } from "./migrations/1680210172739-initial";

export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/**/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.HOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [User, Contact ],
        migrations:  [initial1680210172739],
      }
);

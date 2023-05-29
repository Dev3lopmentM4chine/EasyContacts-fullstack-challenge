import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath = path.join(__dirname, "./migrations/**.{ts,js}");

  const dbURL: string | undefined = process.env.DATABASE_URL;

  if (!dbURL) throw new Error("Var env DATABASE URL does not exists!");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv == "test") {
    return {
      type: "sqlite",
      database: ":memory",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: dbURL,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;

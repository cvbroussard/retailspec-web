import { neon } from "@neondatabase/serverless";

interface SimpleSqlClient {
  (strings: TemplateStringsArray, ...params: any[]): Promise<
    Record<string, any>[]
  >;
  (string: string, params?: any[], opts?: any): Promise<
    Record<string, any>[]
  >;
}

const sql: SimpleSqlClient = process.env.DATABASE_URL
  ? (neon(process.env.DATABASE_URL) as unknown as SimpleSqlClient)
  : ((() => {
      throw new Error("DATABASE_URL not set");
    }) as unknown as SimpleSqlClient);

export default sql;

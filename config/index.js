const loadConfig = () => {
  const { env } = process;

  return {
    db: {
      DATABASEbase: env.DATABASE_BASE,
      host: env.DATABASE_HOST,
      port: parseInt(env.DATABASE_PORT, 10) || 3306,
      username: env.DATABASE_USERNAME,
      password: env.DATABASE_PASSWORD,
    },
  };
};

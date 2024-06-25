-- Create the database if it does not exist
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT 1
      FROM   pg_catalog.pg_database
      WHERE  datname = 'assistant_db'
   ) THEN
      PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE assistant_db');
   END IF;
END
$$;

-- Connect to the database and create the pg_vector extension
\connect assistant_db;

-- Ensure we are connected to the correct database
\c assistant_db;

-- Create the pg_vector extension if it does not exist
CREATE EXTENSION IF NOT EXISTS vector;
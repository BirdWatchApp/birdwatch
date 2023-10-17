CREATE TABLE IF NOT EXISTS birds (
  _id serial NOT NULL,
  speciesCode varchar NOT NULL PRIMARY KEY,
  comName varchar,
  locName varchar,
  obsDt timestamp,
  howMany integer,
  lat float,
  lng float
);

CREATE TABLE IF NOT EXISTS birdgendas (
  _id serial NOT NULL PRIMARY KEY,
  species varchar,
  FOREIGN KEY (species) REFERENCES birds(speciesCode),
  birdgenda varchar
);


CREATE TABLE IF NOT EXISTS users (
  _id serial NOT NULL PRIMARY KEY,
  username varchar NOT NULL,
  password varchar NOT NULL
);

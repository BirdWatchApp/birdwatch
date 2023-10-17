CREATE TABLE IF NOT EXISTS birds (
  _id serial NOT NULL,
  speciesCode varchar NOT NULL,
  comName varchar NOT NULL,
  locName varchar NOT NULL,
  obsDt timestamp NOT NULL,
  howMany integer NOT NULL,
  lat float NOT NULL,
  lng float NOT NULL
);

CREATE TABLE IF NOT EXISTS birdgendas (
  _id serial NOT NULL,
  species varchar NOT NULL,
  FOREIGN KEY (species) REFERENCES birds(speciesCode)
);


CREATE TABLE IF NOT EXISTS users (
  _id serial NOT NULL,
  username varchar NOT NULL,
  password varchar NOT NULL
);

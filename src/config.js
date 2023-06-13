const owner = import.meta.env.VITE_TEST || "hvali gazda";
const base = import.meta.env.VITE_DBNAME || "hvali baza";
const pass = import.meta.env.VITE_DBPASS || "hvali prolaz";

export default {
  owner,
  base,
  pass
}
“This was created during my time as a student at Code Chrysalis”

# Fragrapedia
Fragrapedia is an app built for users to create, update, and collectively maintain a database of perfumes and fragrances. Users can also review and vote on various aspectects of these frargances, as well as keep track of thier own collection.

## Technologies
Fragrapedia was built uisng PostgreSQL, Express.js, and Knex.js.

### Endpoints
- `GET` /fragrances : Returns a list of all fragrances.
- `GET` /fragrances/{name} : Returns a single fragrance object.
- `POST` /fragrances : Create a new fragrance passed as an object.
- `PATCH` /fragrances/{name} : Modifies a target fragrance.
- `DELETE` /fragrances/{name} : Removes a target fragrance.
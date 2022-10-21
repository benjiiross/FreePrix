# FreePrix

1. cp api/app/config/db.config-example.js api/app/config/db.config.js

1. Change your credentials

1. In mysql, create the db `freeprix`:

```sql
   CREATE DATABASE IF NOT EXISTS freeprix;
```

1. cd api; npm i; npm run dev

1. launch the ./articles.sql script to seed the db

1. In a new terminal, cd site; npm i; npm run dev

1. Connect to `localhost:5173` (vite address) or `127.0.0.1:5173`

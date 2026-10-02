# 101496484_COMP3123-exec04

COMP 3123 Lab 4 — Express.js exercise

- **Student:** Cem Dudu
- **Student ID:** 101496484

## Run

```bash
npm install
npm start        # node index.js
npm run dev      # nodemon index.js (auto-restart)
```

The server listens on `http://localhost:3000` (override with the `PORT` environment variable).

## Endpoints

| Method | Path | Input | Response |
|--------|------|-------|----------|
| GET | `/hello` | – | `Hello Express JS` (text/plain) |
| GET | `/user` | query: `firstname`, `lastname` (default `Pritesh` / `Patel`) | `{ firstname, lastname }` |
| POST | `/user/:firstname/:lastname` | path params | `{ firstname, lastname }` |
| POST | `/users` | JSON array of `{ firstname, lastname }` | the same array; `400 { "error": "Request body must be an array of users" }` if not an array |
| GET | `/instruction.html` | – | static file served from `public/` |
| * | anything else | – | `404` JSON error |

## Example requests

```bash
curl http://localhost:3000/hello
curl http://localhost:3000/user
curl "http://localhost:3000/user?firstname=John&lastname=Doe"
curl -X POST http://localhost:3000/user/John/Doe
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '[{"firstname":"Pritesh","lastname":"Patel"},{"firstname":"John","lastname":"Doe"},{"firstname":"John","lastname":"Rome"}]'
```

Open http://localhost:3000/instruction.html in a browser to view the lab instructions.

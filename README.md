
# FinderX - Demo Scaffold

This archive contains a minimal, demo scaffold for FinderX (frontend + backend). It's meant as a starting point only.

## How to run locally (demo)

### Backend (requires Node 18+)
```
cd backend
npm install
npm run dev
# API will run on http://localhost:4000
```

### Frontend
```
cd frontend
npm install
npm run dev
# Open the vite dev URL (usually http://localhost:5173)
```

## Notes
- This scaffold uses in-memory storage for the demo backend. Replace with a real DB and auth before production.
- See prisma/schema.prisma for suggested data models.
- Add Stripe/Escrow providers and KYC integrations during implementation.

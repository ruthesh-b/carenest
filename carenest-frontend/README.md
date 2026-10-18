# CareNest — Healthcare Marketplace Frontend Prototype

A Vercel-ready, clickable frontend concept for a Bangalore-first healthcare marketplace. It demonstrates customer, healthcare professional, and admin workflows using local React state and sample data.

## Included flows

- Customer discovery and provider search/filtering
- Doctor, physiotherapist, and nurse sample profiles
- Direct booking with service, mode, date, time, 10% demo advance, and confirmation
- Request-based booking with multiple custom-priced offers
- Customer appointment history and cancellation/refund demo state
- Simulated video-consultation room
- Professional service pricing, duration, availability, incoming offers, and appointment views
- Admin professional verification, approval/rejection, service catalogue, and booking operations
- Responsive layout for desktop and mobile screens

## Run locally

Requirements: Node.js 20.9+ recommended.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Extract this project or push its files to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Next.js** (normally detected automatically).
4. No environment variables are required for this demo.
5. Click **Deploy**.

## Important prototype limitations

- All data is in client-side React state. Refreshing the page resets changes.
- No real authentication, API, database, email/SMS notifications, or role security exists.
- Provider verification actions are simulations and do not validate actual credentials.
- Payments, refunds, provider settlement, and the 30-minute offer window are demonstrations only. The offer timer is not a live countdown.
- Video consultation is a mock screen, not a live call.
- Use only fictional data. Do not enter real patient information.

Before a real launch, connect a backend, add server-enforced authorization, real verification processes, payment gateway integration, conflict-safe scheduling, privacy/security controls, and applicable healthcare compliance workflows.

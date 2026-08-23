# Verdant Roots — Herbal & Spice Manufacturer Website

Full-stack business website: React (Vite + Tailwind CSS v4) frontend and
Node.js/Express/MongoDB backend, built for brand awareness, product
showcase, and retail/wholesale/bulk/export lead generation.

## Project Structure

```
project/
  client/   React + Vite + Tailwind frontend
  server/   Express + MongoDB backend API
```

## Prerequisites

- Node.js 18+ (repo was built/tested against Node 24)
- A MongoDB instance — either local (`mongod`) or a free MongoDB Atlas cluster

## Backend Setup

```bash
cd server
cp .env.example .env     # then fill in MONGO_URI, JWT_SECRET, SMTP credentials, etc.
npm install
npm run seed              # creates a super admin user + one sample category/product
npm run dev                # starts on http://localhost:5000
```

Default seeded admin login (change immediately in production):
`admin@herbalspiceco.com` / `ChangeMe123!`

## Frontend Setup

```bash
cd client
npm install
npm run dev                # starts on http://localhost:5173, proxies /api to :5000
```

Visit `http://localhost:5173` for the public site and
`http://localhost:5173/admin/login` for the admin dashboard.

## What's Implemented

**Backend** — Auth (JWT + roles), Products, Categories, Blogs, Leads
(enquiries with email notification), Newsletter subscribers, Certificates,
Gallery, Site Settings, Dashboard stats, media upload, rate limiting,
Helmet/CORS/sanitization security, centralized error handling.

**Frontend** — Full public site (Home, About, Products + detail, Blog +
detail, Certifications, FAQ, Contact, legal pages), sticky/responsive nav
with search and WhatsApp CTA, enquiry forms wired to the Lead API,
newsletter signup, SEO via react-helmet-async, loading/empty/error states
throughout, and an admin dashboard (overview stats, leads management with
status updates, and CRUD for products/categories/blogs/certificates/
gallery/subscribers/settings).

## Not Implemented (Next Phase)

Per the original brief, these are intentionally deferred so the current
codebase stays clean and reviewable — the architecture (modular
controllers/services, REST APIs, component structure) is designed so none
of these require restructuring existing code:

- E-commerce / cart / payment gateway
- Distributor & dealer portals, customer dashboard
- CRM/ERP/invoicing/GST billing integration
- Multi-language support, PWA, native mobile apps
- AI chatbot, advanced analytics dashboard

## Notes

- The frontend calls `/api/*`, proxied by Vite to the backend in dev.
  In production, point the frontend's API base URL at your deployed
  backend (or reverse-proxy `/api` the same way).
- Product/blog images currently reference external URLs or values you
  provide via the admin forms; wire up the `/api/media/upload` endpoint
  in the admin UI if you want in-browser image uploads (the backend
  endpoint and Multer config are already in place).
- Email notifications require valid SMTP credentials in `server/.env`;
  lead submission still succeeds even if email sending fails.

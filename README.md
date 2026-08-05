# Swag Labs (SauceDemo)

## Application Metadata
- **Application Name:** Swag Labs (SauceDemo)
- **Service Owner:** Sauce Labs QA & Dev Enablement Group
- **Business Impact:** Critical (Global Demonstration Platform)
- **Tech Stack:** React 17, Node 24, Vite, Backtrace SDK

## Purpose
This repository contains a high-fidelity React single-page application that mirrors the SauceDemo user flow and route map for QA, demo, and technical manifest extraction use cases.

## Runtime and Integration Dependencies
- **Frontend runtime:** React 17, React Router DOM v5, Vite
- **Observability:** Backtrace React SDK
- **Security tooling:** Snyk
- **Testing:** Vitest, Cypress
- **Container delivery:** Nginx static server in multi-stage Docker build

## Internal Assets and Routing Notes
- Login and product data are mocked locally in `src/data/products.js` and `src/components/Login.jsx`.
- Application routes map to SauceDemo-compatible paths: `/`, `/index.html`, `/inventory.html`, `/cart.html`, `/checkout-step-one.html`, `/checkout-step-two.html`, and `/checkout-complete.html`.
- Upstream dependency source of truth is the Swag Labs demo experience; downstream distribution targets AWS S3 static hosting and containerized nginx serving.

## Supported User Profiles
- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

## Local Development
1. Install dependencies
2. Start the Vite dev server
3. Authenticate with one of the mock users using `secret_sauce`

## Production Build
- `npm run build` generates the static bundle in `dist/`
- `npm run test.coverage` runs unit coverage for release validation

# ASleekGeek Platform Monorepo

A modern, scalable blog and community platform built with Nx, Next.js, and microservices architecture.

## 🏗️ Architecture Overview

This monorepo contains a full-stack application with:
-**Frontend**: Next.js with Sanity CMS as well as LibreChat integration
-**Backend**: Microservices architecture (.NET/Python) deployed on GKE
-**DevOps**: GitHub Actions with Nx for CI/CD

## 📁 Project Structure

```
asleekgeek-web/
├── apps/
│   ├── frontend/                # Next.js application
│   ├── studio/                  # Sanity.io CMS Studio
│   ├── api-gateway/             # API Gateway service
│   ├── auth-service/            # Authentication microservice
│   ├── blog-service/            # Blog management service
│   ├── community-service/       # Community features service
│   ├── ai-service/              # AI/ML and LibreChat service
│   └── admin-dashboard/         # Admin interface
├── libs/
│   ├── shared/                  # Shared utilities and helpers
│   ├── ui-components/           # Reusable React components
│   ├── types/                   # TypeScript type definitions
│   ├── api-client/              # API client library
│   ├── auth/                    # Authentication utilities
│   └── configs/                 # Shared configurations
├── tools/
│   ├── docker/                  # Docker configurations
│   ├── k8s/                     # Kubernetes manifests
│   ├── scripts/                 # Build and deployment scripts
│   └── generators/              # Nx generators
├── docs/                        # Documentation
├── .github/                     # GitHub Actions workflows
├── nx.json                      # Nx configuration
├── package.json                 # Root package.json
└── tsconfig.base.json          # Base TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- kubectl (for K8s deployment)
- gcloud CLI (for GCP deployment)

### Development Setup

```bash
# Install dependencies
npm install

# Start development servers
npm run dev

# Run tests
npm run test

# Build all applications
npm run build
```

## 🛠️ Technologies

- **Frontend**: Next.js 14+, TailwindCSS, Sanity.io
- **Backend**: .NET 8, PostgreSQL, Redis
- **DevOps**: Docker, Kubernetes, GitHub Actions
- **Monitoring**: Grafana, Prometheus
- **Cloud**: Google Cloud Platform (GKE)

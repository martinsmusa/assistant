# Full-Stack Application with NestJS and Next.js

This repository contains a full-stack application with a backend built using NestJS and a frontend built using Next.js. Both applications are containerized using Docker and Docker Compose, and the setup includes a PostgreSQL database.

## Applications

### Next.js (Frontend)

The frontend application is built using Next.js and serves both public and admin interfaces.

- **Public Interface**: The public-facing pages of the website.
- **Admin Interface**: The admin panel for managing the application content and settings.

### NestJS (Backend)

The backend application is built using NestJS and serves as the API endpoint for the frontend applications. It handles business logic, authentication, and interaction with the database.

### PostgreSQL (Database)

PostgreSQL is used as the database to store application data. It is configured to be accessible by the NestJS backend.

## Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)
- pnpm: [Install pnpm](https://pnpm.io/installation)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/martinsmusa/assistant
cd assistant
```

### Run the application 
```bash
docker compose up -d
```

### This command will:

Build and start the NestJS backend with hot reload enabled.
Build and start the Next.js frontend with hot reload enabled.
Start the PostgreSQL database.
Docker Compose Configuration
The docker-compose.yml file defines three services:

- server: The NestJS backend application.
- web: The Next.js frontend application.
- db: The PostgreSQL database.

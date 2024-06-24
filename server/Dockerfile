# Dockerfile for NestJS app

FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Install dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

# Copy the rest of the application code
COPY . .

RUN pnpm run build

# Create a new user 'nodeuser' and set ownership of the app directory to 'nodeuser'
RUN adduser -D nodeuser && chown -R nodeuser /usr/src/app

# Switch to 'nodeuser'
USER nodeuser

# Expose the application port
EXPOSE 3001

# Command to run the application in production mode
CMD ["pnpm", "run", "start:prod"]

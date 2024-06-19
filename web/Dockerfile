FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# install dependencies
RUN pnpm install --frozen-lockfile

COPY . .

# build
RUN pnpm run build

# remove dev dependencies
RUN pnpm prune --production

FROM node:alpine
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

EXPOSE 3000

# Command to run the application in development mode with hot reload
CMD ["pnpm", "run", "start"]
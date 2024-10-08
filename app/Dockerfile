FROM node:18-alpine AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app/next

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
elif [ -f package-lock.json ]; then npm ci; \
elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
else echo "Lockfile not found." && exit 1; \
fi


# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app/next
COPY --from=deps /app/next/node_modules ./node_modules
COPY . .
# This will do the trick, use the corresponding env file for each environment.
COPY .env.local .env.production
RUN npm i sharp
RUN npm run build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app/next

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
# RUN npm install pm2 -g

COPY --from=builder /app/next/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/next/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/next/.next/static ./.next/static
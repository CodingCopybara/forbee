FROM node:20-alpine AS deps
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Enable pnpm via Corepack (pin pnpm 8.x)
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

FROM node:20-alpine AS builder
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

ARG NEXT_PUBLIC_GW_URL
ENV NEXT_PUBLIC_GW_URL=$NEXT_PUBLIC_GW_URL
ARG NEXT_PUBLIC_SGIS_CONSUMER_KEY
ENV NEXT_PUBLIC_SGIS_CONSUMER_KEY=$NEXT_PUBLIC_SGIS_CONSUMER_KEY

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Run as non-root for security
USER node

# Copy Next.js standalone output
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
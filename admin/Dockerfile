# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.14.0

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app/admin


FROM base as deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.yarn \
    yarn install --production --frozen-lockfile --network-timeout 100000

FROM deps as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.yarn \
    yarn install --frozen-lockfile --network-timeout 100000

COPY . .

RUN yarn build

FROM base as final

ENV NODE_ENV production

USER node

COPY package.json .
COPY nginx.conf .
COPY .env.local .env.production

COPY --from=deps /app/admin/node_modules ./node_modules
COPY --from=build /app/admin/build ./dist

FROM nginx:latest
COPY --from=final /app/admin/dist /usr/share/nginx/html/ 
COPY --from=final /app/admin/nginx.conf /etc/nginx/conf.d/nginx.conf

CMD ["nginx", "-g", "daemon off;"]


FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN corepack enable
RUN pnpm install
RUN pnpm build

CMD [ "pnpm", "start" ]

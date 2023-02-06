# ReactJS app using NextJS and Typescript

This is a [Next.js](https://nextjs.org/) project for individual purposes.

## Installation & Setup

Install node packages:

```bash
npm install
# or
yarn install
```

Configurate environment variables (copy .env.example file as .env.local and set the variables if any):

```bash
cp .env.example .env.local
```

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Additional settings

You can set up run prettier and eslint on save for comfortable work.
Or you can use eslint and prettier via terminal:

### Lint

```bash
npm run lint
# or
yarn lint
```

### Prettier

```bash
prettier --write .
```

## Testing

The app is testing every function from helpers and components are tested in shallo render mode matching the snapshot.
You can run test in application.

```bash
npm run test
# or
yarn test
```

If you want to update snapshots use this command.

```bash
npm run test -- -u
# or
yarn test -u
```

## Build

First, build the project:

```bash
npm run build
# or
yarn build
```

Start the project:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

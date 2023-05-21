This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and developed using [Webflow](https://webflow.com) and [DevLink](https://webflow.com/devlink).

## Getting Started

To get started, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Live site

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

## Backend

We created a light weight backend to serve up the content from Airtable. In order for this to work, you'll need to get a copy of the Airtable (ask Ben Parker), generate a [personal access token](https://airtable.com/developers/web/guides/personal-access-tokens) in Airtable (I used the scopes `data.records:read` and `schema.records.read`) and then in the root of your project create a `.env` file locally with the line:

```
JOBS_KEY=YOURPERSONALACCESSTOKENHERE

```

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

## Backend and environment variables

We created a light weight backend to serve up the content from Airtable. In order for this to work, you'll need to get a copy of [the Airtable](https://airtable.com/shr7X55pL1X4yDXq7), generate a [personal access token](https://airtable.com/developers/web/guides/personal-access-tokens) in Airtable (I used the scopes `data.records:read` and `schema.records.read`) and then in the root of your project create a `.env` file locally with the lines:

```
JOBS_KEY=YOURPERSONALACCESSTOKENHERE
WF_SITE_ID=YOURPERSONALWEBFLOWSITEID
WF_SITE_TOKEN=YOURPERSONALWEBFLOWSITETOKEN
```

Here you can add your Airtable token, your Webflow Site ID, and your Webflow API token.

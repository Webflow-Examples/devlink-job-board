This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and developed using [Webflow](https://webflow.com) and [DevLink](https://webflow.com/devlink).

## Getting Started

First, run the backend server:

```bash
npm run backend
# or
yarn backend
```

Then, run the development server:

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

Just add in your access token and save and then your backend should begin working.

Open [http://localhost:8000/jobs](http://localhost:8000/jobs) with your browser to see all the jobs in the Airtable base.

Open [http://localhost:8000/jobs/featured](http://localhost:8000/jobs/featured) with your browser to see the featured jobs.

Open [http://localhost:8000/jobs/:id](http://localhost:8000/jobs/:id) where `:id` is the id of an Airtable record to get a single listing.

### Backend caching

By default, caching is turned on in the backend. This means it can take up to 5 miinutes to see changes made in the Airtable to be reflected on the live site. To disable cache, delete or comment out line 15.

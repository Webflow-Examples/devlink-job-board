This is a <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> project bootstrapped with <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app" target="_blank" rel="noopener noreferrer"><code>create-next-app</code></a> and developed using <a href="https://webflow.com" target="_blank" rel="noopener noreferrer">Webflow</a> and <a href="https://webflow.com/devlink" target="_blank" rel="noopener noreferrer">DevLink</a>.

## Webflow Cloneable

You can clone the Webflow project used with this Next JS project at:

<a href="https://webflow.com/made-in-webflow/website/job-board-dl" target="_blank" rel="noopener noreferrer">https://webflow.com/made-in-webflow/website/job-board-dl</a>

Make a copy, and then download this repo and connect the two using DevLink.

Here's a Loom video to walk you through the process:

<a href="https://www.loom.com/share/ea21f62201df4e60a1f92524a28f810e" target="_blank" rel="noopener noreferrer">https://www.loom.com/share/ea21f62201df4e60a1f92524a28f810e</a>

You can also view <a href="https://docs.developers.webflow.com/docs/devlink-documentation-and-usage-guide" target="_blank" rel="noopener noreferrer">our DevLink documentation</a> to learn more about all the options, features, and supported elements.

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

Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> with your browser to view the site.

## Backend and environment variables

We created a light weight backend to serve up the content from Airtable. In order for this to work, you'll need to get a copy of <a href="https://airtable.com/shr7X55pL1X4yDXq7" target="_blank" rel="noopener noreferrer">the Airtable</a>, generate a <a href="https://airtable.com/developers/web/guides/personal-access-tokens" target="_blank" rel="noopener noreferrer">personal access token</a> in Airtable (I used the scopes `data.records:read` and `schema.records.read`) and then in the root of your project create a `.env` file locally with the lines:

```
JOBS_KEY=YOURPERSONALACCESSTOKENHERE
AIRTABLE_BASE_ID=YOURPERSONALAIRTABLEBASID
```

Here you can add:

- Your Airtable API key
- The ID of your Airtable base

Once you've added these to your `.env` file, this project should function as expected.

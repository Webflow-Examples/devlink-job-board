This is a <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> project bootstrapped with <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app" target="_blank" rel="noopener noreferrer"><code>create-next-app</code></a> and developed using <a href="https://webflow.com" target="_blank" rel="noopener noreferrer">Webflow</a> and <a href="https://webflow.com/feature/devlink" target="_blank" rel="noopener noreferrer">DevLink</a>.

## Webflow Cloneable

You can clone the Webflow project used with this Next JS project at:

<a href="https://webflow.com/made-in-webflow/website/job-board-dl" target="_blank" rel="noopener noreferrer">https://webflow.com/made-in-webflow/website/job-board-dl</a>

## Set up your local environment

> [!NOTE]
> To **preview the app locally**, run `npm install` and `npm run dev`. You do **not** need the Webflow CLI unless you you make changes to the DevLink components from the cloned Webflow site. If you do make changes, follow the steps below to update the components in the `webflow/` directory.
>
> **Job listings** stay empty until you configure the Airtable-backed API keys in `.env`—follow [Backend and environment variables](#backend-and-environment-variables) below.


Install Webflow CLI (global install is optional; you can also run the CLI without `npx` in the export step below).

```bash
npm install -g @webflow/webflow-cli
```

Log in to Webflow and select your desired workspace from the opened browser window. You can append `--force` to reset any existing authentication.

```bash
npx webflow auth login
```

Then, install the needed dependencies.

```bash
npm install
```

Sync all the Webflow components into your local filesystem. Answer the prompts to generate and configure your `webflow.json`.

```bash
npx webflow devlink export
```

Select the cloned "DevLink: Job Board" site from the sites listed.

You can also view <a href="https://developers.webflow.com/devlink/reference/overview" target="_blank" rel="noopener noreferrer">our DevLink documentation</a> to learn more about all the options, features, and supported elements.

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

You should see an error in the console:

> [!WARNING]
> `installHook.js:1  Server  Missing JOBS_KEY or AIRTABLE_BASE_ID — job data unavailable`

This is because we have not set up the backend yet.

## Backend and environment variables

We created a light weight backend to serve up the content from Airtable. In order for this to work, you'll need to get a copy of <a href="https://airtable.com/shr7X55pL1X4yDXq7" target="_blank" rel="noopener noreferrer">the Airtable</a>, generate a <a href="https://airtable.com/developers/web/guides/personal-access-tokens" target="_blank" rel="noopener noreferrer">personal access token</a> in Airtable (I used the scopes `data.records:read` and `schema.bases.read`) and then in the root of your project look for the `.env` file and add the following lines:

```
JOBS_KEY=YOURPERSONALACCESSTOKENHERE
AIRTABLE_BASE_ID=YOURPERSONALAIRTABLEBASID
```

Here you can add:

- Your Airtable API key
- The ID of your Airtable base - this ID can be extracted from the URL when you open your base in Airtable. It will look something like this:

```
    https://airtable.com/appXXXXXXXXXXXXXXX/123455678abcdefghi/...
                         ^^^^^^^^^^^^^^^^^^
                         This is your Base ID
 ```

Once you've added these to your `.env` file, you should be able to run the development server and see the job data populate the site.

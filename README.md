# Suraj Mehra - Resume Website

A modern, responsive resume website built with Next.js and TailwindCSS.

## Deployment Guide - AWS Amplify

This guide will walk you through deploying this Next.js application to AWS Amplify, which provides a simple and efficient hosting solution with continuous deployment.

### Prerequisites

- An AWS account
- GitHub/GitLab/BitBucket repository with your code
- Node.js and npm installed locally

### Step 1: Prepare Your Repository

Make sure your code is pushed to a GitHub, GitLab, or BitBucket repository.

### Step 2: Set Up AWS Amplify

1. Log in to the [AWS Management Console](https://aws.amazon.com/console/)
2. Search for "Amplify" and select the service
3. Click "New app" or "Create app" on the Amplify Console
4. Choose "Host web app"
5. Select your repository provider (GitHub, GitLab, BitBucket)
6. Follow the prompts to authorize AWS Amplify to access your repositories
7. Select the repository and branch you want to deploy

### Step 3: Configure Build Settings

AWS Amplify will automatically detect that your project is a Next.js application, but you may need to configure the build settings.

In the build settings page, use the following configuration:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 4: Advanced Settings (Optional)

You can configure environment variables if needed:

1. In the Amplify console, go to "App settings" > "Environment variables"
2. Add any environment variables your application needs

### Step 5: Deploy

Click "Save and deploy" to start the deployment process. AWS Amplify will:

1. Clone your repository
2. Run the build commands
3. Deploy your application to their global CDN

### Step 6: Set Up a Custom Domain (Optional)

After deployment, you can set up a custom domain:

1. In the Amplify console, go to "App settings" > "Domain management"
2. Click "Add domain"
3. Follow the instructions to configure your domain with AWS Amplify

### Continuous Deployment

Once set up, AWS Amplify will automatically redeploy your application whenever you push changes to the configured branch.

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/components`: React components
- `/src/app`: Next.js app router pages
- `/public`: Static assets like images

## Technologies Used

- Next.js
- React
- TailwindCSS
- TypeScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

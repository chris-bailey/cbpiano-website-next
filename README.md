# Chris Bailey - New Age Piano Website (on Next.js)
## Overview
This repository contains the source code for my [New Age Piano Website](https://chrisbaileypiano.com/) currently running on **Vercel**, which was ported from **vanilla React.js to Next.js 14**.

For comparison, the original website's code is [shown here in basic HTML/CSS](https://github.com/chris-bailey/cbpiano-website-html). It was then [ported to React](https://github.com/chris-bailey/cbpiano-website-react), before being finally ported to Next.js.

Next.js is a powerful React framework that provides built-in support for server-side rendering (SSR), static site generation (SSG), and more.

## Technologies

### Frameworks and Libraries
- **Next.js 14**
- **React.js**

### Languages
- **TypeScript**
- **JavaScript**
- **HTML**
- **CSS**
- **Sassy CSS (Sass)**

### Platform and Tools
- **Node.js**
- **Vercel**

## Next.js - Key Features
- **Enhanced React**: Next.js elevates React with advanced features.
- **Optimized Performance**: Increases speed and responsiveness of web applications.
- **SEO-Friendly SSR**: Server-side rendering of the first page served for better SEO scores.
- **Static Site Generation**: Easily create static, SEO-optimized sites.
- **Modern Development Tools**: Incorporates cutting-edge tools for web development. It has such a great debugging environment!

## Prerequisites
[Node.js 18.17](https://nodejs.org/en) or later.


## Installing Dependencies
```bash
npm install
```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production
There are multiple ways to deploy a Next.js application. Thankfully, Next.js has great [deployment documentation](https://nextjs.org/docs/deployment).

This project has been deployed on Vercel's free Hobby tier.

### Vercel
Follow these steps to deploy your Next.js project to Vercel:

1. **Connect to Vercel**:
   - Sign in to your Vercel account.
   - Create a new project by importing your GitHub repository.

2. **Set Environment Variables**:
   - While configuring the imported project, within the **Environment Variables** section:
   - Add the environment variable `NEXT_PUBLIC_MEASUREMENT_ID` to use Google Analytics.

3. **Update DNS Records**:
   - After the deployment is complete, you will need to update the DNS records for your domain.
   - Go to your domain registrar's website and update the DNS settings to point to Vercel's servers.
   - Follow the instructions provided by Vercel to configure the DNS records correctly.

4. **Verify Deployment**:
   - Once the DNS changes propagate, your website will be live on your custom domain.
   - Visit your domain to verify that the deployment was successful and everything is working as expected.

### Universal Rendering
With this type of deployment, your website will be running on Node.js. When a user or a web crawler hits your website, the server will **quickly generate the first HTML page** and send it in the response.

This fast server-side rendering (SSR) of the initial content makes the Google crawler happy, which gives a boost to the website's SEO ranking; and it is also highly performant for users on less powerful devices.

After this initial page is sent, the rest of the data is downloaded in the background. This step is called **hydration** as the page fills with all of the data it needs to convert into a **React Single Page Application** (SPA).

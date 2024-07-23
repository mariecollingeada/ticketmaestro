# Ticketmaestro 🎫

Preview me! `⇧⌘V` (Mac)  or `Ctrl+Shift+V` (Windows)

## Problem

Customers in the North West region need a way to discover their local events. We need a web interface for customers to search and view event details in their local area. Ticketmaster has an API it uses to expose event listing data in the UK: we're going to build something that resembles the [ticketmaster website](https://www.ticketmaster.co.uk/search?q=jazz&sort=date&startDate=2024-08-26&endDate=2024-08-26&region=605)

## Setup and warmup

### Setup

- Get into pairs
- One person _fork_ this repo
- Check you can run a codespace for this repo
- Run `npm run dev` to start your development server

## Development server

You can start the development server using the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

### Warmup

- Someone share their screen
- Visit the [ticketmaster website](https://www.ticketmaster.co.uk/search?q=jazz&sort=date&startDate=2024-08-26&endDate=2024-08-26&region=605)
- Check you can view an event like this:
![alt text](image.png)
- Write down a list of all the **properties** of this event.
E.g. event name, city, etc...
- Create a JS file in this directory and create a [JS object](https://javascript.info/object) with the properties you listed in the previous step

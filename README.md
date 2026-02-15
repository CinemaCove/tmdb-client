# @cinemacove/tmdb-client

TypeScript client for The Movie Database (TMDB) API.

## Features
- ESM + CJS bundles
- Full type safety
- Axios-based, easy to mock/test

## Install
```bash
npm install @cinemacove/tmdb-client
```

## Usage
```typescript
import TmdbClient from '@cinemacove/tmdb-client/v3';
const tmdb = new TmdbClient('your-api-key');
const movie = await tmdb.movies.getDetails(550);
```

## Attribution Requirement

This library consumes data from the JustWatch API.

⚠️ **Attribution Required**  
Any application displaying data obtained through this library related with watch providers **must attribute JustWatch** as the data source, in accordance with JustWatch’s API terms.

For instance, if you are using the `getWatchProviders` method from the `MovieEndpoint`, you must attribute JustWatch as the data source.

If you do not use those methods to display data, no attribution is required.

Example attribution:
> Data provided by JustWatch

# @cinemacove/tmdb-client

TypeScript client for The Movie Database (TMDB) API v3.

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
import TmdbClient from '@cinemacove/tmdb-client';
const tmdb = new TmdbClient('your-api-key');
const movie = await tmdb.movies.getDetails(550);
```
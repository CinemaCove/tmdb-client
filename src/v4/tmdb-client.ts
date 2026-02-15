import { AccountEndpoint, AuthEndpoint, ListEndpoint } from './features';

import { AxiosHttpClient, HttpClient } from '#core';

export class TmdbClient {
    private readonly httpClient: HttpClient;

    public readonly account: AccountEndpoint;
    public readonly authentication: AuthEndpoint;
    public readonly list: ListEndpoint;
    constructor(accessToken: string, baseUrl = 'https://api.themoviedb.org/4') {
        this.httpClient = new AxiosHttpClient({ accessToken }, baseUrl);

        this.account = new AccountEndpoint(this.httpClient);
        this.authentication = new AuthEndpoint(this.httpClient);
        this.list = new ListEndpoint(this.httpClient);
    }
}

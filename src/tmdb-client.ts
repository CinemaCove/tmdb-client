import {
    AccountEndpoint,
    AuthenticationEndpoint,
    CertificationsEndpoint,
    ChangesEndpoint,
    ConfigurationEndpoint,
    MoviesEndpoint,
} from './features';
import { HttpClient } from './http-client.interface';

export class TmdbClient {
    public readonly account: AccountEndpoint;
    public readonly authentication: AuthenticationEndpoint;
    public readonly certification: CertificationsEndpoint;
    public readonly changes: ChangesEndpoint;

    public readonly configuration: ConfigurationEndpoint;

    // public readonly movies: MoviesEndpoint;

    constructor(private httpClient: HttpClient) {
        this.account = new AccountEndpoint(this.httpClient);
        this.authentication = new AuthenticationEndpoint(this.httpClient);
        this.certification = new CertificationsEndpoint(this.httpClient);
        this.changes = new ChangesEndpoint(this.httpClient);
        this.configuration = new ConfigurationEndpoint(this.httpClient);
        // this.movies = new MoviesEndpoint(this.httpClient);
    }
}

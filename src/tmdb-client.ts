import {
    AccountEndpoint,
    AuthenticationEndpoint,
    CertificationsEndpoint,
    ChangesEndpoint,
    CollectionsEndpoint,
    CompaniesEndpoint,
    ConfigurationEndpoint,
    CreditsEndpoint,
    DiscoverEndpoint,
    FindEndpoint,
} from './features';
import { HttpClient } from './http-client.interface';

export class TmdbClient {
    public readonly account: AccountEndpoint;
    public readonly authentication: AuthenticationEndpoint;
    public readonly certification: CertificationsEndpoint;
    public readonly changes: ChangesEndpoint;
    public readonly collections: CollectionsEndpoint;
    public readonly companies: CompaniesEndpoint;
    public readonly configuration: ConfigurationEndpoint;
    public readonly credits: CreditsEndpoint;
    public readonly discover: DiscoverEndpoint;
    public readonly find: FindEndpoint;
    // public readonly movies: MoviesEndpoint;

    constructor(private httpClient: HttpClient) {
        this.account = new AccountEndpoint(this.httpClient);
        this.authentication = new AuthenticationEndpoint(this.httpClient);
        this.certification = new CertificationsEndpoint(this.httpClient);
        this.changes = new ChangesEndpoint(this.httpClient);
        this.collections = new CollectionsEndpoint(this.httpClient);
        this.companies = new CompaniesEndpoint(this.httpClient);
        this.configuration = new ConfigurationEndpoint(this.httpClient);
        this.credits = new CreditsEndpoint(this.httpClient);
        this.discover = new DiscoverEndpoint(this.httpClient);
        this.find = new FindEndpoint(this.httpClient);
        // this.movies = new MoviesEndpoint(this.httpClient);
    }
}

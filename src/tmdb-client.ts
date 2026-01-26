import {
    AccountEndpoint,
    AuthenticationEndpoint,
    CertificationEndpoint,
    ChangesEndpoint,
    CollectionEndpoint,
    CompanyEndpoint,
    ConfigurationEndpoint,
    CreditEndpoint,
    DiscoverEndpoint,
    FindEndpoint,
    GenreEndpoint,
    GuestSessionEndpoint,
    KeywordEndpoint,
    ListEndpoint,
    MovieEndpoint,
    NetworkEndpoint,
    PersonEndpoint,
    ReviewEndpoint,
    SearchEndpoint,
} from './features';
import { HttpClient } from './http-client.interface';

export class TmdbClient {
    public readonly account: AccountEndpoint;
    public readonly authentication: AuthenticationEndpoint;
    public readonly certification: CertificationEndpoint;
    public readonly changes: ChangesEndpoint;
    public readonly collection: CollectionEndpoint;
    public readonly company: CompanyEndpoint;
    public readonly configuration: ConfigurationEndpoint;
    public readonly credit: CreditEndpoint;
    public readonly discover: DiscoverEndpoint;
    public readonly find: FindEndpoint;
    public readonly genre: GenreEndpoint;
    public readonly guestSession: GuestSessionEndpoint;
    public readonly keyword: KeywordEndpoint;
    public readonly list: ListEndpoint;
    public readonly movie: MovieEndpoint;
    public readonly network: NetworkEndpoint;
    public readonly person: PersonEndpoint;
    public readonly review: ReviewEndpoint;
    public readonly search: SearchEndpoint;

    constructor(private httpClient: HttpClient) {
        this.account = new AccountEndpoint(this.httpClient);
        this.authentication = new AuthenticationEndpoint(this.httpClient);
        this.certification = new CertificationEndpoint(this.httpClient);
        this.changes = new ChangesEndpoint(this.httpClient);
        this.collection = new CollectionEndpoint(this.httpClient);
        this.company = new CompanyEndpoint(this.httpClient);
        this.configuration = new ConfigurationEndpoint(this.httpClient);
        this.credit = new CreditEndpoint(this.httpClient);
        this.discover = new DiscoverEndpoint(this.httpClient);
        this.find = new FindEndpoint(this.httpClient);
        this.genre = new GenreEndpoint(this.httpClient);
        this.guestSession = new GuestSessionEndpoint(this.httpClient);
        this.keyword = new KeywordEndpoint(this.httpClient);
        this.list = new ListEndpoint(this.httpClient);
        this.movie = new MovieEndpoint(this.httpClient);
        this.network = new NetworkEndpoint(this.httpClient);
        this.person = new PersonEndpoint(this.httpClient);
        this.review = new ReviewEndpoint(this.httpClient);
        this.search = new SearchEndpoint(this.httpClient);
    }
}

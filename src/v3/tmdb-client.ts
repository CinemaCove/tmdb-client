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
    MovieListEndpoint,
    NetworkEndpoint,
    PersonEndpoint,
    PersonListEndpoint,
    ReviewEndpoint,
    SearchEndpoint,
    TrendingEndpoint,
    TvEpisodeEndpoint,
    TvEpisodeGroupEndpoint,
    TvSeasonEndpoint,
    TvShowEndpoint,
    TvShowListEndpoint,
    WatchProviderEndpoint,
} from './features';

import { AxiosHttpClient, HttpClient } from '#core';

export class TmdbClient {
    private readonly httpClient: HttpClient;

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
    public readonly movieList: MovieListEndpoint;
    public readonly network: NetworkEndpoint;
    public readonly person: PersonEndpoint;
    public readonly personList: PersonListEndpoint;
    public readonly review: ReviewEndpoint;
    public readonly search: SearchEndpoint;
    public readonly trending: TrendingEndpoint;
    public readonly tvEpisode: TvEpisodeEndpoint;
    public readonly tvSeason: TvSeasonEndpoint;
    public readonly tvShow: TvShowEndpoint;
    public readonly tvShowList: TvShowListEndpoint;
    public readonly tvEpisodeGroup: TvEpisodeGroupEndpoint;
    public readonly watchProvider: WatchProviderEndpoint;

    constructor(
        apiKey: string | Readonly<{ accessToken: string }>,
        baseUrl = 'https://api.themoviedb.org/3'
    ) {
        this.httpClient = new AxiosHttpClient(apiKey, baseUrl);

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
        this.movieList = new MovieListEndpoint(this.httpClient);
        this.network = new NetworkEndpoint(this.httpClient);
        this.person = new PersonEndpoint(this.httpClient);
        this.personList = new PersonListEndpoint(this.httpClient);
        this.review = new ReviewEndpoint(this.httpClient);
        this.search = new SearchEndpoint(this.httpClient);
        this.trending = new TrendingEndpoint(this.httpClient);
        this.tvEpisode = new TvEpisodeEndpoint(this.httpClient);
        this.tvEpisodeGroup = new TvEpisodeGroupEndpoint(this.httpClient);
        this.tvSeason = new TvSeasonEndpoint(this.httpClient);
        this.tvShow = new TvShowEndpoint(this.httpClient);
        this.tvShowList = new TvShowListEndpoint(this.httpClient);
        this.watchProvider = new WatchProviderEndpoint(this.httpClient);
    }
}

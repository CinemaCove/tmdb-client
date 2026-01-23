import {TmdbClient} from "../../tmdb-client";
import {
    ConfigurationCountry,
    ConfigurationDetails,
    ConfigurationJob,
    ConfigurationLanguage,
    ConfigurationTimezone
} from "./configuration.types";

export class ConfigurationEndpoint {
    public constructor(private client: TmdbClient) {
    }

    // Query the API configuration details.
    public async getDetails(): Promise<ConfigurationDetails> {
        const res = await this.client.getHttp().get(`/configuration`);

        return res.data as ConfigurationDetails;
    }

    // Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
    public async getCountries(options: {
        language?: string
    } = {}): Promise<ConfigurationCountry[]> {
        const params: Record<string, any> = {};
        params.language = options.language || undefined;

        const res = await this.client.getHttp().get(`/configuration/countries`, {
            params
        });

        return res.data;
    }

    // Get the list of the jobs and departments we use on TMDB.
    public async getJobs(): Promise<ConfigurationJob[]> {
        const res = await this.client.getHttp().get(`/configuration/jobs`);

        return res.data;
    }

    // Get the list of languages (ISO 639-1 tags) used throughout TMDB.
    public async getLanguages(): Promise<ConfigurationLanguage[]> {
        const res = await this.client.getHttp().get(`/configuration/languages`);

        return res.data;
    }

    // Get a list of the officially supported translations on TMDB.
    public async getPrimaryTranslations(): Promise<string[]> {
        const res = await this.client.getHttp().get(`/configuration/primary_translations`);

        return res.data;
    }

    // Get the list of timezones used throughout TMDB.
    public async getTimezones(): Promise<ConfigurationTimezone[]> {
        const res = await this.client.getHttp().get(`/configuration/timezones`);

        return res.data;
    }

}
import {
    ConfigurationCountry,
    ConfigurationDetails,
    ConfigurationJob,
    ConfigurationLanguage,
    ConfigurationTimezone,
} from './configuration.types';

import { HttpClient } from '../../http-client.interface';

export class ConfigurationEndpoint {
    public constructor(private client: HttpClient) {}

    // Query the API configuration details.
    public async getDetails(): Promise<ConfigurationDetails> {
        return await this.client.get(`/configuration`);
    }

    // Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
    public async getCountries(
        options: {
            readonly language?: string;
        } = {}
    ): Promise<ConfigurationCountry[]> {
        return await this.client.get(`/configuration/countries`, options);
    }

    // Get the list of the jobs and departments we use on TMDB.
    public async getJobs(): Promise<ConfigurationJob[]> {
        return await this.client.get(`/configuration/jobs`);
    }

    // Get the list of languages (ISO 639-1 tags) used throughout TMDB.
    public async getLanguages(): Promise<ConfigurationLanguage[]> {
        return await this.client.get(`/configuration/languages`);
    }

    // Get a list of the officially supported translations on TMDB.
    public async getPrimaryTranslations(): Promise<string[]> {
        return await this.client.get(`/configuration/primary_translations`);
    }

    // Get the list of timezones used throughout TMDB.
    public async getTimezones(): Promise<ConfigurationTimezone[]> {
        return await this.client.get(`/configuration/timezones`);
    }
}

import {HttpClient} from "../../http-client.interface";
import {
    CertificationMovieCountry,
    CertificationMovieEntry,
    CertificationTVCountry,
    CertificationTVEntry,
} from './certification.types';

export class CertificationEndpoint {
    public constructor(private client: HttpClient) {}

    // Get an up to date list of the officially supported movie certifications on TMDB
    public async getMovieCertifications(): Promise<{
        readonly certifications: {
            readonly [key in CertificationMovieCountry]: CertificationMovieEntry[];
        };
    }> {
        return await this.client.get(`/certification/movie/list`);
    }

    // Get an up to date list of the officially supported TV certifications on TMDB
    public async getTVCertifications(): Promise<{
        readonly certifications: {
            readonly [key in CertificationTVCountry]: CertificationTVEntry[];
        };
    }> {
        return await this.client.get(`/certification/tv/list`);
    }
}
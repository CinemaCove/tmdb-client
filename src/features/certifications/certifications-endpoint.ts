import {HttpClient} from "../../http-client.interface";
import {
    CertificationsMovieCountry,
    CertificationsMovieItem,
    CertificationsTVCountry,
    CertificationsTVItem,
} from './certifications.types';

export class CertificationsEndpoint {
    public constructor(private client: HttpClient) {}

    // Get an up to date list of the officially supported movie certifications on TMDB
    public async getMovieCertifications(): Promise<{
        readonly certifications: {
            readonly [key in CertificationsMovieCountry]: CertificationsMovieItem[];
        };
    }> {
        return await this.client.get(`/certification/movie/list`);
    }

    // Get an up to date list of the officially supported TV certifications on TMDB
    public async getTVCertifications(): Promise<{
        readonly certifications: {
            readonly [key in CertificationsTVCountry]: CertificationsTVItem[];
        };
    }> {
        return await this.client.get(`/certification/tv/list`);
    }
}
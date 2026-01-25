import { HttpClient } from '../../http-client.interface';

import {
    CertificationMovieCertificationsResult,
    CertificationTVCertificationsResult,
} from './certification.types';

export class CertificationEndpoint {
    public constructor(private readonly client: HttpClient) {}

    /**
     *  Get an up to date list of the officially supported movie certifications on TMDB
     */
    public async getMovieCertifications(): Promise<CertificationMovieCertificationsResult> {
        return await this.client.get(`/certification/movie/list`);
    }

    /**
     *  Get an up to date list of the officially supported TV certifications on TMDB
     */
    public async getTVCertifications(): Promise<CertificationTVCertificationsResult> {
        return await this.client.get(`/certification/tv/list`);
    }
}

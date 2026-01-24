import { HttpClient } from '../../http-client.interface';
import {
    CertificationsMovieCertificationsResult,
    CertificationsTVCertificationsResult,
} from './certifications.types';

export class CertificationsEndpoint {
    public constructor(private client: HttpClient) {}

    // Get an up to date list of the officially supported movie certifications on TMDB
    public async getMovieCertifications(): Promise<CertificationsMovieCertificationsResult> {
        return await this.client.get(`/certification/movie/list`);
    }

    // Get an up to date list of the officially supported TV certifications on TMDB
    public async getTVCertifications(): Promise<CertificationsTVCertificationsResult> {
        return await this.client.get(`/certification/tv/list`);
    }
}
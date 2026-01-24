import {HttpClient} from "../../http-client.interface";
import {
    CompaniesAlternativeNamesResult,
    CompaniesDetailsResult,
    CompaniesImagesResult,
} from './companies.types';

export class CompaniesEndpoint {
    public constructor(private client: HttpClient) {}

    // Get the company details by ID
    public async getDetails(companyId: number): Promise<CompaniesDetailsResult> {
        return await this.client.get(`/company/${companyId}`);
    }

    // Get the company alternative names by ID
    public async getAlternativeNames(companyId: number): Promise<CompaniesAlternativeNamesResult> {
        return await this.client.get(`/company/${companyId}/alternative_names`);
    }

    // Get the company logos by id
    public async getImages(companyId: number): Promise<CompaniesImagesResult> {
        return await this.client.get(`/company/${companyId}/images`);
    }
}
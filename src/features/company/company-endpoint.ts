import {HttpClient} from "../../http-client.interface";
import {
    CompanyAlternativeNamesResult,
    CompanyDetailsResult,
    CompanyImagesResult,
} from './company.types';

export class CompanyEndpoint {
    public constructor(private client: HttpClient) {}

    // Get the company details by ID
    public async getDetails(companyId: number): Promise<CompanyDetailsResult> {
        return await this.client.get(`/company/${companyId}`);
    }

    // Get the company alternative names by ID
    public async getAlternativeNames(companyId: number): Promise<CompanyAlternativeNamesResult> {
        return await this.client.get(`/company/${companyId}/alternative_names`);
    }

    // Get the company logos by id
    public async getImages(companyId: number): Promise<CompanyImagesResult> {
        return await this.client.get(`/company/${companyId}/images`);
    }
}
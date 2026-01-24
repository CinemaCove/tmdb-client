import { HttpClient } from '../../http-client.interface';

export class FindEndpoint {
    public constructor(private readonly client: HttpClient) {
    }
}
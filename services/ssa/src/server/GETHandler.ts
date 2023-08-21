import { IncomingMessage, ServerResponse } from "http";
import { QueryRegistry } from "../service/query-registry/QueryRegistry";
import fs from 'fs';
export class GETHandler {
    public static async handle(req: IncomingMessage, res: ServerResponse, solid_server_url: string, query_registry: QueryRegistry, endpoint_queries: any, from_timestamp: number, to_timestamp: number) {
        if (req.url !== undefined) {            
            if (req.url.includes('avgHR6')) {
                query_registry.register_query(endpoint_queries.get_query('avgHR6', new Date(from_timestamp), new Date(to_timestamp)), solid_server_url, query_registry, from_timestamp, to_timestamp);
            }
            else if (req.url.includes('/averageHRPatient1')) {
                query_registry.register_query(endpoint_queries.get_query('averageHRPatient1', new Date(from_timestamp), new Date(to_timestamp)), solid_server_url, query_registry, from_timestamp, to_timestamp);
            }
            else if (req.url.includes('/averageHRPatient2')) {
                query_registry.register_query(endpoint_queries.get_query('averageHRPatient2', new Date(from_timestamp), new Date(to_timestamp)), solid_server_url, query_registry, from_timestamp, to_timestamp);
            }
            else {
                const file = fs.readFileSync('dist/static/index.html');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(file.toString());
            }
        }

    }
}
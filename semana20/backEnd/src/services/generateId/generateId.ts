import { v4 } from "uuid";
import { IdGeneratorGateway } from "../../business/gateways/idGenerator/idGeneratorGateway";

export class GenerateID implements IdGeneratorGateway {
    public generateId(): string {
        return v4()
    }
}
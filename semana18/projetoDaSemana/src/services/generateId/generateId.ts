import { IdGeneratorGateway } from "../../business/gateways/idGenerator/idGeneratorGatewy";
import { v4 } from "uuid";

export class GenerateID implements IdGeneratorGateway {
    generateId() {
        return v4()
    }
}
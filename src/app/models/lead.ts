import { Source } from "./source";
import { Status } from "./status";
import { Unit } from "./unit";

export class Lead {

    constructor() {
        
    }
    id: number;
    link: string;
    phone: string;
    source_id: number;
    unit_id: number;
    user_id: number;
    is_processed: boolean;
    is_express_delivery: boolean;
    is_add_sale: boolean;
    count_create: boolean;
    status_id: boolean;
    created_at: string;
    source: Source;
    unit: Unit;
    status: Status;
}
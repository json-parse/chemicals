export class Entry{
    _id: string;
    date: Date;
    inOut: number;
    type: number;
    quantity: number;
    warehouse: number;
    selector?: string;
    message?: string;
}

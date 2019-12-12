import * as moment from "moment";

export class Post {
    name: string;
    text: string;
    date: moment.Moment

    constructor(
        name: string,
        text: string,
        date: moment.Moment
        ) {

    }
}


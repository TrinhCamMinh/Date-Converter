import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { parseISO, fromUnixTime } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Classify Date format type based on regex (Regular Expression)
// Regular expressions for different date formats
//👉 ISO: 2023-08-02T18:30:00Z
//👉 Timestamp: 1690992600
//👉 RFC 3339: 2023-08-02T18:30:00Z
//👉 RFC 2822: Mon, 02 Aug 2023 18:30:00 GMT
//👉 UTC: 2023-08-02 18:30:00 UTC
const classifyDateFormatType = (date: string): string => {
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
    const timestampRegex = /^\d{10}(\.\d{3})?$/;
    const rfc3339Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
    const rfc2822Regex =
        /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d{1,2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4} \d{2}:\d{2}:\d{2} (?:GMT|UTC)?(?:[+-]\d{4})?$/;
    const utcRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} UTC$/;

    switch (true) {
        case isoRegex.test(date):
            return 'ISO';
        case timestampRegex.test(date):
            return 'Timestamp';
        case rfc3339Regex.test(date):
            return 'RFC 3339';
        case rfc2822Regex.test(date):
            return 'RFC 2822';
        case utcRegex.test(date):
            return 'UTC';
        default:
            return 'Local';
    }
};

// Convert date to different format using date-fns package | Date builtin
export const convertDate = (date: string): Date => {
    const dateType: string = classifyDateFormatType(date);

    switch (dateType.toLocaleLowerCase()) {
        case 'iso': {
            const iso: Date = parseISO(date);
            return iso;
        }
        case 'timestamp': {
            const timeStamp: Date = fromUnixTime(1330515905);
            return timeStamp;
        }
        //💡 Default case includes:
        //💡 RFC 3339 | RFC2822 | UTC | Local | YYYY/MM/DD | MM-DD-YYYY | DD-MM-YYYY
        default:
            throw new Error('Invalid Date format');
    }
};

/* eslint-disable indent */
type FormatDateType = 'yyyy-mm-dd' | 'dd-mm-aaaa' | 'dd/mm/aaaa';
type FormatDiffType = 'YY';

export const formatDate = (isoString?: string, format?: FormatDateType): number | string => {
    const newDate = new Date(new Date(isoString || new Date()).setUTCHours(3));

    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');

    switch (format) {
        case 'yyyy-mm-dd': return `${year}-${month}-${day}`;
        case 'dd-mm-aaaa': return `${day}-${month}-${year}`;
        case 'dd/mm/aaaa': return `${day}/${month}/${year}`;
        default: return newDate.getTime()
    }
}

export const calculateDiff = (isoString: string, format: FormatDiffType): string => {
    const pastDate = formatDate(isoString) as number;
    const currentDate = formatDate() as number;
    const diffDate = currentDate - pastDate;

    const diffYear = Math.floor(diffDate / (1000 * 3600 * 24 * 365))

    switch (format) {
        case 'YY': return diffYear.toString();
        default: return '00';
    }
}
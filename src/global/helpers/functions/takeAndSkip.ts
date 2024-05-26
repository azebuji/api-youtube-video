export function takeAndSkip(page: number, rows: number) {
    const itemsPerPage = rows;
    const skip = (page - 1) * itemsPerPage;

    return { take: itemsPerPage, skip }
}
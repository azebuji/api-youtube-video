export function chunkArray(array: Array<string>, chunkSize: number) {
    let chunks: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
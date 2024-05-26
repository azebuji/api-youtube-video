export function convertISO8601ToMs(duration: string): number {
    const time_extractor = /^P([0-9]*D)?T([0-9]*H)?([0-9]*M)?([0-9]*S)?$/i;
    const extracted = time_extractor.exec(duration);
    if (extracted) {
        const days = parseInt(extracted[1], 10) || 0;
        const hours = parseInt(extracted[2], 10) || 0;
        const minutes = parseInt(extracted[3], 10) || 0;
        const totalMinutes = days * 24 * 60 + hours * 60 + minutes;
        return totalMinutes;
    }
    return 0;
}
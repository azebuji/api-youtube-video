export function getMostUsedWords(videos: { title: string; description: string }[]) {
    const wordCounts: { [word: string]: number } = {};
    const commonWords = new Set([
        "a", "o", "um", "uma", "para", "com", "de", "do", "da", "no", "na", "em", "por",
        "se", "que", "e", "é", "são", "ao", "à", "os", "as", "nao", "não", "ou", "em", "por", "nos",
        "nas", "pelo", "pela", "pelos", "pelas", "como", "mas", "para", "mais", "muito", "ainda", "também",
        "a", "an", "the", "and", "or", "of", "in", "on", "at", "for", "to", "with", "by", "from", "la", "en"
    ]);

    videos.forEach(video => {
        const words = (video.title + ' ' + video.description).split(/\s+/);
        words.forEach(word => {
            word = word.toLowerCase().replace(/[^\wà-ú]/g, '');
            if (word && !commonWords.has(word)) {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
            }
        });
    });

    const sortedWords: [string, number][] = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
    return sortedWords.slice(0, 5).map(entry => entry[0]);
}

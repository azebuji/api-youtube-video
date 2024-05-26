export function calculateDaysToWatch(videos, dailyLimits) {
    let days = 0;
    let currentDayTime = dailyLimits[0];

    // Loop para os 200 primeiros vídeos
    for (let i = 0; i < Math.min(videos.length, 200); i++) {
        const video = videos[i];
        const duration = parseInt(video.duration); // Converter a duração para número

        // Verificar se o vídeo pode ser assistido no mesmo dia
        if (duration <= currentDayTime) {
            currentDayTime -= duration; // Reduzir o tempo disponível no dia
        } else {
            // Se não puder ser assistido, passar para o próximo dia
            days++;
            if (duration > dailyLimits[days]) {
                // Ignorar o vídeo se a duração for maior que o limite diário
                continue;
            }
            currentDayTime = dailyLimits[days] - duration; // Reduzir o tempo disponível no próximo dia
        }
    }

    // Verificar se há tempo restante no último dia
    if (currentDayTime < dailyLimits[days]) {
        days++;
    }

    return days;
}

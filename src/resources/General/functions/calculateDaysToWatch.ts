export function calculateDaysToWatch(videos, dailyLimits) {
    let days = 0;
    let currentDay = 0;
    let currentDayTime = dailyLimits[currentDay];

    for (let i = 0; i < Math.min(videos.length, 200); i++) {
        const video = videos[i];
        const duration = parseInt(video.duration);


        if (duration > Math.max(...dailyLimits)) {
            continue;
        }


        if (duration <= currentDayTime) {
            currentDayTime -= duration;
        } else {

            while (duration > currentDayTime) {
                days++;
                currentDay++;
                if (currentDay >= dailyLimits.length) {
                    currentDay = 0;
                }
                currentDayTime = dailyLimits[currentDay];

                if (duration > currentDayTime) {
                    continue;
                }
            }
            currentDayTime -= duration;
        }
    }

    if (currentDayTime < dailyLimits[currentDay]) {
        days++;
    }

    return days;
}

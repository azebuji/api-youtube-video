import axios from "axios";

import jsonDurationListVideos from './dataMocada/listDetailedVideos.json'
import jsonListVideos from './dataMocada/listVideos.json';
import { calculateDaysToWatch } from "./functions/calculateDaysToWatch";
import { convertISO8601ToMs } from "./functions/convertISO8601ToMs";
import { getMostUsedWords } from "./functions/getMostUsedWords";
import { Parameters, VideoListResponse } from "./interfaces";

export async function findVideos({ search, dailyLimits, type }: Parameters) {

    const qtdVideosInJson = 10

    const maxResultsPerPage = 10; //limite da api do google youtube é 10
    const totalResults = 10; //máximo de resultados por consulta, no caso da regra é 200 por véz
    const numPages = Math.ceil(totalResults / maxResultsPerPage); //Faz o cálculo do número de páginas
    let response;

    let videos: VideoListResponse['items'] = []; // Array para armazenar todos os vídeos
    let videosFormated: Array<{
        title: string;
        description: string;
        duration: string;
    }>
    let videosId: Array<string> = [] //Array para armazenar todos os ids dos videos

    if (type === "pattern") {
        for (let page = 0; page <= qtdVideosInJson; page++) {

            videosId = videosId.concat(jsonListVideos.items[page].id.videoId)

        }
        for (let page = 0; page <= videosId.length; page++) {
            let video = jsonDurationListVideos.items.find((elem) => elem.id === videosId[page]);

            if (video) {
                const durationMinutes = convertISO8601ToMs(video?.contentDetails.duration);
                video.contentDetails.duration = String(convertISO8601ToMs(video.contentDetails.duration));
                videos = videos.concat(video)
            }
        }
    } else {
        for (let page = 1; page <= numPages; page++) {
            response = await axios.get(process.env.GOOGLE_YOUTUBE_API_URL + "/search", {
                params: {
                    type: 'video',
                    part: 'snippet',
                    q: search,
                    key: process.env.GOOGLEKEY,
                    pageToken: 'CAoQAA',
                    maxResults: maxResultsPerPage,
                },
            });

            //console.log(response.data)
            videosId = videosId.concat(response.data.items.map(item => item.id.videoId));

        }

        for (let page = 1; page <= numPages; page++) {
            response = await axios.get(process.env.GOOGLE_YOUTUBE_API_URL + "/videos", {
                params: {
                    type: 'video',
                    part: 'snippet,contentDetails',
                    id: videosId.join(','),
                    key: process.env.GOOGLEKEY,
                    maxResults: maxResultsPerPage,
                },
            });

            for (const item of response.data.items) {
                const durationMinutes = convertISO8601ToMs(item.contentDetails.duration);
                item.contentDetails.duration = String(convertISO8601ToMs(item.contentDetails.duration)); 

                videos.push(item);
            }
        }
    }



    videosFormated = videos.map(item => ({
        title: item.snippet.title,
        description: item.snippet.description,
        duration: item.contentDetails.duration,
    }));

    const mostUsedWords = getMostUsedWords(videosFormated);
    const daysNeeded = calculateDaysToWatch(videosFormated, dailyLimits);


    return { videosFormated, mostUsedWords, daysNeeded }
}
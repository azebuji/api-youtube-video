import axios from "axios";
import fs from 'fs';
import path from "path";

import { calculateDaysToWatch } from "./functions/calculateDaysToWatch";
import { chunkArray } from "./functions/chunckArray";
import { convertISO8601ToMinutes } from "./functions/convertISO8601ToMs";
import { getMostUsedWords } from "./functions/getMostUsedWords";
import { Parameters, VideoListResponse } from "./interfaces";

export async function findVideos({ search, dailyLimits, type }: Parameters) {
    const jsonDurationListVideos = JSON.parse(fs.readFileSync(path.resolve("src", "resources", "General", "dataMocada", "listDetailedVideos.json")).toString("utf8"));
    const jsonListVideos = JSON.parse(fs.readFileSync(path.resolve("src", "resources", "General", "dataMocada", "listVideos.json")).toString("utf8"));

    const qtdVideosInJson = 200
    const maxResultsPerPage = 10; //limite da api do google youtube é 10
    const totalResults = 200; //máximo de resultados por consulta, no caso da regra é 200 por véz
    const numPages = Math.ceil(totalResults / maxResultsPerPage); //nro páginas
    let response;

    let videos: VideoListResponse['items'] = [];
    let videosId: Array<string> = [];
    let videosFormated: Array<{
        title: string;
        description: string;
        duration: string;
        mostUsedWords: string[];
        videoId: string
    }>

    if (type === "pattern") {
        for (let page = 0; page < qtdVideosInJson; page++) {
            videosId = videosId.concat(jsonListVideos.items[page].id.videoId);
        }

        for (const videoId of videosId) {
            let video = jsonDurationListVideos.items.find((elem) => elem.id === videoId);

            if (video) {
                const durationMinutes = convertISO8601ToMinutes(video.contentDetails.duration);
                video.contentDetails.duration = String(durationMinutes);
                videos = videos.concat(video);
            }
        }
    } else {


        for (let page = 0; page < numPages; page++) {
            response = await axios.get(process.env.GOOGLE_YOUTUBE_API_URL + "/search", {
                params: {
                    type: 'video',
                    part: 'snippet',
                    q: search,
                    key: process.env.GOOGLEKEY,
                    pageToken: 'CAoQAA',
                    maxResults: maxResultsPerPage,
                },
            }).catch((error) => {
                console.log("erro na requisição", error)
            });

            videosId = videosId.concat(response.data.items.map(item => item.id.videoId));

        }

        const videoChunks: string[][] = chunkArray(videosId, 10);
        for (let page = 0; page < numPages; page++) {
            let chunk: string[] = videoChunks[page];
            response = await axios.get(process.env.GOOGLE_YOUTUBE_API_URL + "/videos", {
                params: {
                    type: 'video',
                    part: 'snippet,contentDetails',
                    id: chunk.join(','),
                    key: process.env.GOOGLEKEY,
                    maxResults: maxResultsPerPage,
                },
            }).catch((e) => {
                console.log("erro no segundo for", e)
            });

            for (const item of response.data.items) {
                const durationMinutes = convertISO8601ToMinutes(item.contentDetails.duration);
                item.contentDetails.duration = String(durationMinutes);

                videos.push(item);
            }
        }
    }


    videosFormated = videos.map(item => {
        const mostUsedWords = getMostUsedWords([{
            title: item.snippet.title,
            description: item.snippet.description,
        }]);

        return {
            title: item.snippet.title,
            description: item.snippet.description,
            duration: item.contentDetails.duration,
            mostUsedWords,
            videoId: item.id
        };
    });

    const daysNeeded = calculateDaysToWatch(videosFormated, dailyLimits);

    return { videosFormated, daysNeeded }
}
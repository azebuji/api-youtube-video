export interface VideoListResponse {
    kind: string;
    etag: string;
    nextPageToken?: string;
    prevPageToken?: string;
    pageInfo: PageInfo;
    items: VideoItem[];
}

interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface VideoItem {
    kind: string;
    etag: string;
    id: string;
    snippet: VideoSnippet;
    contentDetails: ContentDetails;
    fileDetails: FileDetails;
}

interface VideoSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
}

interface ContentDetails {
    duration: string;
    dimension: string;
    definition: string;
    caption: any;
    licensedContent: boolean;
    allowed: string[];
    blocked: string[];
}

interface FileDetails {
    fileName: string;
    fileSize: number;
    fileType: string;
    container: string;
    durationMs: number;
    bitrateBps: number;
    creationTime: string;
}
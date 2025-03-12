import { DiscoverSection, SearchResultItem } from "@paperback/types";
import { BasicAcceptedElems, Cheerio, CheerioAPI } from "cheerio";
import { AnyNode } from "domhandler";

export interface Months {
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
}

export interface StatusTypes {
    ONGOING: string;
    COMPLETED: string;
}

export interface MangaReaderSearchMetadata {
    page?: number;
}

export interface MangaReaderSearchResultItem extends SearchResultItem {
    path: string;
}

export interface MangaReaderSlug {
    slug: string;
    path: string;
}

export interface MangaReaderDiscoverSection extends DiscoverSection {
    selectorFunc($: CheerioAPI): Cheerio<BasicAcceptedElems<AnyNode>>;
    titleSelectorFunc(
        $: CheerioAPI,
        element: BasicAcceptedElems<AnyNode>,
    ): string;
    subtitleSelectorFunc(
        $: CheerioAPI,
        element: BasicAcceptedElems<AnyNode>,
    ): string;
    itemType:
        | "featuredCarouselItem"
        | "simpleCarouselItem"
        | "prominentCarouselItem"
        | "chapterUpdatesCarouselItem"
        | "genresCarouselItem";
}

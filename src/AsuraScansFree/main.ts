import { BasicAcceptedElems, CheerioAPI } from "cheerio";
import { AnyNode } from "domhandler";
import { MangaReaderGeneric } from "../generic/MangaReader";
import config from "./pbconfig";

const DOMAIN_NAME: string = "https://asurascansfree.com";

class AsuraScansFreeExtension extends MangaReaderGeneric {
    domain = DOMAIN_NAME;
    name = config.name;

    override directoryPath: string = "serie";

    override configureSections(): void {
        this.latestUpdatesSection.selectorFunc = ($: CheerioAPI) =>
            $("div.bsx", $("h2:contains(Latest Update)")?.parent()?.next());
        this.latestUpdatesSection.subtitleSelectorFunc = (
            $: CheerioAPI,
            element: BasicAcceptedElems<AnyNode>,
        ) => $(".fivchap", element).first().text().trim();
    }
}

export const AsuraScansFree = new AsuraScansFreeExtension();

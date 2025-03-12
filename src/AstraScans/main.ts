import { CheerioAPI } from "cheerio";
import { MangaReaderGeneric } from "../generic/MangaReader";
import config from "./pbconfig";

const DOMAIN_NAME: string = "https://astrascans.org";

class AstraScansExt extends MangaReaderGeneric {
    domain = DOMAIN_NAME;
    name = config.name;

    override directoryPath: string = "series";

    override configureSections(): void {
        this.latestUpdatesSection.selectorFunc = ($: CheerioAPI) =>
            $("div.bsx", $("h2:contains(Latest Update)")?.parent()?.next());
    }
}

export const AstraScans = new AstraScansExt();

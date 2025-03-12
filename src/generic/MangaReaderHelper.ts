export function getIncludedTagBySection(
    section: string,
    tags: string[],
): string {
    return (
        tags
            ?.find((x: string) => x.startsWith(`${section}_`))
            ?.replace(`${section}_`, "") ?? ""
    ).replace(" ", "+");
}

export function getFilterTagsBySection(
    section: string,
    tags: string[],
    included: boolean,
    supportsExclusion = false,
): string[] {
    if (!included && !supportsExclusion) {
        return [];
    }

    return tags
        ?.filter((x: string) => x.startsWith(`${section}_`))
        .map((x: string) => {
            let id: string = x.replace(`${section}_`, "");
            if (!included) {
                id = encodeURI(`-${id}`);
            }
            return id;
        });
}

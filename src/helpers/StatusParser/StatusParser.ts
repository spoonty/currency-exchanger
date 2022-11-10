export default abstract class StatusParser {
    ParseToDOM(pageData: string): HTMLDocument {
        return new DOMParser().parseFromString(pageData, "text/html")
    }

    abstract GetStatus(page: string): Promise<string>

    abstract GetPossibleResultStatuses(): Array<string>
}
export default function apiEndPoint(): string | undefined {
    const api = {
        api_dev: "http://localhost:5000/",
        api_prod: "http://api.semicolons/"
    }
    const currentEnv = "dev";
    return currentEnv === "dev" ? api.api_dev : api.api_prod;
}
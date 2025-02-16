declare namespace NodeJS{
    export interface ProcessEnv{
        GITHUB_CLIENT_ID: string;
        GITHUB_CLIENT_SECRET: string;
        DATABASE_URL: string;
    }
}
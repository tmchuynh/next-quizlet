// src/global.d.ts
export { };

declare global {
    interface Window {
        auth0: {
            WebAuth: new ( config: { clientID: string; domain: string; } ) => {
                crossOriginVerification: () => void;
            };
        };
    }
}

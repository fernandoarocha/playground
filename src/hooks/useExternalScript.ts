import { useEffect, useState } from "react";

export const useExternalScript = (url: string) => {
    let [state, setState] = useState(url ? "loading" : "idle");

    useEffect(() => {
        if (!url) {
            setState("idle");
            return;
        }
        let script = document.querySelector(`script[src="${url}"]`) as HTMLScriptElement;

        const handleScript = (e: any) => {
            if (e.type === 'error') {
                console.log(e)
            }
            setState(e.type === "load" ? "ready" : "error");
        };

        if (!script) {
            try {
                script = document.createElement("script");
                script.type = "application/javascript";
                script.src = url;
                script.async = true;
                document.body.appendChild(script);
                script.addEventListener("load", handleScript);
                script.addEventListener("error", handleScript);
            } catch (e) {
                setState("error");
                console.log(e);
            }

        }

        script.addEventListener("load", handleScript);
        script.addEventListener("error", handleScript);

        return () => {
            script.removeEventListener("load", handleScript);
            script.removeEventListener("error", handleScript);
        };
    }, [url]);

    return state;
};
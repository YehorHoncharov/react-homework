import { useEffect, useState } from "react";

export function useTitle(initialTitle: string) {
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return { title, setTitle };
}

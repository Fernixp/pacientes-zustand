import type { ReactNode } from "react";

export default function Error({children}: {children: ReactNode}){
    return (
        <p className="text-red-500 mt-2 text-sm">{children}</p>
    )
}
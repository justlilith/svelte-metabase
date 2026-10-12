type MetabaseConfig = {
    /** Optional; a JSON string of parameter values (a dictionary of keys mapped to value arrays).
     * 
     * Example:
     * 
     * '{"category":["Gizmo"]}'. */
    initialParameters?: string
    
    /** Required; instance URL of the Metabase server */
    instanceUrl: string
    
    /** Optional; whether downloads are enabled */
    downloads?: boolean

    /** Optional; theme of the embedded dashboard */
    theme?: {
        preset: "dark" | "light"
    },
    
    /** Optional; whether to show the title of the embedded report */
    title?: boolean

    /** Optional; whether the report is embedded as a guest */
    isGuest?: boolean
}

export type { MetabaseConfig }
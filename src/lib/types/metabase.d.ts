type MetabaseConfig = {
    initialParameters?: string
    instanceUrl: string
    downloads?: boolean
    theme?: {
        preset: "dark" | "light"
    },
    title?: boolean
    isGuest?: boolean
}

export type { MetabaseConfig }
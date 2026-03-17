<script lang="ts">
    import { onMount } from "svelte";
    import type { MetabaseConfig } from "./types/metabase.js";

    const {
        config = $bindable(),
        token = $bindable(),
    }: { config: MetabaseConfig; token: string } = $props();

    const embedSrc = `${config?.instanceUrl}${config?.instanceUrl?.endsWith("/") ? "" : "/"}app/embed.js`;

    function defineMetabaseConfig(config: MetabaseConfig) {
        (window as any).metabaseConfig = config;
    }

    onMount(async () => {
        defineMetabaseConfig({
            downloads: config?.downloads || true,
            instanceUrl: config?.instanceUrl,
            isGuest: config.isGuest || true,
            theme: {
                preset: config.theme?.preset || "dark",
            },
            title: config?.title || true,
        });
    });
</script>

<svelte:head>
    <script defer src={embedSrc}></script>
</svelte:head>

<metabase-dashboard
    {token}
    with-downloads={config?.downloads || true}
    with-title={config?.title || true}
></metabase-dashboard>

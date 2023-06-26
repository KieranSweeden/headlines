<script lang="ts">
    import { onMount } from "svelte";

    let headlines = [];

    onMount(async () => {
        headlines = await (await fetch("/api/v1/headlines", { method: "POST" })).json();

        console.log(headlines);

    });

</script>
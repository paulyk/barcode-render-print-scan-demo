<script>
    import { onMount } from 'svelte'

</script>

<style>
    .page {
        max-width: 600px;
        margin: 0 auto;
        border: 1px solid #444;
        min-height: 300px;
        display: flex;
        justify-content: center;
        align-items: start;
    }

    

</style>

<div class="page" >
    Listen for scanner input and find the appropriate entry in a database.
    Use debounce to delay lookup until all characters have been entered.
    Ability to look up multiple entries and add them to a list.
    Stop listening for scans once at 3 entries.
    The component that listens for a scan should be an input element that auto fucesses one mount.

</div>
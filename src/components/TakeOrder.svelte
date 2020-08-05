<script>
    import { onMount } from 'svelte'
    import { debounce, delay } from '../util/util'
    import { getRecipe } from '../util/receipeService'

    let inputField
    let itemId = null
    let recipe = null
    let disabled = false
    let items = []

    async function onkeyup(e) {
        disabled = true
        try {
            console.log(Date.now())
            let recipe = await getRecipe(itemId)
            if (recipe) {
                let existing = items.find((x) => x.id === itemId)
                if (existing) {
                    existing.qty += 1
                } else {
                    items.push({ ...recipe, qty: 1 })
                }
                items = [...items]
            }
        } finally {
            itemId = null
            disabled = false
            console.log('refocus', Date.now())
            await delay(100)
            inputField.focus()
        }
    }

    onMount(() => {
        console.log('on mount')
        inputField.focus()
    })
</script>

<style>
    .page {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .input-area {
        padding: 1rem;
    }

    .orders {
        width: 100%;
        background: rgb(232, 248, 232);
        display: grid;
        grid-gap: 1rem;
        grid-template: 1fr 1fr;
    }

    .orders > * {
        font-size: 1.2rem;
        color: darkblue;

        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        background: #eee;

    }
</style>

<div class="page">
    <div class="input-area">
        <input
            type="text"
            bind:value={itemId}
            bind:this={inputField}
            on:keyup={debounce(onkeyup, 500)}
            {disabled} />
    </div>

    <div class="orders">
        {#each items as item}
            <div class="order-item">
                <div>{item.name}</div>
                <div>{item.qty}</div>
            </div>
        {/each}
    </div>
</div>

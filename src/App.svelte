<script>
	
	import page from 'page'
	import BarcodeTest from './components/BarcodeTest.svelte'
  import Home from "./pages/Home.svelte"
  import Nav from "./components/Nav.svelte"
  import MultipleItems from './pages/MultipleItems.svelte'
  import RecipesPage from './pages/RecipesPage.svelte'
  import OrderInputPage from './pages/OrderInputPage.svelte'


	let current = Home

  page('/', () => current = Home)
  page('/multi', () => current = MultipleItems)
  page('/recipes', () => current = RecipesPage)
  page('/orderinput', () => current = OrderInputPage)


  page.start()
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  @media print {
  
  }
</style>

<main>
  <h1>Barcode Test</h1>
  <Nav />
  <svelte:component this={current} />
</main>

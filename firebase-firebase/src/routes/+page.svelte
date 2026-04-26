<script>
    import { db } from "$lib/firebase";
    import {getDocs,collection, addDoc} from "firebase/firestore";
    import { onMount } from "svelte";

    let camps = $state([])
    let name = $state("")
    let amount =  $state(0)
    let isOpen  = $state(false)

    onMount(() => {
        
        getCamps()})

    async function getCamps() {
        
        const campCollection = collection(db,"camp")
        const collectionDoc = await getDocs(campCollection)
        collectionDoc.forEach(camp => { 
            console.log(camp);
            
            camps.push(camp.data())})
    }

    async function createCamp() {
        const campCollection = collection(db,"camp");
        await addDoc(campCollection,{
            name : name,
            amount : amount,
            isOpen : isOpen
        })
        
    }
</script>

<div>
    <p>
        {#each camps as item }
            <p class="text-2xl">{item.name}</p>
        {/each}
    </p>
</div>


<div>
    name : {name}
    amount :{amount}
    open : {isOpen ? "open" : "close"}
</div>

<form>
    <input type="text" bind:value={name} class="border-2">
    <input type="text" bind:value={amount} class="border-2">
    <input type="text" bind:value={isOpen} class="border-2">
</form>
<button onclick={createCamp} class="border-2">create data</button>

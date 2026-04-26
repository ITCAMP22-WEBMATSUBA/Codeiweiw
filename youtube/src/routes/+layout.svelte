<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<div class=" flex justify-between p-3">
	<div class="flex">
		<button class="hover:bg-amber-100 rounded-full">
			<span class="material-symbols-outlined m-2"> menu </span>
		</button>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
			alt=""
			class="w-25 m-2"
		/>
	</div>
	<div class="flex items-center gap-3">
		<div class="flex items-center">
			<input
				type="text"
				placeholder="   Search"
				class="border-1 border-gray-500 rounded-l-full w-120 h-10"
			/>
			<button
				class="border-1 border-gray-500 rounded-r-full w-10 h-10 pt-1.5 hover:bg-amber-100"
			>
				<span class="material-symbols-outlined"> search </span>
			</button>
		</div>
		<button
			class="rounded-full hover:bg-amber-100 p-1.5 flex items-center bg-gray-100"
		>
			<span class="material-symbols-outlined"> mic </span>
		</button>
	</div>
	<div class="flex items-center gap-3">
		<button
			class="flex w-10px rounded-full p-1.5 pr-3
		 hover:bg-amber-100 bg-gray-100"
		>
			<span class="material-symbols-outlined"> add</span>
			<span class=""> Create</span>
		</button>
		<button>
			<span
				class="material-symbols-outlined rounded-full p-1.5 hover:bg-amber-100"
			>
				notifications
			</span>
		</button>
		<img
			src="https://essential-japan.com/wp-content/uploads/2025/06/My-Sweet-Piano.webp"
			alt=""
			class="rounded-full size-10"
		/>
	</div>
</div>
<div class="grid grid-cols-[0.5fr_20fr] h-screen">
	<div class="flex flex-col">
		<button class="hover:bg-amber-100 rounded-md size-15">
			<span class="material-symbols-outlined pt-0.5"> home </span>
			<p class="text-[10px] mt-[-5px]">Home</p>
		</button>
		<button class="hover:bg-amber-100 rounded-md size-15">
			<span class="material-symbols-outlined"> mobile_hand_left </span>
			<p class="text-[10px] mt-[-5px]">Shorts</p>
		</button>
		<button class="hover:bg-amber-100 rounded-md size-15">
			<span class="material-symbols-outlined"> subscriptions </span>
			<p class="text-[10px] mt-[-5px] ml-[2px]">Subscriptions</p>
		</button>
		<button class="hover:bg-amber-100 rounded-md size-15">
			<span class="material-symbols-outlined"> account_circle </span>
			<p class="text-[10px] mt-[-5px]">you</p>
		</button>
	</div>
	<div class="flex-col">
		<div class="h-10 bg-white text-md">
			<button class=" ml-10 p-0.5 w-10 rounded-md bg-black text-white"
				>All</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Thai television soup opera</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Music</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Wizarding World</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Gaming</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Podcasts</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Thai television soup opera</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Thai television soup opera</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Thai television soup opera</button
			>
			<button class="  ml-2 p-0.5 w-auto rounded-md bg-gray-200"
				>Thai television soup opera</button
			>
		</div>

		<div class="mt-10 flex flex-row ml-10 mr-10 justify-center">
			<button class="bg-white w-130 h-100  hover:bg-gray-100 rounded-2xl">
				<img
					src="https://i.pinimg.com/736x/1f/06/1c/1f061c6b2b271ab3ad9b11e6fb87d25d.jpg"
					class="w-full -mt-33 rounded-2xl"
				/>

			</button>
			<button class="bg-white w-130 h-100 hover:bg-gray-100 rounded-2xl ml-10">
				<img
					src="https://i.pinimg.com/736x/1f/06/1c/1f061c6b2b271ab3ad9b11e6fb87d25d.jpg"
					class="w-full -mt-33 rounded-2xl"
				/>

			</button>
			<button class="bg-white w-130 h-100 hover:bg-gray-100 rounded-2xl ml-10">
				<img
					src="https://i.pinimg.com/736x/1f/06/1c/1f061c6b2b271ab3ad9b11e6fb87d25d.jpg"
					class="w-full -mt-33 rounded-2xl"
				/>

			</button>
		</div>
	</div>
</div>

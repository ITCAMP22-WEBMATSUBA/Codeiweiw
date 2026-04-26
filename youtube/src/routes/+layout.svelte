<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();


</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<div class="bg-gray-300 flex justify-between p-3">
	<div class="flex">
		<span class="material-symbols-outlined m-2"> menu </span>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
			alt=""
			class="w-25 m-2"
		/>
	</div>
	<div class="flex items-center gap-3">
		<div class="flex items-center">
			<input
				type="text" placeholder="   ค้นหา"
				class="border-1 border-gray-500 rounded-l-full w-120 h-10"
			/>
			<button
				class="border-1 border-gray-500 rounded-r-full w-10 h-10 pt-1.5 hover:bg-amber-100"
			>
				<span class="material-symbols-outlined"> search </span>
			</button>
		</div>
		<button
			class="bg-gray-400 rounded-full hover:bg-amber-100 p-1.5 flex items-center"
		>
			<span class="material-symbols-outlined"> mic </span>
		</button>
	</div>
	<div class="flex items-center gap-3">
		<button
			class="flex w-10px bg-gray-400 rounded-full p-1.5 pr-3
		 hover:bg-amber-100"
		>
			<span class="material-symbols-outlined"> add</span>
			<span class=""> สร้าง</span>
		</button>
		<button>
			<span
				class="material-symbols-outlined bg-gray-400 rounded-full p-1.5 hover:bg-amber-100"
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
<div class="">
	<div class="bg-gray-300 flex-col">
		<button class="hover:bg-amber-100 rounded-md size-15">
			<span class="material-symbols-outlined pt-0.5"> home </span>
			<p class="text-[10px] mt-[-5px]">หน้าแรก</p>
		</button>
	</div>
</div>

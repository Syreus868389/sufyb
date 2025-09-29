<script lang="ts">
	import type { Snippet } from 'svelte'
	interface Props {
		title: string
		description?: string
		cta?: string
		link?: string
		children: Snippet
	}
	const { children, title, description, cta, link }: Props = $props()
	import ChevronRight from '@lucide/svelte/icons/chevron-right'
</script>

<!-- Card -->
<div>
	<a href={link} class="flex h-auto w-auto shadow-md">
		<div class="w-1/2">
			{@render children?.()}
		</div>
		<div class="grid grid-rows-3">
			<div class="text-center font-serif text-xl">
				{title}
			</div>
			<div>{description}</div>
			<div>
				{#if link != null && cta != null}
					<div class="justify-self-end">
						{cta}
						<ChevronRight />
					</div>
				{/if}
			</div>
		</div>
	</a>
</div>
<!-- End Card -->

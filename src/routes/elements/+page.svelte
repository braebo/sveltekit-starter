<script>
	import { IN, OUT } from '$lib/utils/transitions'
	import { fade, fly } from 'svelte/transition'
	import Inputs from '../inputs/+page.svelte'
</script>

<div class="br-md" />

<div class="page">
	<section in:fly|global={{ ...IN, y: 7.5, duration: 300 }} out:fade|global={OUT}>
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<h4>Heading 4</h4>
		<h5>Heading 5</h5>
		<h6>Heading 6</h6>

		<strong>bold</strong>

		<em>italic</em>

		<s>strikethrough</s>

		<small>small</small>

		<mark>mark</mark>

		<span>
			super
			<sup>script</sup>
		</span>

		<span>
			sub
			<sub>script</sub>
		</span>

		<ul>
			<li>
				list
				<ul>
					<li>
						list
						<ul>
							<li>list</li>
						</ul>
					</li>
					<li>
						list
						<ol>
							<li>list</li>
							<li>list</li>
						</ol>
					</li>
				</ul>
			</li>
		</ul>

		<button>button</button>

		<code>code</code>

		<!-- shiki-start
```ts
function syntaxHighlighting(): true {
	return true
}

console.log('some really long string that would usually cause a horizontal scroll when it overflows on the x axis because reasons');
```
		shiki-end -->
	</section>

	<section
		style:gap="1.5rem"
		in:fly|global={{ ...IN, y: 7.5, duration: 300, delay: 150 }}
		out:fade|global={OUT}
	>
		<!-- prettier-ignore -->
		<p>
			<!-- svelte-ignore a11y_invalid_attribute -->
			Paragraph canary danced beneath <a href="">azure skies</a>, while marble fountains sparkled with untold mysteries. Velvet shadows crept along ancient walls, whispering secrets to passing travelers who dared not linger.
		</p>

		<!-- prettier-ignore -->
		<p>
			Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
		</p>

		<!-- svelte-ignore a11y_invalid_attribute -->
		<!-- prettier-ignore -->
		<blockquote> Blockquote golden leaves tumbled through forgotten courtyards, each one carrying <a href="">fragments of memories</a> long since scattered to the winds.</blockquote>

		<!-- svelte-ignore a11y_invalid_attribute -->
		<a href="">
			https://some.really-long-link-that-would-normally-cause-horizontal-overflow-but-it-wraps-instead
		</a>
	</section>

	<Inputs />
</div>

<div class="br-lg" />

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		width: min(var(--page-width), calc(100vw - 2rem));
		height: auto;
		margin: 0 auto;
	}

	section {
		width: 640px;
		margin: 1rem auto;
	}
</style>

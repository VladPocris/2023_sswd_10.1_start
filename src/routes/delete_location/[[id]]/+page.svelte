<script>
	/** @type {import('./$types').PageData} */

	// dependencies
	import { page } from '$app/stores';
	import { superForm, superValidate } from 'sveltekit-superforms/client';

	export let data;

	// create form instance
	const { form, errors, enhance, delayed, message, constraints, reset } = superForm(data.form);
	//console.log('data: ', data);

	let form_title = 'No Location Exist With This Id';

	if($form.id){
		form_title = `Delete Location Id: ${$form.id}`;
	}

</script>


<div class="m-5">
	<!--Show message after sucessful add location-->
	{#if $message}
		<h4 class="message" class:success={$page.status < 400} class:error={$page.status >= 400}>
			{$message}
		</h4>
		<p>id: {$form.id}</p>
		<p>name: {$form.name}</p>
		<p>description: {$form.description}</p>
		<p>Long,Lat: {$form.longitude}, {$form.latitude}</p>
		<p>shared: {$form.shared}</p>
		<p>shared: {$form.favourite}</p>
		<p><a href="/locations">Show Locations</a></p>
	{:else}
	<!-- Otherwise show the form -->
	<h1>{form_title}</h1>
	<!-- Bootstrap Form Layout-->
	<div class="w-75 mw-300 p-3">
		<!-- this form will post when submitted -->
		<form method="POST" use:enhance>
			<div class="mb-3">
				<input type="hidden" name="name" class="form-control" bind:value={$form.category_id} />
			</div>

			<!-- name -->
			<div class="mb-3">
				<input type="hidden" name="name" class="form-control" bind:value={$form.name} />
			</div>

			<!-- description -->
			<div class="mb-3">
				<input type="hidden" name="description" class="form-control" bind:value={$form.description} />
			</div>

			<!-- longitude -->
			<div class="mb-3">
				<input type="hidden" name="longitude" class="form-control" bind:value={$form.longitude} />
			</div>

			<!-- latitude -->
			<div class="mb-3">
				<input type="hidden" name="latitude" class="form-control" bind:value={$form.latitude} />
			</div>

			<!-- shared -->
			<div class="form-check">
				<input class="form-check-input" type="hidden" name="shared" bind:value={$form.shared} />
			</div>

			<!-- favourite -->
			<div class="form-check">
				<input class="form-check-input" type="hidden" name="favourite" bind:value={$form.favourite} />
			</div>
			
			<!-- hidden id -->
			<input type="hidden" name="id" bind:value={$form.id}>
						
			<!-- submit button -->
			<div class="mb-3 mt-3">
				<button class="btn btn-danger">Delete</button>
			</div>
		</form>
	</div>
	{/if}
</div>

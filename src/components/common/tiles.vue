<template>
	<div class="section">
		<div class="grid">
			<div v-for="entry in content" :key="entry.id" class="cell">
				<div :class="['item', {active: entry.checked}]">
					<input type="checkbox" :value="entry.id" @click="toggle(entry.id)" :checked="entry.checked">

					<h4>{{ entry.full_name }}</h4>
					<img :src="entry.image" width="100" height="100">

					<div class="group">
						<b v-if="entry.group == null">нет группы</b>
						<template v-else>{{ entry.group }}</template>
					</div>
					<div class="phone">{{ entry.phone }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'list-tiles',
		props: {
			data: {
				type: Array,
				default: [],
				required: true
			}
		},
		data: function() {
			return {
				localData: false
			}
		},
		computed: {
			content: function() {
				return this.localData || this.data;
			}
		},

		methods: {
			// выделение ячейки
			toggle: function(id) {
				var data = this.content;

				for (var i = 0; i < data.length; i++){
					// ищем нужный ID в списке
					if (data[i].id == id) {
						// находим и меняем его ключ checked
						data[i].checked = !data[i].checked;
					}
				}

				// сбрасываем чтобы работал computed
				this.localData = false;
				this.localData = data;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.section {
		padding: 0 20px;
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		margin-left: -20px;
		margin-right: -20px;
	}

	.cell {
		flex: 0 0 auto;
		flex-basis: 25%;
		max-width: 25%;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.item {
		background-color: #eee;
		padding: 10px;
		border-radius: 5px;
		position: relative;
		height: 250px;
		margin: 10px 0;
		text-align: center;
	}

	.item.active {
		background-color: #ddd;
	}

	h4 {
		font-size: 15px;
		font-weight: bold;
		text-align: center;
	}

	img {
		display: block;
		margin: 0 auto 20px;
		width: 100px;
		height: 100px;
	}

	input {
		position: absolute;
		top: 5px;
		left: 5px;
	}

	.phone {
		margin-top: 10px;
	}
</style>
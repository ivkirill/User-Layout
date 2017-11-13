<template>
	<div class="section">
		<div class="grid">
			<div v-for="(entry, index) in groups" :key="index" class="cell">
				<div class="group">
					<h2>{{ index }}</h2>
					<div v-for="key in entry" :key="key.id" class="item">
						<h3>{{ key.full_name }}</h3>
						<div class="phone">{{ key.phone }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'list-groups',
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
			},

			groups: function() {
				var groups = {};

				for (var i = 0; i < this.content.length; i++){
					var group = this.content[i].group;
					if(group === null) group = 'Нет группы';

					if (groups[group]) {
 						groups[group].push(this.content[i]);
					}
					else groups[group] = [this.content[i]];
				}

				return groups;
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
		flex-basis: 33.3333%;
		max-width: 33.3333%;
		padding: 0 10px;
		box-sizing: border-box;
	}

	.group {
		background-color: #eee;
		padding: 20px;
		border-radius: 0;
		position: relative;
		margin: 10px 0;
	}

	.item.active {
		background-color: #ddd;
	}

	h2 {
		font-size: 17px;
		font-weight: normal;
		text-align: left;
		margin-top: 0;
	}

	.item {
		border: 1px solid #ddd;
		padding: 20px;
	}

	.item + .item {
		margin-top: 20px;		
	}

	.item h3 {
		margin-top: 0;
		margin-bottom: 0;
		font-size: 12px;
	}

	.phone {
		margin-top: 10px;
	}
</style>
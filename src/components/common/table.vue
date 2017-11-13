<template>
	<table class="table">
		<thead>
			<tr>
				<th class="text-nowrap" v-for="(key, index) in headings" :key="key.name">
					<span class="title" v-on:click="sortBy(key)"> {{ key.title }}
						<span class="arrow" v-if="sortFlag(key, index)" v-bind:data-after="sortIcon"></span>
					</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="entry in renderContent" :key="entry.id" :class="{active: entry.checked}">
				<td v-for="key in headings" :data-title="key.title">
					<a href="#" v-if="key.name === 'link'">{{entry[key.name]}}</a>
					<template v-else-if="key.name === 'id'">
						<input type="checkbox" :value="entry[key.name]" @click="toggle(entry.id)" :checked="entry.checked">
					</template>
					<template v-else>{{entry[key.name]}}</template>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		name: 'table-sortable',
		props: {
			data: {
				type: Array,
				default: [],
				required: true
			}
		},
		data: function() {
			return {
				// заголовки таблицы
				headings: [
					{
						'title': 'UID',
						'name': 'id'
					},
					{
						'title': 'Полное имя',
						'name': 'full_name'
					},
					{
						'title': 'Учетная запись',
						'name': 'link'
					},					{
						'title': 'Электронная почта',
						'name': 'email'
					},
					{
						'title': 'Группа',
						'name': 'group'
					},
					{
						'title': 'Номер телефон',
						'name': 'phone'
					}
				],
				// поле сортировки
				sortName: '',
				// направление сортировки ("1" - asc, "-1" - desc)
				sortOrder: 1,
				localData: false
			}
		},
		computed: {
			// контент отсортированный
			renderContent: function() {
				return this.sorting(this.content);
			},
			// иконка сортировки
			sortIcon: function() {
				return this.sortOrder > 0 ? '⏶' : '⏷';
			},
			content: function() {
				return this.localData || this.data;
			}
		},

		methods: {
			// выделение строки
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
			},
			// метод сортировки
			sortBy: function(key) {
				this.sortName = key.name;
				this.sortOrder *= -1;
			},
			sortFlag: function(key, index) {
				return (key.name == this.sortName || (this.sortName == '' && index == 0));
			},
			// сортируем данные
			sorting: function(content) {
				// поле сортировки
				var name = this.sortName;
				// направление сортировки
				var order = this.sortOrder || 1;
				// сортируем, если есть поле
				if (name) {
					content = content.sort(function(a, b) {
						a = a[name]
						b = b[name]
						return (
							a === b 
								? 0
								: a > b 
									? 1 
									: -1
						) * order
					})
				}
				// возвращаем новые данные
				return content;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	table {
		width: 100%;
	}
	table td,
	table th {
		padding: 5px;
		text-align: left;
		font-size: 12px;
	}

	table th {
		color: #ccc;
	}

	table th span {
		cursor: pointer;
	}

	/* Разлиновка строка таблицы */
	table tr:nth-of-type(2n) {
		background-color: #fbfbfb;
	}

	/* Выбранная строка */
	table tr.active, table tr.active:hover {
		background-color: #d7eef7;
	}	

	/* Подсветка при наведении */
	table tr:hover {
		background-color: #ffefe1;
	}

	.arrow:after {
		content: attr(data-after);
	}
	img {
		display: block;
		background-color: #eee;
	}
</style>
<!--
    Страница списка пользователей
-->

<template>
	<block-panel :header="header">
		<div class="toolbar" slot="toolbar">
			<label><input type="radio" name="view" @click="changeView('table')" checked> <span>Таблица</span></label>
			<label><input type="radio" name="view" @click="changeView('tiles')"> <span>Плитка</span></label>
			<label><input type="radio" name="view" @click="changeView('groups')"> <span>Группы</span></label>
		</div>		

		<table-sortable v-if="view=='table'" :data="data"></table-sortable>
		<list-tiles v-else-if="view=='tiles'" :data="data"></list-tiles>
		<list-groups v-else-if="view=='groups'" :data="data"></list-groups>
	</block-panel>		
</template>

<script>
    export default {
        name: 'page-user-list',
        components: {
            'block-panel': function(resolve) {
                require(['@/components/common/panel.vue'], resolve);
            },
            'table-sortable': function(resolve) {
                require(['@/components/common/table.vue'], resolve);
            },
            'list-tiles': function(resolve) {
                require(['@/components/common/tiles.vue'], resolve);
            },
            'list-groups': function(resolve) {
                require(['@/components/common/groups.vue'], resolve);
            }
        },
        data: function() {
            return {
                header: 'Список пользователей',
				// данные пользователей
				data: [],
				// выбранный вид отображения
				viewSelected: 'table'
            }
        },
		computed: {
			// вид отображения
			view: function() {
				return this.viewSelected;
			}
		},
		methods: {
			// получаем данные
			getData: function() {
				var self = this;
				fetch('/data/users.json')
					.then(function(data) {
						return data.json();
					})
					.then(function(data) {
						self.data = data;
					});
			},

			// меняем вид отображения
			changeView: function(view) {
				this.viewSelected = view;
			}
		},
		mounted: function() {
			// запрашиваем контент
			this.getData();
		}
	
    }
</script>

<style scoped>
	.block-panel {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px auto;
		width: 960px;
	}

	.toolbar {
		margin-bottom: 20px;
	}

	label input[type="radio"] {
		clip: rect(0,0,0,0);
		position: absolute;
		top: -200px;
	}

	label input[type="radio"] + span {
		display: inline-block;
		padding: 4px 8px;
		background-color: #bbb;
		font-size: 11px;
		cursor: pointer;
	}

	label input[type="radio"]:checked + span {
		background-color: #777;
	}
</style>
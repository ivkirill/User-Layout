<!--
    Страница приветствия и авторизации
-->

<template>
	<form v-on:submit.prevent="submitForm" validate="validate">
		<input type="text" name="login" :placeholder="login">
		<input type="password" name="password" :placeholder="password">
		<button type="submit">{{submit}}</button>
	</form>
</template>


<script>
    export default {
        name: 'page-auth',
        data: function () {
            return {
				login: 'Логин',
				password: 'Пароль',
				submit: 'Авторизоваться'
			}
        },
		methods: {
			// отправка формы
			submitForm: function() {
				// TODO: отправка запроса на сервер, получения ответа и т.д.

				// переход на страницу списка
				this.$router.push('/users/');
			}
		}

    }
</script>
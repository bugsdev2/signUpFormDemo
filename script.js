const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');

const error = document.querySelector('div.password')

confPassword.addEventListener('input', () => {
	
	if (password.value !== confPassword.value) {
		error.classList.add('error');
	} else {
		error.classList.remove('error');
	}
	if (confPassword.value === '') {
		error.classList.remove('error');
	};
})


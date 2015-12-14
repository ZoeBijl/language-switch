function changeLanguage()
	{
		var currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');

		if (currentLang === 'en')
		{
			document.getElementsByTagName('html')[0].setAttribute('lang','es');
			document.title = 'Prueba de Lenguaje';
			document.getElementById('test1-heading').innerHTML = 'Contenido';
			document.getElementById('test1-p').innerHTML = 'Tengo queso en mis pantalones.';
			document.getElementById('test1-button').innerHTML = 'Cambio de idioma';
		}
		else
		{
			document.getElementsByTagName('html')[0].setAttribute('lang','en');
			document.title = 'Language Test';
			document.getElementById('test1-heading').innerHTML = 'Content';
			document.getElementById('test1-p').innerHTML = 'I have cheese in my pants.';
			document.getElementById('test1-button').innerHTML = 'Change Language';
		}
	}

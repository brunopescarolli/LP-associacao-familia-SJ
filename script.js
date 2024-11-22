function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Compartilhe nossa ação',
			text: 'Nos ajude a melhorar vidas!',
			url: 'https://associacaofamiliasaojose.com.br/',
		})
		.then(() => console.log('Link compartilhado com sucesso!'))
		.catch((error) => console.log('Erro ao compartilhar link.', error));
	}
}
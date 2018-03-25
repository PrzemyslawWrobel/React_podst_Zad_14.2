var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lew.jpg'
  },
  {
  	id: 3,
  	title: 'Gwiezdne Wojny',
  	desc: 'Film o rycerzach Jedi',
  	img: 'images/gwiezdne.jpg'
  },
  {
  	id: 4,
  	title: 'Before I Fall',
  	desc: 'film o młodzieży',
  	img: 'images/before.jpg'
  }
];




var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img, width: 200})
    );
});


var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

/*	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
   		React.createElement('ul', {},
			React.createElement('li', {},
		        React.createElement('h2', {}, 'Harry Potter'),
		        React.createElement('p', {}, 'Film o czarodzieju')
		    ),
			React.createElement('li', {},
		        React.createElement('h2', {}, 'Król Lew'),
		        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
			)
		)

	);
*/
ReactDOM.render(element, document.getElementById('app'));


import React, {Component} from 'react';


class Superhero extends Component {
    render(){
        const superHeroes = [
            {name:'Batman',
            imgUrl:'https://massolutions.biz/wp-content/uploads/2014/12/e5a06942fa42823c88be5f3a834e063d-fantastic-art-bat-family.jpg'
           }, 
            {name: 'Superman',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51UHgjw2blL._SX327_BO1,204,203,200_.jpg'
           },
            {name:'Flash',
            imgUrl:'http://www.comicsbeat.com/wp-content/uploads/2016/06/FlashBanner.png'
           },
            {'name':'Green Lantern',
            imgUrl:'https://vignette.wikia.nocookie.net/greenlantern/images/3/3f/John_Stewart-1.jpg/revision/latest?cb=20090107072833'
           }];
       return (
           <div>
               {superHeroes.map(heroes => <li>{superHeroes}</li> )}
           </div>
       )
    }
}


export default Superhero;
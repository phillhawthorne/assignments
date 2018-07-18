const express = require ('express');
const bodyParser = require ('body-parser');
const uuid = require ('uuid');
const PORT = 9001;

const MOVIES = []; 

const app = express();
app.use(bodyParser.json());

app.route('/movies')
    .get((req, res) =>{
        res.send(MOVIES);
    })
    .post((req,res)=>{
        let newMovie = req.body;
        newMovie._id = uuid();  
        MOVIES.push(req.body);
        res.send(newMovie);
    });

    app.route('/movies/:id/')
        .get((req, res)=>{
            const foundMovie = MOVIES.find(movie=> movie._id === req.params.id );
            res.send(foundMovie);
        })
    
        .put((req,res)=>{
           const toBeEdited = MOVIES.find(movie => movie._id === req.params.id);
            for(let key in req.body){
                toBeEdited[key] = req.body[key]
            }
           res.send(toBeEdited)
        })

        .delete((req,res)=>{
            const deleteMovie = MOVIES.find(movie => movie._id === req.params.id);
            MOVIES.splice(MOVIES.indexOf(deleteMovie))
            return res.send(MOVIES)
        });




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
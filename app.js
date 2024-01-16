const express = require('express');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({extended:true})
)

app.set('view engine','ejs');

let todolist = [
    {
    'id' : 1,
    'data': "sleep"
    },
    {
    'id' : 2,
    'data': "wake up"
    }
]

app.get('/', (req, res)=> {
    res.render("index", {title: 'Node is fun', data:todolist});
    res.send('hello')
});

app.post('/delete', (req, res)=> {
    const deletedData=req.body.data;
    let i=0;
    todolist.forEach(ele=> {
        i+=1;
        if(deletedData===ele.data) {
            todolist.splice(i-1, 1);
        }
    });
    res.redirect('/');
});

app.post('/addData', (req, res)=> {
    // console.log(req.body);
    console.log(req.body.data);
    const id = todolist.length +1;
    todolist.push(
        {
            id:id,
            data:req.body.data
        }
    );
    res.render("index", {title: 'Node is fun', data:todolist});

});

app.listen(3000, ()=>{
    console.log('server started!!');
});
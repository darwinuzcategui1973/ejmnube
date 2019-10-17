const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://darwin:darwin@cluster0-wcnbe.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Base datos Conectada mongo Altas'))
    .catch(e=>console.log(e));

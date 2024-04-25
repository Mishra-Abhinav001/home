const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://abhinavm:rsQ4L1KVI92DlqER@clustermishra.2yhhirt.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMishra';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB successfully!');
});

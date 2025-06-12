import mongoose from 'mongoose';

// função para conectar ao banco de dados MongoDB
const connect = async () => {
  try {
    mongoose.set('strictQuery', true); // força com que valores que não foram passados para o contrutor não sejam enviados para o banco de dados, se eles não estavam definidos no schema definido para a model que está sendo passada 
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME, 
    });
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // encerra o processo se a conexão falhar
  }
};

export default { connect };

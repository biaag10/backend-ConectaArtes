import jwt from 'jsonwebtoken';

// middleware para verificar o token JWT
const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1]; // extrai o token do cabeçalho authorization
        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }
            // armazena as informações do usuário decodificadas no objeto req para uso posterior
            req.userId = decoded.userId;
            next(); // chama o próximo middleware ou rota
        });
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }

}

export default verifyToken;
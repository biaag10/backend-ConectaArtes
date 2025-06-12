const protectedRoute = async (req, res) => {
    return res.status(200).json({ message: 'Acesso autorizado', userId: req.userId });
}

export default { protectedRoute };
exports.createProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    res.json(
        {
            message: 'Create Product Success',
            data: {
                id: 1,
                name: name,
                price: price
            }
        }
    );
    next();
}

exports.getProducts = (req, res, next) => {
    res.json(
        {
            message: 'Get Products Data Success',
            data: [
                {
                    id: 1,
                    name: 'Mechanical Keyboard',
                    price: 200000
                }
            ]
        }
    )
}
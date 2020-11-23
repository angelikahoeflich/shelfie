module.exports = {

  getInventory: (req, res) => {
    const db = req.app.get('db');
    db.get_inventory()
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((err) => res.status(500).send(err));
  },
  newProduct: (req, res) => {
    const db = req.app.get('db');
    const { name, price, img } = req.body;
    db.new_product([name, price, img])
      .then((newProduct) => {
        res.status(200).send(newProduct);
      })
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    db.delete_products(+id)
      .then(() => {
        res.sendStatus(201)
      })
      .catch((err) => res.status(500).send(err));
  },

  editProduct: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    const {name, price, img} = req.body;
    db.edit_product([name, +price, img, +id])
      .then(() => {
        res.sendStatus(200)
      })
      .catch((err) => res.status(500).send(err))
  }
  
}

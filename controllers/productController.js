import {getAllProducts} from "../models/productModel.js";
import {getProductByID} from "../models/productModel.js";

export const showAllProducts = (req, res) => {
    getAllProducts((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const showProductByID = (req, res) => {
    console.log("hejsa");
    const id = req.params.id;

    if (!id) {
        res.sendStatus(400);
        return;
    }

    /*getProductByID((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });*/

    getProductByID(id).then((product) => {
        res.json(product);
    }).catch((err) => {
        res.sendStatus(404);
    })
};
import shopDB from "../db.js";

export const getAllProducts = (result) => {
   shopDB.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

/*export const getProductByID = (result) => {
    shopDB.query("SELECT * FROM products WHERE productID = ?", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}*/

export const getProductByID = (id) => new Promise((resolve, reject) => {
    if (!id) reject();

    shopDB.query(`SELECT * FROM products WHERE productID = ${id}`, (err, results) => {
        if (err) {
            reject(err);
        } else {
            if (results[0]) {
                resolve(results[0]);
            } else {
                reject();
            }
        }
    })
});


function calculateBill() {

    const product = document.getElementById("product").value;
    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);

    if (product === "" || price <= 0 || quantity <= 0) {
        document.getElementById("result").innerText =
            "Please enter valid product details.";
        return;
    }

    const total = price * quantity;

    document.getElementById("result").innerText =
        product + " Total Bill: Rs. " + total;
}

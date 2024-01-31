document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const notifications = document.getElementById('notifications');

   
    function addToCartAndNotify(name, price) {
        const item = document.createElement('li');
        item.textContent = `${name} - $${price.toFixed(2)}`;
        cart.appendChild(item);

     
        let total = parseFloat(totalAmount.textContent.split('$')[1]);
        total += price;
        totalAmount.textContent = `Total: $${total.toFixed(2)}`;

   
        const notification = document.createElement('div');
        notification.textContent = `${name} added to cart - $${price.toFixed(2)}`;
        notifications.appendChild(notification);
        notifications.classList.add('show');

        setTimeout(() => {
            notifications.removeChild(notification);
            if (notifications.children.length === 0) {
                notifications.classList.remove('show');
            }
        }, 5000);
    }


    const form = document.getElementById('checkoutForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

       
        const formData = new FormData(form);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');

        console.log(`Nombre: ${firstName}, Apellido: ${lastName}, Email: ${email}`);
    });

   
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);
            addToCartAndNotify(productName, productPrice);
        });
    });
});

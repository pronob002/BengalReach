const orders = [
    {
        title: "Nike Shoe Campaign",
        delivery: "12th July",
        days: 2,
        price: "$15",
        status: "Waiting to get started",
        icon: "24"
    },
    {
        title: "Tiktok Reel For T-shirt Marketing",
        delivery: "12th July",
        days: 2,
        price: "$15",
        status: "Pending",
        icon: "plus"
    },
    {
        title: "Shoe Ad",
        delivery: "12th July",
        days: 2,
        price: "$15",
        status: "Pending",
        icon: "video"
    },
    {
        title: "Post for Polo T-shirt",
        delivery: "12th July",
        days: 2,
        price: "$15",
        status: "Completed",
        icon: "blue-plus"
    },
    {
        title: "Threads for Baggy Pant",
        delivery: "12th July",
        days: 2,
        price: "$15",
        status: "Completed",
        icon: "red-plus"
    }
];

const iconsMap = {
    "24": "https://via.placeholder.com/50/FF8A80/000000?text=24",
    "plus": "https://via.placeholder.com/50/80D8FF/000000?text=+",
    "video": "https://via.placeholder.com/50/FF8A80/000000?text=Vid",
    "blue-plus": "https://via.placeholder.com/50/81D4FA/000000?text=+",
    "red-plus": "https://via.placeholder.com/50/FFCDD2/000000?text=+"
};

function renderOrders() {
    const container = document.getElementById("ordersContainer");
    orders.forEach(order => {
        const orderCard = document.createElement("div");
        orderCard.classList.add("order-card");

        orderCard.innerHTML = `
            <div class="left-section">
                <img class="icon" src="${iconsMap[order.icon]}" alt="icon">
                <div class="order-details">
                    <h3>${order.title}</h3>
                    <p>
                        ${order.status === "Completed" 
                            ? `Delivered at: ${order.delivery}` 
                            : `Delivery: ${order.delivery} | Days: ${order.days}`}
                    </p>
                    ${order.status === "Waiting to get started" 
                        ? `<span class="status-badge waiting">${order.status}</span>`
                        : order.status === "Completed" 
                        ? `<span class="status-badge completed">${order.status}</span>` 
                        : ''}
                </div>
            </div>
            <div>
                <span class="price">${order.price}</span>
                <button class="manage-btn">Manage order</button>
            </div>
        `;

        container.appendChild(orderCard);
    });
}

// Render the orders when the page loads
document.addEventListener("DOMContentLoaded", renderOrders);

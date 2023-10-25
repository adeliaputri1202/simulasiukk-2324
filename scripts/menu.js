/**
 * menu page
 */
var menu = [
	{
		id: 0,
		name: "Paket 1",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 36000,
		count: 0,
	},
	{
		id: 1,
		name: "Paket 2",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 36000,
		count: 0,
	},
	{
		id: 2,
		name: "Paket 3",
		desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
		price: 36000,
		count: 0,
	},
];

// add menu card
const menuSection = document.querySelector(".menu-section");
let card = ``;
menu.map((data) => {
	card += innerCardMenu(data.name, data.desc, data.price, data.count, data.id);
	menuSection.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id) {
	return `<!-- card -->
	<div class="card">
		<button class="kategori" aria-readonly="true">Paket</button>
		<hr class="line" />
		<div class="container-content">
			<div>
				<img
					src="./images/example-product/indomie.jpg"
					alt=""
					class="produk-img"
				/>
			</div>
			<div class="content">
				<p>${name}</p>
				<p>${desc}</p>
				<p>${price}</p>
				<div class="content2">
					<p>Jumlah:</p>
					<p id="count${id}">${count}</p>
					<button class="tambah" id="addCount${id}">+</button>
				</div>
			</div>
		</div>
	</div>`;
}

// add count
let count = 0;
let order = [];
menu.map((data) => {
	document
		.getElementById(`addCount${data.id}`)
		.addEventListener("click", function (event) {
			event.preventDefault();
			document.getElementById(`count${data.id}`).innerHTML = `${(count += 1)}`;
			if (order[data.id] == null) {
				order.push({
					id: 0,
					name: "Paket 1",
					desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
					price: 36000,
					count: count,
				});
				console.log(order);
			} else {
				order[data.id].count = count;
			}
			let totalPay = 0;
			const total = order[data.id].price * order[data.id].count;

			console.log(order);
		});
});

// order
document.getElementById("order").addEventListener("click", function (event) {
	event.preventDefault();
	location.href = "order.html";
	// console.log("yes");
});



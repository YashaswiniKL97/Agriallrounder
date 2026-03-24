/* ================= LOAD DATA ================= */

let orders = []
let bookings = []

let today = new Date().toLocaleDateString("en-IN")

let todayRevenue = 0
let totalRevenue = 0
let orderRevenue = 0
let bookingRevenue = 0

/* 🔥 NEW VARIABLES */
let cancelRevenue = 0
let returnRevenue = 0
let cancelCount = 0
let returnCount = 0

/* 🔥 BOOKING TRACK */
let bookingCancelRevenue = 0
let bookingCancelCount = 0
let rebookingCount = 0


/* ================= FORMAT MONEY ================= */

function formatMoney(val){
    return "\u20B9 " + Number(val || 0).toLocaleString("en-IN", {
        minimumFractionDigits: 2
    })
}

async function loadServerData(){

try{

let res = await fetch("https://script.google.com/macros/s/AKfycbwvwBT--IH_npMdx5T_UnxFtuEm0h57knsPZhyqZo0wMXnjC3e-FG3ZjnIeiI9Hu2Wp/exec")

let data = await res.json()

orders = data.orders ? data.orders.slice(1) : []
bookings = data.bookings ? data.bookings.slice(1) : []

console.log("Orders:", orders)
console.log("Bookings:", bookings)

recalculateAll()
loadOrders(orders)
loadBookings(bookings)

}catch(err){
console.error(err)
}

}
function recalculateAll(){

let totalOrders = orders.length
let totalBookings = bookings.length

// TEMP revenue (count based)
let orderRevenue = orders.length
let bookingRevenue = bookings.length

let cancelCount = 0
let bookingCancelCount = 0
let returnCount = 0
let rebookingCount = 0

orders.forEach(o => {
   if(o[7] === "Cancelled") cancelCount++
})

bookings.forEach(b => {
   if(b[5] === "Cancelled") bookingCancelCount++
   if(b[5] === "Rescheduled") rebookingCount++
})

// UI update
document.getElementById("totalOrders").innerText = totalOrders
document.getElementById("totalBookings").innerText = totalBookings
document.getElementById("cancelledOrders").innerText = cancelCount
document.getElementById("cancelledBookings").innerText = bookingCancelCount
document.getElementById("returnedOrders").innerText = returnCount
document.getElementById("rebookings").innerText = rebookingCount

document.getElementById("finalOrderRevenue").innerText = "₹" + orderRevenue
document.getElementById("finalBookingRevenue").innerText = "₹" + bookingRevenue
document.getElementById("finalRevenue").innerText = "₹" + (orderRevenue + bookingRevenue)

}

/* TOTAL */
totalRevenue = orderRevenue + bookingRevenue

/* 💰 FINAL REVENUE */

let finalOrderRevenue = orderRevenue - cancelRevenue - returnRevenue
let finalBookingRevenue = bookingRevenue - bookingCancelRevenue

let finalRevenue = finalOrderRevenue + finalBookingRevenue

/* ================= MONTHLY ================= */

let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()

let monthlyOrder = 0
let monthlyBooking = 0

orders.forEach(o=>{
    let d = new Date(o.createdDate)
    if(d.getMonth()===currentMonth && d.getFullYear()===currentYear){
        monthlyOrder += Number(o.total || 0)
    }
})

bookings.forEach(b=>{
    let d = new Date(b.createdDate)
    if(d.getMonth()===currentMonth && d.getFullYear()===currentYear){
        monthlyBooking += Number(b.total || 0)
    }
})

let monthlyTotal = monthlyOrder + monthlyBooking

/* ================= UI ================= */

function loadStatsUI(){

let stats = document.getElementById("stats")
if(!stats) return

stats.innerHTML = `

<div class="stats-container">

<div class="stat-box">
<h3>Total Orders</h3>
<h2 class="blue">${orders.length}</h2>
</div>

<div class="stat-box">
<h3>Total Bookings</h3>
<h2 class="orange">${bookings.length}</h2>
</div>

<div class="stat-box">
<h3>Order Revenue</h3>
<h2 class="blue">${formatMoney(orderRevenue)}</h2>
</div>

<div class="stat-box">
<h3>Booking Revenue</h3>
<h2 class="orange">${formatMoney(bookingRevenue)}</h2>
</div>

<div class="stat-box">
<h3>Total Revenue</h3>
<h2 class="green">${formatMoney(totalRevenue)}</h2>
</div>

<div class="stat-box">
<h3>Final Order Revenue</h3>
<h2 class="green">${formatMoney(finalOrderRevenue)}</h2>
</div>

<div class="stat-box">
<h3>Cancelled Bookings</h3>
<h2 style="color:red">${bookingCancelCount}</h2>
<p>Loss: ${formatMoney(bookingCancelRevenue)}</p>
</div>

<div class="stat-box">
<h3>Rebookings</h3>
<h2 style="color:blue">${rebookingCount}</h2>
</div>

<div class="stat-box">
<h3>Final Booking Revenue</h3>
<h2 class="green">${formatMoney(finalBookingRevenue)}</h2>
</div>

<!-- CANCEL -->
<div class="stat-box">
<h3>Cancelled Orders</h3>
<h2 style="color:red">${cancelCount}</h2>
<p>Loss: ${formatMoney(cancelRevenue)}</p>
</div>

<!-- RETURN -->
<div class="stat-box">
<h3>Returned Orders</h3>
<h2 style="color:orange">${returnCount}</h2>
<p>Loss: ${formatMoney(returnRevenue)}</p>
</div>

<!-- FINAL -->
<div class="stat-box">
<h3>Final Revenue</h3>
<h2 class="green">${formatMoney(finalRevenue)}</h2>
</div>

<div class="stat-box">
<h3>This Month</h3>
<h2 class="green">${formatMoney(monthlyTotal)}</h2>
<p>Orders: ${formatMoney(monthlyOrder)}</p>
<p>Bookings: ${formatMoney(monthlyBooking)}</p>
</div>

</div>

`
}

loadStatsUI()

/* ================= CHART ================= */

function loadChart(){

let orderMap = {}
let bookingMap = {}

orders.forEach(o=>{
let d = new Date(o.createdDate).toLocaleDateString("en-IN")
orderMap[d] = (orderMap[d] || 0) + Number(o.total || 0)
})

bookings.forEach(b=>{
let d = new Date(b.createdDate).toLocaleDateString("en-IN")
bookingMap[d] = (bookingMap[d] || 0) + Number(b.total || 0)
})

let labels = [...new Set([
...Object.keys(orderMap),
...Object.keys(bookingMap)
])]

let orderData = labels.map(d => orderMap[d] || 0)
let bookingData = labels.map(d => bookingMap[d] || 0)

if(document.getElementById("revenueChart")){
new Chart(document.getElementById("revenueChart"),{
type:'line',
data:{
labels:labels,
datasets:[
{ label:'Orders Revenue', data:orderData, borderWidth:2 },
{ label:'Bookings Revenue', data:bookingData, borderWidth:2 }
]
}
})
}

}

loadChart()

/* ================= LOAD ORDERS ================= */


/* ================= BOOKINGS ================= */

loadBookings()
function updateBookingStatus(i,status){

let bookings = JSON.parse(localStorage.getItem("machineBookings")) || []

let machine = bookings[i].machine
let createdDate = bookings[i].createdDate

let realIndex = bookings.findIndex(b => 
b.machine === machine && b.createdDate === createdDate
)

if(realIndex !== -1){
bookings[realIndex].status = status
}

localStorage.setItem("machineBookings", JSON.stringify(bookings))

location.reload()

}

/* ================= ACTIONS ================= */

function acceptOrder(i){
orders[i].status = "Accepted"
localStorage.setItem("orders", JSON.stringify(orders))
location.reload()
}

function deleteOrder(i){
if(confirm("Delete this order?")){
orders.splice(i,1)
localStorage.setItem("orders", JSON.stringify(orders))
location.reload()
}
}

function deleteBooking(i){
if(confirm("Delete booking?")){
bookings.splice(i,1)
localStorage.setItem("machineBookings", JSON.stringify(bookings))
location.reload()
}
}
function updateOrderStatus(i,status){

async function loadOrdersFromServer(){

try{

let res = await fetch("https://script.google.com/macros/s/AKfycbwvwBT--IH_npMdx5T_UnxFtuEm0h57knsPZhyqZo0wMXnjC3e-FG3ZjnIeiI9Hu2Wp/exec")

let data = await res.json()

orders = data.slice(1)

console.log("Admin orders:", orders)

loadStatsUI()
loadOrders(orders)

}catch(err){
console.error("Error loading orders", err)
}

}

// 🔥 FIND USING ID (NOT INDEX)
let orderID = orders[i].orderID

let realIndex = orders.findIndex(o => o.orderID === orderID)

if(realIndex !== -1){
orders[realIndex].status = status
}

localStorage.setItem("orders", JSON.stringify(orders))

location.reload()

}
loadServerData()
function loadOrders(orders){

let container = document.getElementById("ordersContainer")
container.innerHTML = "<h2>Orders</h2>"

orders.forEach((o,i)=>{

let html = `
<div class="card">

<b>ID:</b> AGR${1000+i}<br><br>

<b>Name:</b> ${o[2]}<br><br>

<b>Phone:</b> ${o[3]} 
<a href="tel:${o[3]}">📞</a><br><br>

<b>Address:</b> ${o[6]} 
<a target="_blank" href="https://www.google.com/maps/search/?api=1&query=${o[6]}">📍</a><br><br>

<b>Total:</b> ₹${o[5] || 0}<br><br>

<b>Payment:</b> COD<br><br>

<b>Date:</b> ${o[0]}<br><br>

<b>Status:</b> <span style="color:orange">Processing</span><br><br>

<select>
<option>Processing</option>
<option>Shipped</option>
<option>Delivered</option>
<option>Cancelled</option>
</select>

<button class="delete" onclick="deleteOrder(${i})">Delete</button>

</div>
`

container.innerHTML += html

})

}
function loadOrders(orders){

let container = document.getElementById("ordersContainer")
container.innerHTML = "<h2>Orders</h2>"

orders.forEach((o,i)=>{

let html = `
<div class="card">

<b>ID:</b> AGR${1000+i}<br><br>

<b>Name:</b> ${o[2]}<br><br>

<b>Phone:</b> ${o[3]} 
<a href="tel:${o[3]}">📞</a><br><br>

<b>Address:</b> ${o[6]} 
<a target="_blank" href="https://www.google.com/maps/search/?api=1&query=${o[6]}">📍</a><br><br>

<b>Total:</b> ₹${o[5] || 0}<br><br>

<b>Payment:</b> COD<br><br>

<b>Date:</b> ${o[0]}<br><br>

<b>Status:</b> <span style="color:orange">Processing</span><br><br>

<select>
<option>Processing</option>
<option>Shipped</option>
<option>Delivered</option>
<option>Cancelled</option>
</select>

<button class="delete" onclick="deleteOrder(${i})">Delete</button>

</div>
`

container.innerHTML += html

})

}

/* ================= LOAD DATA ================= */

let orders = JSON.parse(localStorage.getItem("orders")) || []
let bookings = JSON.parse(localStorage.getItem("machineBookings")) || []

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

let orderTable = document.getElementById("ordersTable")
let bookingTable = document.getElementById("bookingTable")

/* ================= FORMAT MONEY ================= */

function formatMoney(val){
    return "\u20B9 " + Number(val || 0).toLocaleString("en-IN", {
        minimumFractionDigits: 2
    })
}

/* ================= STATS CALCULATION ================= */

/* ORDERS */
orders.forEach(o => {

    let amount = Number(o.total || 0)

    // TOTAL ORDER REVENUE
    orderRevenue += amount

    // TODAY REVENUE
    let orderDate = o.createdDate 
        ? new Date(o.createdDate).toLocaleDateString("en-IN") 
        : ""

    if(orderDate === today){
        todayRevenue += amount
    }

    /* 🔴 CANCEL */
    if(o.status === "Cancelled"){
        cancelRevenue += amount
        cancelCount++
    }

    /* 🔁 RETURN */
    if(o.return){
        returnRevenue += amount
        returnCount++
    }

})

/* BOOKINGS */
bookings.forEach(b => {

    let amount = Number(b.total || 0)
    bookingRevenue += amount

    let bookingDate = b.createdDate 
        ? new Date(b.createdDate).toLocaleDateString("en-IN") 
        : ""

    if(bookingDate === today){
        todayRevenue += amount
    }

    /* 🔴 BOOKING CANCEL */
    if(b.status === "Cancelled"){
        bookingCancelRevenue += amount
        bookingCancelCount++
    }

    /* 🔄 REBOOK */
    if(b.status === "Rescheduled"){
        rebookingCount++
    }

})

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

function loadOrders(data){

if(!orderTable) return

orderTable.innerHTML = ""

data.forEach((o,index)=>{

let row = orderTable.insertRow()

row.insertCell(0).innerText = o.orderID || "-"
row.insertCell(1).innerText = o.name || "-"
row.insertCell(2).innerText = o.phone || "-"
row.insertCell(3).innerText = o.address || "-"
row.insertCell(4).innerHTML = formatMoney(o.total)
row.insertCell(5).innerText = o.payment || "-"

let date = o.createdDate 
? new Date(o.createdDate).toLocaleDateString("en-IN") 
: "-"

row.insertCell(6).innerText = date

row.insertCell(7).innerHTML = 
o.status === "Accepted"
? "<span class='status-accepted'>Accepted</span>"
: "<span class='status-pending'>Pending</span>"

let action = row.insertCell(8)

action.innerHTML = `

<select onchange="updateOrderStatus(${index}, this.value)">
<option ${(o.status==="Processing")?"selected":""}>Processing</option>
<option ${(o.status==="Shipped")?"selected":""}>Shipped</option>
<option ${(o.status==="Delivered")?"selected":""}>Delivered</option>
<option ${(o.status==="Cancelled")?"selected":""}>Cancelled</option>
</select>

<button class="delete" onclick="deleteOrder(${index})">Delete</button>

`
})

}

loadOrders(orders)

/* ================= BOOKINGS ================= */

function loadBookings(){

if(!bookingTable) return

bookingTable.innerHTML = ""

bookings.forEach((b,index)=>{

let row = bookingTable.insertRow()

row.insertCell(0).innerText = b.name || "-"
row.insertCell(1).innerText = b.phone || "-"
row.insertCell(2).innerText = b.machine || "-"

let mDate = b.machineDate 
? new Date(b.machineDate).toLocaleDateString("en-IN") 
: "-"

row.insertCell(3).innerText = b.bookingDate || "-"
row.insertCell(4).innerText = mDate
row.insertCell(5).innerText = b.slot || "-"
row.insertCell(6).innerHTML = formatMoney(b.total)

let action = row.insertCell(7)

action.innerHTML = `

<select onchange="updateBookingStatus(${index}, this.value)">
<option ${(b.status==="Booked")?"selected":""}>Booked</option>
<option ${(b.status==="On the way")?"selected":""}>On the way</option>
<option ${(b.status==="Completed")?"selected":""}>Completed</option>
<option ${(b.status==="Cancelled")?"selected":""}>Cancelled</option>
</select>

<button class="delete" onclick="deleteBooking(${index})">Delete</button>

`
})

}

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

let orders = JSON.parse(localStorage.getItem("orders")) || []

// 🔥 FIND USING ID (NOT INDEX)
let orderID = orders[i].orderID

let realIndex = orders.findIndex(o => o.orderID === orderID)

if(realIndex !== -1){
orders[realIndex].status = status
}

localStorage.setItem("orders", JSON.stringify(orders))

location.reload()

}
const API_URL = "https://script.google.com/macros/s/AKfycbw95kOijhFrjNP8PNAPGcfolebFCOMOtdggyfCaNIoABjFLWgl9o9X8XDUmP4UwfjgC/exec"

/* ================= GLOBAL ================= */

let orders = []
let bookings = []

let statsData = {}

/* ================= FORMAT ================= */

function formatMoney(val){
  return "₹ " + Number(val || 0).toLocaleString("en-IN")
}

function formatDate(d){
  if(!d) return "N/A"
  return new Date(d).toLocaleString("en-IN")
}

/* ================= LOAD DATA ================= */

async function loadServerData(){
  try{

    let res = await fetch(API_URL)
    let data = await res.json()

    console.log("RAW DATA:", data)

    orders = []
    bookings = []

    data.forEach(d => {

      if(d.type === "order"){
        orders.push({
        orderID: d.orderID,
        name: d.name,
        phone: d.phone,
        address: d.address,
        total: d.total,
        payment: d.payment || "COD",
        status: d.status || "Processing",
        reason: d.reason || "",
        image: d.image || "",
        createdDate: d.createdDate || d.createDate
      })
      }

     if(d.type === "booking"){
    bookings.push({
    name: d.name,
    phone: d.phone,
    address: d.address,
    total: d.total,
    payment: d.payment || "COD",
    machine: d.machine,
    machineDate: d.machineDate,
    slot: d.slot,
    status: d.status || "Booked",
    cancelReason: d.reason || "",
    createdDate: d.createdDate || d.createDate
  })
}

    })

    calculateStats()
    loadStatsUI()
    loadChart()
    loadOrders(orders)
    loadBookings(bookings)

  }catch(err){
    console.error("Server error:", err)
  }
}

/* ================= CALCULATE ================= */

function calculateStats(){

  let cancelledOrders = 0
  let returnedOrders = 0
  let orderRevenue = 0

  let cancelledBookings = 0
  let rebookings = 0
  let bookingRevenue = 0

  orders.forEach(o=>{
    if(o.status === "Cancelled") cancelledOrders++
    else if(o.status === "Returned") returnedOrders++
    else orderRevenue += Number(o.total || 0)
  })

  bookings.forEach(b=>{
    if(b.status === "Cancelled") cancelledBookings++
    else if(b.status === "Rebooked") rebookings++
    else bookingRevenue += Number(b.total || 0)
  })

  statsData = {
    totalOrders: orders.length,
    cancelledOrders,
    returnedOrders,
    orderRevenue,

    totalBookings: bookings.length,
    cancelledBookings,
    rebookings,
    bookingRevenue,

    finalRevenue: orderRevenue + bookingRevenue
  }
}

/* ================= STATS UI ================= */

function loadStatsUI(){

  let s = statsData

  document.getElementById("stats").innerHTML = `
  <div class="stats-container">

    <div class="stat-box"><h3>Total Orders</h3><h2>${s.totalOrders}</h2></div>
    <div class="stat-box"><h3>Cancelled Orders</h3><h2 class="red">${s.cancelledOrders}</h2></div>
    <div class="stat-box"><h3>Returned Orders</h3><h2 class="red">${s.returnedOrders}</h2></div>
    <div class="stat-box"><h3>Order Revenue</h3><h2 class="green">₹${s.orderRevenue}</h2></div>

    <div class="stat-box"><h3>Total Bookings</h3><h2>${s.totalBookings}</h2></div>
    <div class="stat-box"><h3>Cancelled Bookings</h3><h2 class="red">${s.cancelledBookings}</h2></div>
    <div class="stat-box"><h3>Rebookings</h3><h2>${s.rebookings}</h2></div>
    <div class="stat-box"><h3>Booking Revenue</h3><h2 class="green">₹${s.bookingRevenue}</h2></div>

    <div class="stat-box"><h3>Final Revenue</h3><h2 class="blue">₹${s.finalRevenue}</h2></div>

  </div>
  `
}

/* ================= CHART ================= */

let revenueChart = null   // 🔥 ADD THIS TOP OF FILE

function loadChart(){

  let ctx = document.getElementById("revenueChart")
  if(!ctx) return

  let s = statsData

  // 🔥 DESTROY OLD CHART
  if(revenueChart){
    revenueChart.destroy()
  }

  revenueChart = new Chart(ctx,{
    type:'bar',
    data:{
      labels:["Orders","Bookings","Total"],
      datasets:[{
        label:'Revenue',
        data:[s.orderRevenue, s.bookingRevenue, s.finalRevenue]
      }]
    }
  })
}

/* ================= ORDERS ================= */

function loadOrders(data){

  let html = "<h2>📦 Orders</h2>"

  data.forEach((o,i)=>{

    html += `
    <div class="card">

      <b>Name:</b> ${o.name}<br>

      <b>Phone:</b> 
      <a href="tel:${o.phone}">📞 ${o.phone}</a><br>

      <b>Address:</b> 
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}" target="_blank">
        📍 ${o.address}
      </a><br>

      <b>Price:</b> ₹${o.total}<br>
      ${o.reason ? `<br><b>Reason:</b> ${o.reason}` : ""}
      <b>Payment:</b> ${o.payment}<br>
      <b>Date:</b> ${formatDate(o.createdDate)}<br>

      <b>Status:</b> 
      <span class="status-${o.status.toLowerCase()}">${o.status}</span>
      <select onchange="updateOrderStatus(${i}, this.value)">
        <option ${o.status==="Processing"?"selected":""}>Processing</option>
        <option ${o.status==="Cancelled"?"selected":""}>Cancelled</option>
        <option ${o.status==="Returned"?"selected":""}>Returned</option>
        <option ${o.status==="Delivered"?"selected":""}>Delivered</option>
      </select><br>
     ${o.image ? `<br><b>Return Proof:</b><br><img src="${o.image}" width="120">` : ""}
      <div id="orderExtra${i}"></div>

      <button onclick="showOrderExtra(${i})">Add Reason</button>
      <button class="delete" onclick="deleteOrder(${i})">Delete</button>

    </div>
    `
  })

  document.getElementById("ordersContainer").innerHTML = html
  document.getElementById("bookingsContainer").innerHTML = ""
}

/* ================= BOOKINGS ================= */

function loadBookings(data){

  let html = "<h2>🚜 Bookings</h2>"

  data.forEach((b,i)=>{

    html += `
    <div class="card">

      <b>Name:</b> ${b.name}<br>

      <b>Phone:</b> 
      <a href="tel:${b.phone}">📞 ${b.phone}</a><br>

      <b>Address:</b> 
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}" target="_blank">
        📍 ${b.address}
      </a><br>

      <b>Machine:</b> ${b.machine}<br>
      <b>Machine Date:</b> ${b.machineDate}<br>
      <b>Slot:</b> ${b.slot}<br>

      <b>Price:</b> ₹${b.total}<br>
      <b>Payment:</b> ${b.payment}<br>

      <b>Status:</b> 
      <span class="status-${b.status.toLowerCase()}">${b.status}</span><br>

      ${b.cancelReason ? `<br><b>Reason:</b> ${b.cancelReason}` : ""}

      ${b.status==="Rebooked" ? `<p style="color:orange;"><b>Rebooked Slot:</b> ${b.machineDate} | ${b.slot}</p>` : ""}

      <select onchange="updateBookingStatus(${i}, this.value)">
      <option ${b.status==="Booked"?"selected":""}>Booked</option>
      <option ${b.status==="Cancelled"?"selected":""}>Cancelled</option>
      <option ${b.status==="Completed"?"selected":""}>Completed</option>
      <option ${b.status==="Rebooked"?"selected":""}>Rebooked</option>
      </select>

    

      <div id="bookingExtra${i}"></div>

      <button onclick="showBookingExtra(${i})">Add Reason</button>
      <button class="delete" onclick="deleteBooking(${i})">Delete</button>

    </div>
    `
  })

  document.getElementById("bookingsContainer").innerHTML = html
  document.getElementById("ordersContainer").innerHTML = ""
}

/* ================= STATUS ================= */

function updateOrderStatus(i,status){
  orders[i].status = status
  fetch(API_URL + 
    "?action=updateOrder" +
    "&orderID=" + orders[i].orderID +
    "&status=" + status
  )
  calculateStats()
  loadStatsUI()
}

function updateBookingStatus(i,status){

  bookings[i].status = status

  // 🔥 SERVER UPDATE
  fetch(API_URL +
    "?action=updateBooking" +
    "&phone=" + bookings[i].phone +
    "&status=" + status
  )

  calculateStats()
  loadStatsUI()
}

/* ================= EXTRA ================= */

function showOrderExtra(i){
  document.getElementById("orderExtra"+i).innerHTML = `
    <textarea id="reason${i}" placeholder="Reason"></textarea><br>
    <input type="file" id="img${i}"><br>
    <button onclick="saveOrderExtra(${i})">Save</button>
  `
}

function saveOrderExtra(i){

  let reason = document.getElementById("reason"+i).value
  let img = document.getElementById("img"+i).files[0]

  orders[i].reason = reason

  // 🔥 SERVER UPDATE
  fetch(API_URL +
    "?action=updateOrder" +
    "&orderID=" + orders[i].orderID +
    "&reason=" + encodeURIComponent(reason)
  )

  if(img){
    orders[i].image = URL.createObjectURL(img)
  }

  alert("Saved")
}

function showBookingExtra(i){
  document.getElementById("bookingExtra"+i).innerHTML = `
    <textarea id="breason${i}" placeholder="Reason"></textarea><br>
    <button onclick="saveBookingExtra(${i})">Save</button>
  `
}

function saveBookingExtra(i){

  let reason = document.getElementById("breason"+i).value

  bookings[i].cancelReason = reason

  fetch(API_URL +
    "?action=updateBooking" +
    "&phone=" + bookings[i].phone +
    "&reason=" + encodeURIComponent(reason)
  )

  alert("Saved ✅")
}

/* ================= DELETE ================= */

function deleteOrder(index){
  if(confirm("Delete this order?")){
    orders.splice(index,1)
    loadOrders(orders)
    calculateStats()
    loadStatsUI()
  }
}

function deleteBooking(index){
  if(confirm("Delete this booking?")){
    bookings.splice(index,1)
    loadBookings(bookings)
    calculateStats()
    loadStatsUI()
  }
}
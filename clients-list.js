const clientsList = [
  {
    name: "You",
    paymentStatus: "paid",
    img: "./images/you.webp",
  },

  {
    name: "Messi",
    paymentStatus: "paid",
    img: "./images/messi.webp",
  },
  {
    name: "Ronaldo",
    paymentStatus: "paid",
    img: "./images/ronaldo.webp",
  },
  {
    name: "Terry",
    paymentStatus: "unpaid",
    img: "./images/terry.webp",
  },
  {
    name: "Salah",
    paymentStatus: "unpaid",
    img: "./images/salah.webp",
  },
];

const clients = document.querySelector(".clients-list");

clientsList.forEach((props) => addClient(props));

function addClient(props) {
  const { name, img, paymentStatus } = props;
  const client = document.createElement("section");
  client.className = `client ${name} ${paymentStatus}`;
  console.log();

  client.innerHTML = `
        <div class="image">
        <img src="${img}" alt="{name}"/>
        </div>
        <div class="name">
        <p>${name}</p>
        </div>
        <div class="status">
        <div class="icon">
          <i class="${
            paymentStatus == "paid" ? "fas fa-circle-check" : "fas fa-clock"
          }"></i>
        </div>
       
        ${paymentStatus}
        </div>
    `;

  clients.appendChild(client);
}

const payment_process = [
  {
    icon: "fas fa-circle-check",
    show: true,
    name: "check",
  },
  {
    icon: "fas fa-circle-check",
    show: true,
    name: "check",
  },
  {
    icon: "fas fa-circle-check",
    show: true,
    name: "check",
  },
  {
    icon: "fas fa-circle",
    show: true,
    name: "span-box",
  },
  {
    icon: "fas fa-stamp",
    show: false,
    name: "stamp",
  },
];

const process = document.querySelector(".processing");
payment_process.forEach((_process) => {
  const process_container = document.createElement("div");
  const spanEl = _process.show
    ? `<span class="rect ${_process.name}"></span>`
    : "";
  process_container.className = "process-container";
  process_container.innerHTML = `
    <div class="icon-container">
    <div class="circle">
    <i class="${_process.icon}"></i>
    </div>
    ${spanEl}
    </div>
    `;
  process.appendChild(process_container);
});

// An array of freelancer's name, price & occupation.
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const addFreelancerInterval = setInterval(addFreelancer, 2000);
const maxFreelancersList = 10;

// Initial array of two freelancers.
const startingFreelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50
    },
];

// A function to render the list of freelancers.
function render() {
    const newFreelancers = document.querySelector("#freelancers");
    newFreelancers.innerHTML = '';
    startingFreelancers.forEach((freelancer) => {
        const element = document.createElement("li");
        element.textContent = `${freelancer.name} * ${freelancer.occupation} * $${freelancer.price}`;
        newFreelancers.appendChild(element);
    });
};

render();

// A function to add random freelancers.
function addFreelancer() {
    const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    startingFreelancers.push(freelancer);

// Stop adding once it reaches the maximum freelancers list.
    if (startingFreelancers.length >= maxFreelancersList) {
        clearInterval(addFreelancerInterval);
    };

    render();
};
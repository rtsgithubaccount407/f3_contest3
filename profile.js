const info = document.getElementById("info");
const logout = document.getElementById("logout-btn");

const userState = JSON.parse(localStorage.getItem("userState"));

console.log(userState);

info.innerHTML =
    `<p>Full Name: <span>${userState.userName}</span></p>
<p>Email: <span>${userState.email}</span></p>
<p>Password: <span>${userState.password}</span></p>`;

logout.addEventListener("click", () => {
    localStorage.removeItem("userState");
    window.location.href = 'index.html';
})
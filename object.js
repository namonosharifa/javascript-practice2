const user = {
    name: "Sarah Willam",
    age: 27,
    bio: "Front-end developer and cat lover, Enjoys hiking and coffee",
    image: "/istockphoto-154376441-612x612.jpg"
}
// Use Javascript to update HTML with object values
document.getElementById("user-name").textContent = user.name;
document.getElementById("user-age").textContent = "age: " + user.age;
document.getElementById("user-bio").textContent = user.bio;
document.getElementById("user-image").src = user.image;


// Add a function to update user info dynamically
function updateUserInfo(newUser) {
    document.getElementById("user-name").textContent = newUser.name;
    document.getElementById("user-age").textContent = "age: " + newUser.age;
    document.getElementById("user-bio").textContent = newUser.bio;
    document.getElementById("user-image").src = newUser.image;
}
const fs = require("fs");
const fileName = "users.json";

try {
    const data = fs.readFileSync(fileName);
    // Os dados são retornados em um formato
    // especial, por isso precisamos chamar o
    // método toString.
    const treatedData = data.toString();
    const allUsers = JSON.parse(treatedData);
    const onlyUsernamesAndEmails=allUsers.map(user => `${user.username} - ${user.email}`)

    console.log(`Total de usuários ${onlyUsernamesAndEmails.length}`);
    console.log(onlyUsernamesAndEmails)

}   catch(err) {
    console.log(err)
}
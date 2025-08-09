const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

async function login(id, pw) {
    const user = await prisma.users.findUnique({
        where: { id: id },
    })
    if (user == null) return "noAcc"
    if (user.pw != pw) return "pwError"
    return "success"
}

async function updateAcc({ id = null, name = null, email = null, pw = null }) {
    if (id != null) {
        const user = await prisma.users.findUnique({
            where: { id: id }
        })
        if (user != null) {
            const updatedData = {}
            if (name != null)
                updatedData.name = name
            if (email != null)
                updatedData.email = email
            if (pw != null)
                updatedData.pw = pw
            await prisma.users.update({
                where: { id: id },
                data: updatedData
            })
        }
    }
}

async function signup({ id, name, email, pw }) {
    const user = await prisma.users.findUnique({
        where: { id: id },
    })
    if (user != null) {
        return "userExists";
    }
    else {
        await prisma.users.create({
            data: {
                id: id,
                name: name,
                email: email,
                pw: pw,
                role: "company",
            }
        })
        return "success"
    }
}




(async () => {
})()




module.exports = { login, updateAcc }
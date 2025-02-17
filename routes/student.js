const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const teamMembers = [
        {
            name: "Марченко Артем",
            age: 3,
            group: "ІА-34",
            university: "КПІ"
        },
        {
            name: "Сухоручкін Гліб",
            age: 4,
            group: "ІА-34",
            university: "КПІ"
        },
        {
            name: "Ястремський Богдан",
            age: 5,
            group: "ІА-34",
            university: "КПІ"
        }
    ];
    res.render("student", { teamMembers });
});

module.exports = router;

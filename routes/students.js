var express = require("express");
var router = express.Router();

// Масив студентів
const students = [
    { id: 1, name: "Сухоручкін Гліб", role: "Розробник", hobby: "programming" },
    { id: 2, name: "Марченко Артем", role: "Дизайнер", hobby: "football" },
    { id: 3, name: "Ястремський Богдан", role: "Тестувальник", hobby: "volleyball" },
];

/* GET список студентів */
router.get("/", function (req, res, next) {
    res.render("students", { title: "Список студентів", students });
});

/* GET сторінку конкретного студента */
router.get("/:id", function (req, res, next) {
    const studentId = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentId);

    if (!student) {
        return res.status(404).send("Студента не знайдено!");
    }

    res.render("student", { title: "Інформація про студента", student });
});

module.exports = router;

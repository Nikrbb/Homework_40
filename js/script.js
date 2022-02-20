(()=> {
    "use strict"

    function Student(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.age = () => new Date().getFullYear() - this.birthYear;
        this.attendance = Array(10);
        this.academicPerformance = Array(10);
        this.present = () => {
            for (let i = 0; i < this.attendance.length; i++) {
                if (this.attendance[this.attendance.length - 1] !== undefined) {
                    throw new Error(`Attendance can't contain more then 10 visits`);
                }
                if (this.attendance[i] === undefined) {
                    this.attendance[i] = true;
                    return;
                }
            }
        };
        this.absent = () => {
            for (let i = 0; i < this.attendance.length; i++) {
                if (this.attendance[this.attendance.length - 1] !== undefined) {
                    throw new Error(`Attendance can't contain more then 10 visits`);
                }
                if (this.attendance[i] === undefined) {
                    this.attendance[i] = false;
                    return;
                }
            }
        };
        this.mark = grade => {
            for (let i = 0; i < this.academicPerformance.length; i++) {
                if (this.academicPerformance[this.academicPerformance.length - 1] !== undefined) {
                    throw new Error(`Academic performance can't contain more then 10 marks`);
                }
                if (this.academicPerformance[i] === undefined) {
                    this.academicPerformance[i] = grade;
                    return;
                }
            }
        };
        this.summary = () => {
            const { averageAttendance } = this.attendance.reduce((average, current, index) => {
                if (current) average.visits += 1;
                average.amount = index + 1;
                average.averageAttendance = average.visits / average.amount;
                return average;
            }, {
                visits: null,
                amount: null,
                averageAttendance: null,
            });

            const { averagePerformance } = this.academicPerformance.reduce((average, current, index) => {
                    average.marks += current;
                    average.amount = index + 1;
                    average.averagePerformance = average.marks / average.amount;
                    return average;
            }, {
                marks: null,
                amount: null,
                averagePerformance: null,
            })

            if (averagePerformance > 9 && averageAttendance > 0.9) return "Ути какой молодчинка!";
            if (averagePerformance >= 9 || averageAttendance >= 0.9) return "Норм, но можно лучше";
            if (averagePerformance < 9 && averageAttendance < 0.9) return "Редиска!";


        };
    }



    let mark = new Student("Mark", "Bedarov", 2001);
    mark.present()
    mark.absent()
    mark.present()
    mark.absent()

    mark.mark(10)
    mark.mark(10)
    mark.mark(6)
    mark.mark(7)
    console.log(mark.name, mark.summary())

    let oleh = new Student("Oleh", "Tarasenko", 1998);
    oleh.present()
    oleh.present()
    oleh.present()
    oleh.present()
    oleh.absent()
    oleh.present()
    oleh.absent()

    oleh.mark(11)
    oleh.mark(12)
    oleh.mark(9)
    oleh.mark(9)
    oleh.mark(9)
    oleh.mark(10)
    oleh.mark(10)
    console.log(oleh.name, oleh.summary())


    let vasya = new Student("Vasya", "Vasiliy", 1898);
    vasya.present()
    vasya.present()
    vasya.present()
    vasya.present()

    vasya.mark(11)
    vasya.mark(12)
    vasya.mark(10)
    console.log(vasya.name, vasya.summary())
})()
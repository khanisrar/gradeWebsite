const showData = document.querySelector('.showData');

showData.style.display = 'none';
const physics = document.querySelector('#phy')
const chemistry = document.querySelector('#che')
const math = document.querySelector('#math')
const hindi = document.querySelector('#hin')
const english = document.querySelector('#eng')
const subjects = [physics, chemistry, math, hindi, english];

const submitButton = document.querySelector('.submitButton')



const calcy = () => {

    if (isAllSubjectMarkEntered()) {
        console.log('proceed every mark is there')
    } else {
        console.log('please input some subjects  marks')
        return;
    }

    let Phy = document.getElementById('phy').value;
    let Che = document.getElementById('che').value;
    let Math = document.getElementById('math').value;
    let Hin = document.getElementById('hin').value;
    let Eng = document.getElementById('eng').value;
    let Grade = "";

    let totalGrade = parseFloat(Phy) + parseFloat(Che) + parseFloat(Math) + parseFloat(Hin) + parseFloat(Eng);
    // alert(totalGrade)

    let perc = (totalGrade / 500) * 100;
    // alert(perc)

    if (perc <= 100 && perc >= 80) {
        Grade = 'A';

    } else if (perc <= 79 && perc >= 60) {
        Grade = 'B';
    } else if (perc <= 59 && perc >= 40) {
        Grade = 'C';
    } else {
        Grade = "F";
    }
    showData.style.display = 'block'
    showData.innerHTML = `Total = ${totalGrade} <br> Percentage = ${perc}%. <br> Grade = ${Grade} `


}

subjects.forEach((subject) => {
    subject.addEventListener('input', (e) => {
        if (subject.value.length === 2) {
            let indexOfCurrentSubject = subjects.indexOf(subject);
            if (indexOfCurrentSubject < subjects.length - 1) {
                subjects[indexOfCurrentSubject + 1].focus();
            }
            if (indexOfCurrentSubject === subjects.length - 1) {
                submitButton.focus();
            }
        }
    })
})

// const subjects = [physics, chemistry, math, hindi, english];

// for (let i = 0; i < subjects.length - 1; i++) {
//     let subject = subjects[i];
//     subject.addEventListener('input', (e) => {
//         if (subject.value.length === 2) {
//             subjects[i + 1].focus();
//         }
//     })
// }


function isAllSubjectMarkEntered() {
    let canWeProceed = true;
    // subjects.forEach((subject) => {

    // })
    for (let subject of subjects) {
        if (Number(subject.value) === 0) {
            subject.focus();

            canWeProceed = false;
            break;
        }
    }
    return canWeProceed;
}
const calcy = () => {
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
    document.getElementById('showData').innerHTML = `Total = ${totalGrade} <br> Percentage = ${perc}%. <br> Grade = ${Grade} `


}
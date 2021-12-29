const dateBeforeFormat: string = "12:12:50PM";

function timeConversion(s: string): string {
    let convertJam: number = 0;
    let formatTimeTo24: string = "";
    const formatModifer: string = s.slice(-2);
    const timeBeforeFormated: string = s.substring(0, 8);

    const [jam, menit, detik] = timeBeforeFormated.split(':');

    if(formatModifer == "PM") {
        if(jam == "12") {
            formatTimeTo24 = `12:${menit}:${detik}`;
        } else {
            convertJam = parseInt(jam) + 12;
            formatTimeTo24 = `${convertJam.toString()}:${menit}:${detik}`;
        }
    } else { // AM
        if(jam == "12") {
            formatTimeTo24 = `00:${menit}:${detik}`;
        } else {
            formatTimeTo24 = timeBeforeFormated;
        }
    }

    return formatTimeTo24;
}

console.log(timeConversion(dateBeforeFormat));
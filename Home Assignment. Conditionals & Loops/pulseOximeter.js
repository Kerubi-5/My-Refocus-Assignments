function pulseOximeterReader(oxygenLvl, pulseRate) {
  if (oxygenLvl > 95 && pulseRate >= 40 && pulseRate <= 100) {
    console.log("Normal reading.");
  } else if (oxygenLvl === 95 && pulseRate >= 101 && pulseRate <= 109) {
    console.log("Acceptable to continue home monitoring.");
  } else if (
    oxygenLvl >= 92 &&
    oxygenLvl < 95 &&
    pulseRate >= 110 &&
    pulseRate <= 130
  ) {
    console.log("Seek advice from health professionals.");
  } else {
    console.log("Seek urgent medical advice.");
  }
}

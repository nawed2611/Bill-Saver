export default function Tips() {
  let max = 19;

  const tips = [
    "Stop paying to see your credit score.",
    "Bring your lunch to work.",
    "Buy a water filter.",
    "Think before you make a big purchase.",
    "Go on almost free vacations just by using your credit card.",
    "Birthday freebies.",
    "Meal plan as one of the easy money saving tips.",
    "Switch to a more affordable cell phone plan.",
    "Quit smoking (one money saving tip that will save your life).",
    "Make a budget.",
    "Find ways to work from home.",
    "Drive a more affordable car.",
    "Use a programmable thermostat.",
    "Pay off your debt quickly.",
    "Eat out one less time each month.",
    "Cancel your gym membership.",
    "Receive cash back on your purchases.",
    "Negotiate your car and home insurance bills.",
    "Take a staycation.",
    "Buy used as one of the easy ways to save money."
  ];

  const handleClick = () => {
    let random = Math.floor(Math.random() * max);
    alert(tips[random]);
  };

  return (
    <div className="tips">
      <button onClick={handleClick}>Tips</button>
    </div>
  );
}

import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa"; // Eye icon
import Navbar from "./Navbar";
import Footer from "./Footer";

// Workouts for Calisthenics (root)
const calisthenics = {
  1: {
    title: "Chest, Shoulders, Triceps (Push Day)",
    exercises: [
      "Warm-up: Move your arms and do small push-ups – 5 min",
      "Push-ups – 4 sets of 12 reps (hands on floor, lower chest, push back up)",
      "Incline push-ups – 3 sets of 12 reps (hands on table/chair, push up)",
      "Dips – 3 sets of 10 reps (use chair/bench, lower body, push back up)",
      "Pike push-ups – 3 sets of 8 reps (form upside-down V, head down, push up)",
      "Plank – 3 sets of 45 seconds (hold body straight like a board)",
      "Stretch chest and shoulders after workout"
    ]
  },
  2: {
    title: "Legs",
    exercises: [
      "Warm-up: Jumping jacks and high knees – 5 min",
      "Squats – 4 sets of 15 reps (stand, bend knees like sitting, stand up)",
      "Lunges – 3 sets of 12 reps per leg (step forward, bend knees, push back)",
      "Glute bridges – 3 sets of 15 reps (lie on back, lift hips, squeeze butt, lower down)",
      "Calf raises – 4 sets of 20 reps (stand on toes, lower slowly)",
      "Optional: Jump squats – 3 sets of 10 reps (squat and jump up)",
      "Stretch legs after workout"
    ]
  },
  3: {
    title: "Back and Biceps (Pull Day)",
    exercises: [
      "Warm-up: Swing your arms – 5 min",
      "Pull-ups – 4 sets of 6–8 reps (hang on bar, pull chin above bar, lower slowly)",
      "Chin-ups – 3 sets of 6–8 reps (palms facing you, pull up)",
      "Inverted rows – 3 sets of 10 reps (under table/bar, pull chest to bar)",
      "Australian pull-ups – 3 sets of 12 reps (bar lower, body at angle, pull up)",
      "Hanging leg raises – 3 sets of 10 reps (hang on bar, lift legs up, lower slowly)",
      "Stretch back and arms after workout"
    ]
  },
  4: {
    title: "Core and Cardio",
    exercises: [
      "Warm-up: Jog or jump rope – 5 min",
      "Plank – 3 sets of 45 sec (front and sides, hold body straight)",
      "Bicycle crunches – 3 sets of 20 reps (lie on back, alternate elbow to knee)",
      "Mountain climbers – 3 sets of 30 sec (push-up position, bring knees to chest fast)",
      "Leg raises – 3 sets of 12 reps (lie on back, lift legs up, lower slowly)",
      "Optional: HIIT – 10 min (burpees, jumping jacks, fast movements)",
      "Stretch core after workout"
    ]
  },
  5: {
    title: "Full Body",
    exercises: [
      "Warm-up: Move and stretch – 5 min",
      "Burpees – 3 sets of 10 reps (squat, jump, push-up, stand up)",
      "Push-ups – 3 sets of 15 reps",
      "Pull-ups – 3 sets of 6–8 reps",
      "Squats – 3 sets of 15 reps",
      "Plank with shoulder taps – 3 sets of 20 reps (plank position, tap each shoulder)",
      "Optional: Dips – 2 sets of 10 reps",
      "Stretch full body after workout"
    ]
  },
  6: {
    title: "Skill and Flexibility",
    exercises: [
      "Warm-up: Move your body and stretch – 5 min",
      "Handstand practice (against wall) – 5 sets of 20–30 sec (kick up, hold wall for balance)",
      "L-sit practice – 4 sets of 10–15 sec (sit on floor, lift legs straight, hold)",
      "Hip mobility and leg stretches – 10–15 min (move hips, stretch hamstrings and quads)",
      "Optional: Light walking – 15–20 min"
    ]
  },
  7: {
    title: "Rest",
    exercises: [
      "Take full rest",
      "Or do light walking, yoga, or stretching"
    ]
  }
};

// Workouts for Yoga
const yoga = {
  1: { title: "Full Body Stretch", exercises: ["सुखासन – ३ × ३० सेकंद", "बिल्ली-म्हणजे गाई – ३ × ८", "उत्कट श्वासासन – ३ × ३० सेकंद", "भुजंगासन – ३ × २० सेकंद", "बालासन – ३ × ३० सेकंद"] },
  2: { title: "Core Strength", exercises: ["नावासना – ३ × ३० सेकंद", "फलकासन – ३ × ४५ सेकंद", "साईड प्लँक – ३ × ३० सेकंद प्रत्येक बाजू", "सेतुबंधासन – ३ × ३० सेकंद"] },
  3: { title: "Lower Body & Balance", exercises: ["वीरभद्रासन I – ३ × ३० सेकंद प्रत्येक बाजू", "वीरभद्रासन II – ३ × ३० सेकंद प्रत्येक बाजू", "त्रिकोणासन – ३ × ३० सेकंद प्रत्येक बाजू", "उत्कटासन – ३ × ३० सेकंद", "गरुडासन – ३ × ३० सेकंद प्रत्येक बाजू"] },
  4: { title: "Upper Body & Shoulders", exercises: ["डॉल्फिन पोज – ३ × ३० सेकंद", "पप्पी पोज – ३ × ३० सेकंद", "अर्ध धनुरासन – ३ × २० सेकंद प्रत्येक बाजू", "सुईत – ३ × ३० सेकंद प्रत्येक बाजू", "अर्ध फलकासन – ३ × ४५ सेकंद"] },
  5: { title: "Flexibility & Stretch", exercises: ["सुप्त पश्चिमोत्तानासन – ३ × ३० सेकंद", "अर्ध मछली आसन – ३ × ३० सेकंद प्रत्येक बाजू", "पार्श्वकोणासन – ३ × ३० सेकंद प्रत्येक बाजू", "अर्ध चंद्रासन – ३ × ३० सेकंद प्रत्येक बाजू", "पाय पुढे सरकवून वाकणे – ३ × ३० सेकंद"] },
  6: { title: "Relaxation & Recovery", exercises: ["सुपाईन ट्विस्ट – ३ × ३० सेकंद प्रत्येक बाजू", "हॅपी बेबी पोज – ३ × ३० सेकंद", "सेतुबंधासन – ३ × ३० सेकंद", "विपरीत पाय भिंतीवर – ३ × २ मिनिटे", "शवासन – ५–१० मिनिटे"] },
  7: { title: "Rest / Gentle Flow", exercises: ["हलके चालणे किंवा सौम्य योगा स्ट्रेचेस", "गहिरे श्वास घेणे – ५ मिनिटे"] },
};

// Workouts for Gym
const gym = {
  1: { 
    title: "Chest + Triceps (Front Body)", 
    exercises: [
      "Warm-up: walk on treadmill 5 min",
      "Bench Press – 3 × 10 (push bar up and down)",
      "Dumbbell Fly – 3 × 12 (spread arms like hug)",
      "Tricep Pushdown – 3 × 12 (push cable down)",
      "Overhead Dumbbell Extension – 3 × 12",
      "Finish: Push-ups – 2–3 min"
    ] 
  },
  2: { 
    title: "Back + Biceps (Back + Front Arm)", 
    exercises: [
      "Warm-up: row machine or jump 5 min",
      "Lat Pulldown – 3 × 12 (pull bar down)",
      "Seated Row – 3 × 12 (pull cable to chest)",
      "Dumbbell Curl – 3 × 12",
      "Hammer Curl – 3 × 12",
      "Finish: Pull-ups – 2–3 min (use help if needed)"
    ] 
  },
  3: { 
    title: "Legs", 
    exercises: [
      "Warm-up: bike 5 min",
      "Squats – 3 × 12 (sit down like chair and stand)",
      "Leg Press – 3 × 12",
      "Lunges – 2 × 12 per leg (step forward, bend knees)",
      "Leg Curl – 3 × 12 (curl leg on machine)",
      "Calf Raise – 3 × 15 (stand on toes)"
    ] 
  },
  4: { 
    title: "Shoulders + Abs", 
    exercises: [
      "Warm-up: jump rope 5 min",
      "Dumbbell Press – 3 × 12 (push dumbbells up)",
      "Lateral Raise – 3 × 12 (lift arms sideways)",
      "Front Raise – 3 × 12 (lift arms front)",
      "Plank – 3 × 30 sec (hold body straight)",
      "Crunch – 3 × 15",
      "Bicycle Crunch – 3 × 20"
    ] 
  },
  5: { 
    title: "Full Body (Light)", 
    exercises: [
      "Warm-up: treadmill 5 min",
      "Deadlift (light) – 3 × 10 (lift bar from floor)",
      "Push-ups – 3 × 15",
      "Pull-ups or Lat Pulldown – 3 × 10",
      "Dumbbell Shoulder Press – 3 × 12",
      "Bodyweight Squats – 3 × 15"
    ] 
  },
  6: { 
    title: "Cardio + Abs", 
    exercises: [
      "Cardio: treadmill / bike / row 15 min",
      "Plank – 3 × 40 sec",
      "Leg Raise – 3 × 12 (lift legs up lying down)",
      "Russian Twist – 3 × 20 (twist torso with weight)",
      "Mountain Climbers – 3 × 20"
    ] 
  },
  7: { 
    title: "Rest / Stretch", 
    exercises: [
      "Rest or light stretching / yoga",
      "Relax your muscles"
    ] 
  }
};

// Map day number to day name
const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function Dashboard() {
  const todayNumber = new Date().getDay(); // 0 = Sunday
  const todayName = dayNames[todayNumber];

  // State for clicked icon
  const [clickedIdx, setClickedIdx] = useState(null);
  // State for selected workout type
  const [selectedType, setSelectedType] = useState("calisthenics"); // default root

  const [timeLeft, setTimeLeft] = useState(1800);
const [isRunning, setIsRunning] = useState(false);
const [isCompleted, setIsCompleted] = useState(false);


const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const resetTimer = () => {
  setIsRunning(false);
  setIsCompleted(false);
  setTimeLeft(1800);
};

useEffect(() => {
  let timer;

  if (isRunning && timeLeft > 0) {
    timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  }

  if (timeLeft === 0) {
    setIsRunning(false);
    setIsCompleted(true);
  }

  return () => clearInterval(timer);
}, [isRunning, timeLeft]);

  // Decide which workouts to use
  let workoutToday;
  if (selectedType === "calisthenics") workoutToday = calisthenics[todayNumber];
  else if (selectedType === "yoga") workoutToday = yoga[todayNumber];
  else if (selectedType === "gym") workoutToday = gym[todayNumber];

  return (
    <div className="h-screen bg-gradient-to-b from-green-200 to-white text-gray-900">
      <Navbar selectedType={selectedType} setSelectedType={setSelectedType} />

      <div className="p-6 flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg mb-6 animate-pulse">
          Today is {todayName} 🌟
        </h2>

        {workoutToday ? (
          <>
            <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-4">
              {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} – {workoutToday.title} 🏋️‍♂️
            </h1>

            <div className="bg-white text-gray-900 p-6 rounded-3xl shadow-2xl max-w-4xl w-full overflow-y-auto h-[600px] space-y-4">
              {workoutToday.exercises.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-4 rounded-xl shadow-md text-gray-900 font-semibold flex justify-between items-center hover:scale-105 transform transition duration-300"
                >
                  <span>{ex}</span>
                  <button
                    onClick={() => setClickedIdx(clickedIdx === idx ? null : idx)}
                    className="text-gray-800 hover:text-yellow-500 ml-4"
                  >
                    <FaEye />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="text-3xl font-bold text-white bg-red-500 px-4 py-2 rounded-xl shadow-lg">
            Rest Day! 🛌 Take it easy today.
          </h1>
        )}
      </div>



    <div className="w-full flex justify-center items-center mt-10 px-4">
  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
    
    <h2 className="text-2xl font-bold mb-4">
      ⏱ 30 Minute Workout Timer
    </h2>

    <div className="text-5xl font-extrabold mb-6 tracking-wider">
      {formatTime(timeLeft)}
    </div>

    <div className="flex justify-center gap-4">
      {!isRunning && !isCompleted && (
        <button
          onClick={() => setIsRunning(true)}
          className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          Start
        </button>
      )}

      {isRunning && (
        <button
          onClick={() => setIsRunning(false)}
          className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          Pause
        </button>
      )}

      <button
        onClick={resetTimer}
        className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full shadow-md transition"
      >
        Reset
      </button>
    </div>

    {isCompleted && (
      <div className="mt-5 text-yellow-300 font-bold text-xl animate-bounce">
        🎉 Successfully Completed! Great Job 💪
      </div>
    )}
  </div>
</div>



      <Footer />
    </div>
  );
}

export default Dashboard;
const dailyGoals = [
    "Complete all scheduled revision tasks today.",
    "Focus on understanding core concepts before practice.",
    "Finish pending topics and revise previous lessons.",
    "Strengthen weak areas identified in earlier sessions.",
    "Complete today's target without skipping revisions.",
    "Practice questions after every concept revision.",
    "Allocate extra time to difficult chapters today.",
    "Aim to finish all high-priority tasks."
];

const aiSuggestions = [
    "Spend more time on subjects with low preparation levels.",
    "Revise formulas and key concepts before attempting questions.",
    "Focus on accuracy rather than speed today.",
    "Prioritize subjects with upcoming exam dates.",
    "Practice PYQs to improve exam confidence.",
    "Review mistakes from previous study sessions.",
    "Take short breaks to maintain concentration.",
    "Start with difficult topics when your energy is highest."
];

const progressMessages = [
    "You are steadily moving toward your exam goals.",
    "Consistent effort today will improve overall completion.",
    "Keep maintaining your study rhythm.",
    "Small daily improvements lead to big results.",
    "You are on track if today's targets are completed.",
    "Regular revision will boost retention significantly.",
    "Your preparation level is improving day by day.",
    "Stay focused to maximize syllabus coverage."
];

const dailyGoalsHi = [
    "आज की सभी पुनरावृत्ति गतिविधियाँ पूरी करें।",
    "अभ्यास से पहले मुख्य अवधारणाएँ समझें।",
    "पिछले विषयों की पुनरावृत्ति करें।",
    "कमज़ोर क्षेत्रों को मजबूत करें।",
    "आज का लक्ष्य पूरा करें।",
    "हर अवधारणा के बाद प्रश्न हल करें।",
    "कठिन अध्यायों पर अधिक समय दें।",
    "उच्च प्राथमिकता वाले कार्य पूरे करें।"
];

const aiSuggestionsHi = [
    "कम तैयारी वाले विषयों पर अधिक समय दें।",
    "प्रश्न हल करने से पहले सूत्र दोहराएँ।",
    "गति से अधिक सटीकता पर ध्यान दें।",
    "निकट परीक्षा वाले विषयों को प्राथमिकता दें।",
    "PYQs हल करें।",
    "पुरानी गलतियों की समीक्षा करें।",
    "छोटे ब्रेक लें।",
    "कठिन विषय पहले पढ़ें।"
];

const progressMessagesHi = [
    "आप अपने लक्ष्य की ओर बढ़ रहे हैं।",
    "नियमित प्रयास सफलता दिलाएंगे।",
    "अपनी पढ़ाई की लय बनाए रखें।",
    "छोटे सुधार बड़े परिणाम देते हैं।",
    "आप सही दिशा में हैं।",
    "नियमित पुनरावृत्ति याददाश्त बढ़ाती है।",
    "आपकी तैयारी बेहतर हो रही है।",
    "ध्यान केंद्रित रखें।"
];

const dailyGoalsTe = [
    "ఈరోజు షెడ్యూల్ చేసిన అన్ని పునశ్చరణ పనులను పూర్తి చేయండి.",
    "ప్రాక్టీస్ ప్రారంభించే ముందు ముఖ్యమైన భావాలను అర్థం చేసుకోండి.",
    "మునుపటి పాఠాలను పునశ్చరణ చేయండి.",
    "బలహీనమైన అంశాలను మరింత బలోపేతం చేయండి.",
    "ఈరోజు లక్ష్యాన్ని పూర్తి చేయండి.",
    "ప్రతి కాన్సెప్ట్ తర్వాత ప్రశ్నలను సాధన చేయండి.",
    "కఠినమైన అధ్యాయాలకు అదనపు సమయం కేటాయించండి.",
    "అధిక ప్రాధాన్యత గల పనులను పూర్తి చేయండి."
];

const aiSuggestionsTe = [
    "తక్కువ సిద్ధత ఉన్న సబ్జెక్టులకు ఎక్కువ సమయం కేటాయించండి.",
    "ప్రశ్నలు ప్రయత్నించే ముందు సూత్రాలను పునశ్చరణ చేయండి.",
    "ఈరోజు వేగం కంటే ఖచ్చితత్వంపై దృష్టి పెట్టండి.",
    "సమీప పరీక్షలున్న సబ్జెక్టులను ముందుగా చదవండి.",
    "పరీక్ష నమ్మకాన్ని పెంచడానికి PYQs సాధన చేయండి.",
    "మునుపటి తప్పులను సమీక్షించండి.",
    "ఏకాగ్రత కోసం చిన్న విరామాలు తీసుకోండి.",
    "మీ శక్తి ఎక్కువగా ఉన్నప్పుడు కఠినమైన అంశాలను ప్రారంభించండి."
];

const progressMessagesTe = [
    "మీరు మీ పరీక్ష లక్ష్యాల వైపు స్థిరంగా ముందుకు సాగుతున్నారు.",
    "ఈరోజు క్రమశిక్షణతో చదివితే మొత్తం పురోగతి మెరుగవుతుంది.",
    "మీ అధ్యయన రిథమ్‌ను కొనసాగించండి.",
    "రోజువారీ చిన్న మెరుగుదలలు పెద్ద ఫలితాలను ఇస్తాయి.",
    "ఈరోజు లక్ష్యాలు పూర్తైతే మీరు సరైన మార్గంలో ఉన్నారు.",
    "నిరంతర పునశ్చరణ జ్ఞాపకశక్తిని గణనీయంగా పెంచుతుంది.",
    "మీ సిద్ధత స్థాయి రోజురోజుకూ మెరుగవుతోంది.",
    "సిలబస్‌ను గరిష్టంగా పూర్తి చేయడానికి దృష్టి కేంద్రీకరించండి."
];

const dailyGoalsOr = [
    "ଆଜି 1ଟି ଅଧ୍ୟାୟ ସମାପ୍ତ କର",
    "20ଟି MCQ ସମାଧାନ କର",
    "ଗତକାଲିର ବିଷୟ ପୁନରାବୃତ୍ତି କର",
    "1 ଘଣ୍ଟା ଧାରଣା ଅଭ୍ୟାସ କର",
    "1ଟି ମକ୍ ଟେଷ୍ଟ ଦିଅ"
];

const aiSuggestionsOr = [
    "କଠିନ ବିଷୟରୁ ଆରମ୍ଭ କର",
    "25 ମିନିଟ୍ ପୋମୋଡୋରୋ ପ୍ରଣାଳୀ ବ୍ୟବହାର କର",
    "ଛୋଟ ଟିପ୍ସ ତିଆରି କର",
    "ଦୁର୍ବଳ ବିଷୟରେ ଅଧିକ ସମୟ ଦିଅ",
    "ପ୍ରତିଦିନ ନିୟମିତ ପୁନରାବୃତ୍ତି କର"
];

const progressMessagesOr = [
    "ଭଲ ଆରମ୍ଭ! 🚀",
    "ତୁମେ ଭଲ ଗତିରେ ଅଛ! 📚",
    "ଅଧା ରାସ୍ତା ଆସିଗଲା! 💪",
    "ସଫଳତା ନିକଟରେ! 🌟",
    "ଅଭିନନ୍ଦନ! ଲକ୍ଷ୍ୟ ସମାପ୍ତ! 🎉"
];

const dailyGoalsBn = [
    "আজ ১টি অধ্যায় শেষ কর",
    "২০টি MCQ সমাধান কর",
    "গতকালের বিষয় পুনরাবৃত্তি কর",
    "১ ঘণ্টা ধারণা অনুশীলন কর",
    "১টি মক টেস্ট দাও"
];

const aiSuggestionsBn = [
    "কঠিন বিষয় দিয়ে শুরু কর",
    "২৫ মিনিট পোমোডোরো পদ্ধতি ব্যবহার কর",
    "সংক্ষিপ্ত নোট তৈরি কর",
    "দুর্বল বিষয়ে বেশি সময় দাও",
    "প্রতিদিন নিয়মিত রিভিশন কর"
];

const progressMessagesBn = [
    "দারুণ শুরু! 🚀",
    "তুমি ভালো গতিতে এগোচ্ছ! 📚",
    "অর্ধেক পথ পেরিয়ে গেছ! 💪",
    "সাফল্য খুব কাছে! 🌟",
    "অভিনন্দন! লক্ষ্য সম্পন্ন! 🎉"
];

const dailyGoalsMr = [
    "आज १ प्रकरण पूर्ण करा",
    "२० MCQ सोडवा",
    "कालचा विषय पुन्हा अभ्यास करा",
    "१ तास संकल्पना सराव करा",
    "१ मॉक टेस्ट द्या"
];

const aiSuggestionsMr = [
    "कठीण विषयापासून सुरुवात करा",
    "२५ मिनिटांची पोमोडोरो पद्धत वापरा",
    "लहान नोट्स तयार करा",
    "कमकुवत विषयांना अधिक वेळ द्या",
    "दररोज पुनरावलोकन करा"
];

const progressMessagesMr = [
    "छान सुरुवात! 🚀",
    "तुम्ही उत्तम प्रगती करत आहात! 📚",
    "अर्धा प्रवास पूर्ण झाला! 💪",
    "यश जवळ आले आहे! 🌟",
    "अभिनंदन! लक्ष्य पूर्ण झाले! 🎉"
];

const dailyGoalsGu = [
    "આજે 1 અધ્યાય પૂર્ણ કરો",
    "20 MCQ ઉકેલો",
    "ગઈકાલનો વિષય પુનરાવર્તન કરો",
    "1 કલાક સંકલ્પનાઓનો અભ્યાસ કરો",
    "1 મોક ટેસ્ટ આપો"
];

const aiSuggestionsGu = [
    "મુશ્કેલ વિષયથી શરૂઆત કરો",
    "25 મિનિટની પોમોડોરો પદ્ધતિ અપનાવો",
    "ટૂંકી નોંધો બનાવો",
    "નબળા વિષયોને વધુ સમય આપો",
    "દરરોજ પુનરાવર્તન કરો"
];

const progressMessagesGu = [
    "શાનદાર શરૂઆત! 🚀",
    "તમે સારી પ્રગતિ કરી રહ્યા છો! 📚",
    "અડધો રસ્તો પૂર્ણ થયો! 💪",
    "સફળતા હવે નજીક છે! 🌟",
    "અભિનંદન! લક્ષ્ય પૂર્ણ થયું! 🎉"
];

const dailyGoalsPa = [
    "ਅੱਜ 1 ਅਧਿਆਇ ਪੂਰਾ ਕਰੋ",
    "20 MCQ ਹੱਲ ਕਰੋ",
    "ਕੱਲ੍ਹ ਦਾ ਵਿਸ਼ਾ ਦੁਹਰਾਓ",
    "1 ਘੰਟਾ ਸੰਕਲਪਾਂ ਦਾ ਅਭਿਆਸ ਕਰੋ",
    "1 ਮੌਕ ਟੈਸਟ ਦਿਓ"
];

const aiSuggestionsPa = [
    "ਮੁਸ਼ਕਲ ਵਿਸ਼ੇ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ",
    "25 ਮਿੰਟ ਦੀ ਪੋਮੋਡੋਰੋ ਤਕਨੀਕ ਵਰਤੋ",
    "ਛੋਟੇ ਨੋਟ ਬਣਾਓ",
    "ਕਮਜ਼ੋਰ ਵਿਸ਼ਿਆਂ ਨੂੰ ਵਧੇਰੇ ਸਮਾਂ ਦਿਓ",
    "ਰੋਜ਼ਾਨਾ ਦੁਹਰਾਈ ਕਰੋ"
];

const progressMessagesPa = [
    "ਸ਼ਾਨਦਾਰ ਸ਼ੁਰੂਆਤ! 🚀",
    "ਤੁਸੀਂ ਵਧੀਆ ਤਰੱਕੀ ਕਰ ਰਹੇ ਹੋ! 📚",
    "ਅੱਧਾ ਸਫ਼ਰ ਪੂਰਾ ਹੋ ਗਿਆ! 💪",
    "ਕਾਮਯਾਬੀ ਬਹੁਤ ਨੇੜੇ ਹੈ! 🌟",
    "ਮੁਬਾਰਕਾਂ! ਲਕਸ਼ ਪੂਰਾ ਹੋ ਗਿਆ! 🎉"
];

async function generatePlan() {

    const lang =
        document.getElementById("languageSelect").value;

const API_URL =
    location.hostname === "127.0.0.1" ||
    location.hostname === "localhost"
        ? "http://127.0.0.1:8000"
        : "";
const exam =
    document.getElementById("exam").value;

const hours =
    parseInt(
        document.getElementById("hours").value
    );

const subjects = [];

for (let i = 1; i <= subjectCount; i++) {

    const subjectInput =
        document.getElementById(`subject${i}`);

    if (!subjectInput) continue;

    const name = subjectInput.value.trim();

    if (name !== "") {
        subjects.push({
            name,
            exam_date:
                document.getElementById(`date${i}`).value,
            priority:
                document.getElementById(`priority${i}`).value,
            preparation:
                document.getElementById(`prep${i}`).value
        });
    }
}
if (subjects.length === 0) {
    alert(translations[lang].enterSubject);
    return;
}
if (!exam || !hours) {

    alert(
    translations[lang].fillExamHours
);

    return;
}

try {

    document.getElementById("result").innerHTML = `

    <div class="loading-card">

        <div class="spinner"></div>

            <p>
    ${translations[lang].loadingPlan}
</p>

    </div>

`;
    const currentLang =
    document.getElementById("languageSelect").value;
    const response = await fetch(
    `${API_URL}/generate-plan`,
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
    exam,
    subjects,
    hours_per_day: hours,
    language: currentLang,
    provider:
        document.getElementById(
            "aiProvider"
        ).value
})
        }
    );

    if (!response.ok) {

        throw new Error(
            `Server Error: ${response.status}`
        );
    }

    const data =
        await response.json();

    const aiTipsText =
    data.ai_tips ||
    "No AI tips available.";

    let html = `

    <h2>
        ${translations[lang].personalizedPlan}
    </h2>

    <div class="progress-container">

        <div class="progress-header">

            <div class="progress-text">
                ${translations[lang].progress}: 0% ${translations[lang].completed}
            </div>

            <div class="task-counter">
                <span id="taskCounter">
                    0 / 0 ${translations[lang].tasksDone}
                </span>
            </div>

        </div>

        <div class="progress-bar">

            <div
                class="progress-fill"
                id="progressFill">

            </div>

        </div>

        <div class="progress-milestones">

            <span>0%<br>${translations[lang].start}</span>

            <span>25%<br>${translations[lang].quarterWay}</span>

            <span>50%<br>${translations[lang].halfWay}</span>

            <span>75%<br>${translations[lang].almostThere}</span>

            <span>100%<br>${translations[lang].completedLabel}</span>

        </div>

        <div class="progress-message">
            <span id="progressMessage">
                ${translations[lang].greatJob}
            </span>
        </div>

    </div>

`;

    data.study_plan.forEach((day, dayIndex) => {

        html += `

            <div class="day-card">

                <h3 class="day-title">
                    📅 ${day.date}
                </h3>

        `;

        day.tasks.forEach((task, index) => {

    const icons = [
        "🔴",
        "🟡",
        "🟢"
    ];

    const icon =
        icons[index % icons.length];

    html += `

        <div class="plan-card">

            <h4>
                ${icon} ${task}
            </h4>

            <div class="plan-left">

                <input
                    type="checkbox"
                    class="task-checkbox">

                <span class="task-text">

                    📖 ${translations[lang].conceptRevision}

                </span>

            </div>

            <div class="plan-left">

                <input
                    type="checkbox"
                    class="task-checkbox">

                <span class="task-text">

                    ✏️ ${translations[lang].practiceQuestions}

                </span>

            </div>

            <div class="plan-left">

                <input
                    type="checkbox"
                    class="task-checkbox">

                <span class="task-text">

                    📝 ${translations[lang].pyqs}

                </span>

            </div>

            <div class="plan-left">

                <input
                    type="checkbox"
                    class="task-checkbox">

                <span class="task-text">

                    🔄 ${translations[lang].quickRevision}

                </span>

            </div>

        </div>

    `;

});
       const goalArray =
    lang === "hi" ? dailyGoalsHi :
    lang === "te" ? dailyGoalsTe :
    lang === "od" ? dailyGoalsOr :
    lang === "bn" ? dailyGoalsBn :
    lang === "mr" ? dailyGoalsMr :
    lang === "gu" ? dailyGoalsGu :
    lang === "pa" ? dailyGoalsPa :
    dailyGoals;

const suggestionArray =
    lang === "hi" ? aiSuggestionsHi :
    lang === "te" ? aiSuggestionsTe :
    lang === "od" ? aiSuggestionsOr :
    lang === "bn" ? aiSuggestionsBn :
    lang === "mr" ? aiSuggestionsMr :
    lang === "gu" ? aiSuggestionsGu :
    lang === "pa" ? aiSuggestionsPa :
    aiSuggestions;

const progressArray =
    lang === "hi" ? progressMessagesHi :
    lang === "te" ? progressMessagesTe :
    lang === "od" ? progressMessagesOr :
    lang === "bn" ? progressMessagesBn :
    lang === "mr" ? progressMessagesMr :
    lang === "gu" ? progressMessagesGu :
    lang === "pa" ? progressMessagesPa :
    progressMessages;

const randomGoal =
    goalArray[dayIndex % goalArray.length];

const randomSuggestion =
    suggestionArray[dayIndex % suggestionArray.length];

const randomProgress =
    progressArray[dayIndex % progressArray.length];

        html += `

        <div class="goal-card">

            <h4>
                🎯 ${translations[lang].dailyGoal}
            </h4>

            <p>
                ${randomGoal}
            </p>

        </div>

        <div class="ai-card">

            <h4>
                💡 ${translations[lang].aiSuggestion}
            </h4>

            <p>
             ${randomSuggestion}
            </p>

        </div>

        <div class="forecast-card">

            <h4>
                📊 ${translations[lang].expectedProgress}
            </h4>

            <p>
                ${randomProgress}
            </p>

        </div>

    </div>

`;

    });
    html += `
<div class="ai-tips-box">

    <h3>🤖 ${translations[lang].aiStudyTips}</h3>

    <pre>${aiTipsText}</pre>

</div>
`;
    html += `

        <h2>
            ${translations[lang].workspaceTitle}
        </h2>

        <div class="workspace-section">

    `;
    subjects.sort((a, b) =>
    a.name.localeCompare(b.name)
);
    subjects.forEach((subject) => {

        html += `

            <button
                class="workspace-btn"
                onclick="openWorkspace('${subject.name}')">

                📚 ${subject.name} ${translations[lang].workspace}

            </button>

        `;

    });

    html += `

        </div>

        <div class="quote">

            "${translations[lang].successQuote}"

        </div>

        <div class="footer">

            🚀 ${translations[lang].generatedBy}

        </div>

    `;

    document.getElementById("result")
        .innerHTML = html;

    document.getElementById(
    "feedbackBtn"
).style.display = "block";

    updateProgress();

    loadProgress();

} catch (error) {

    document.getElementById("result")
        .innerHTML = `

        <div class="plan-card">

            ❌ ${translations[lang].fetchError}: ${error.message}

        </div>

    `;

}

}

window.generatePlan = generatePlan;

function updateProgress() {

const checkboxes =
    document.querySelectorAll(
        ".task-checkbox"
    );

checkboxes.forEach((checkbox) => {

    checkbox.addEventListener("change", () => {

    const lang =
        document.getElementById("languageSelect").value;


            const total =
                document.querySelectorAll(
                    ".task-checkbox"
                ).length;

            const completed =
                document.querySelectorAll(
                    ".task-checkbox:checked"
                ).length;

            const percent =
                total === 0
                ? 0
                : Math.round(
                    (completed / total) * 100
                );
                document.getElementById("progressFill").style.width =
    percent + "%";
            document.getElementById("taskCounter").innerHTML =
    `${completed} / ${total} ${translations[lang].tasksDone}`;

            document.querySelector(".progress-text").innerHTML =
    `${translations[lang].progress}: ${percent}% ${translations[lang].completed}`;

            const progressFill =
    document.getElementById("progressFill");

progressFill.style.width =
    percent + "%";

progressFill.innerHTML =
    percent + "%";
            saveProgress();

        }
    );

});

}

function saveProgress() {

    const checkboxes =
        document.querySelectorAll(".task-checkbox");

    const progressData = [];

    checkboxes.forEach((checkbox) => {
        progressData.push(checkbox.checked);
    });

    const studyKey =
        "studyProgress_" +
        getPlanKey();

    localStorage.setItem(
        studyKey,
        JSON.stringify(progressData)
    );
}

function loadProgress() {

    const studyKey =
        "studyProgress_" +
        getPlanKey();

    const savedData =
        localStorage.getItem(studyKey);

    if (!savedData) {
        return;
    }

    const progressData =
        JSON.parse(savedData);

    const checkboxes =
        document.querySelectorAll(".task-checkbox");

    checkboxes.forEach(
        (checkbox, index) => {

            checkbox.checked =
                progressData[index] || false;

        }
    );

    document
        .querySelectorAll(".task-checkbox")
        .forEach((cb) => {

            cb.dispatchEvent(
                new Event("change")
            );

        });
}let currentSubject = "";

function openWorkspace(subject) {

currentSubject = subject;

const lang =
    document.getElementById("languageSelect").value;

document.getElementById(
    "workspaceTitle"
).innerHTML =
    `📚 ${subject} - ${translations[lang].workspace}`;

const savedData =
    JSON.parse(
        localStorage.getItem(
            `workspace_${subject}`
        )
    ) || {};

document.getElementById(
    "workspaceNotes"
).value =
    savedData.notes || "";

document.getElementById(
    "workspaceYoutube"
).value =
    savedData.youtube || "";

document.getElementById(
    "workspacePdf"
).value =
    savedData.pdf || "";

document.getElementById(
    "workspaceBook"
).value =
    savedData.book || "";


document.getElementById(
    "workspaceModal"
).style.display = "block";

updateWorkspaceStats();
updateResourcePreview();
}

function closeWorkspace() {

document.getElementById(
    "workspaceModal"
).style.display = "none";

}

function autoSaveWorkspace() {

if (!currentSubject) return;

const workspaceData = {

    notes:
        document.getElementById(
            "workspaceNotes"
        ).value,

    youtube:
        document.getElementById(
            "workspaceYoutube"
        ).value,

    pdf:
        document.getElementById(
            "workspacePdf"
        ).value,

    book:
        document.getElementById(
            "workspaceBook"
        ).value

};

localStorage.setItem(
    `workspace_${currentSubject}`,
    JSON.stringify(workspaceData)
);

updateWorkspaceStats();
updateResourcePreview();

}

function saveWorkspace() {

autoSaveWorkspace();

localStorage.setItem(
    "lastOpenedWorkspace",
    currentSubject
);

const lang =
    document.getElementById("languageSelect").value;

alert(
    lang === "hi"
        ? `✅ ${currentSubject} कार्यक्षेत्र सहेजा गया`
    : lang === "te"
        ? `✅ ${currentSubject} కార్యక్షేత్రం సేవ్ చేయబడింది`
    : lang === "od"
        ? `✅ ${currentSubject} ୱର୍କସ୍ପେସ୍ ସେଭ୍ ହୋଇଛି`
    : lang === "bn"
        ? `✅ ${currentSubject} ওয়ার্কস্পেস সংরক্ষিত হয়েছে`
    : lang === "mr"
        ? `✅ ${currentSubject} कार्यक्षेत्र जतन केले गेले`
    : lang === "gu"
        ? `✅ ${currentSubject} વર્કસ્પેસ સેવ થયું`
    : lang === "pa"
        ? `✅ ${currentSubject} ਵਰਕਸਪੇਸ ਸੇਵ ਹੋ ਗਿਆ`
    : `✅ ${currentSubject} Workspace Saved`
);

closeWorkspace();
updateResourcePreview();
}

function clearWorkspace() {

    const lang =
        document.getElementById("languageSelect").value;

    if (
        !confirm(
            `${translations[lang].deleteWorkspace} ${currentSubject}?`
        )
    ) {
        return;
    }

    localStorage.removeItem(
        `workspace_${currentSubject}`
    );

    document.getElementById(
        "workspaceNotes"
    ).value = "";

    document.getElementById(
        "workspaceYoutube"
    ).value = "";

    document.getElementById(
        "workspacePdf"
    ).value = "";

    document.getElementById(
        "workspaceBook"
    ).value = "";

    updateWorkspaceStats();
    updateResourcePreview();
}
function updateWorkspaceStats() {

const notes =
    document.getElementById(
        "workspaceNotes"
    ).value;

let resources = 0;

if (
    document.getElementById(
        "workspaceYoutube"
    ).value
) resources++;

if (
    document.getElementById(
        "workspacePdf"
    ).value
) resources++;

if (
    document.getElementById(
        "workspaceBook"
    ).value
) resources++;

document.getElementById(
    "notesCount"
).innerHTML =
    notes.length;

document.getElementById(
    "resourceCount"
).innerHTML =
    resources;

}

document.addEventListener(
"DOMContentLoaded",
() => {

    [
        "workspaceNotes",
        "workspaceYoutube",
        "workspacePdf",
        "workspaceBook"
    ].forEach((id) => {

        const element =
            document.getElementById(id);

        if (element) {

            element.addEventListener(
                "input",
                autoSaveWorkspace
            );

        }

    });

}

);
function updateResourcePreview() {

    const youtube =
        document.getElementById(
            "workspaceYoutube"
        ).value;

    const pdf =
        document.getElementById(
            "workspacePdf"
        ).value;

    const book =
        document.getElementById(
            "workspaceBook"
        ).value;

    document.getElementById(
        "resourcePreview"
    ).innerHTML = `

        ${
            youtube
            ?
            `
            <a
                href="${youtube}"
                target="_blank"
                class="resource-card">
                🎥 YouTube Resource
            </a>
            `
            : ""
        }

        ${
            pdf
            ?
            `
            <a
                href="${pdf}"
                target="_blank"
                class="resource-card">
                📄 PDF Resource
            </a>
            `
            : ""
        }

        ${
            book
            ?
            `
            <div class="resource-card">
                📚 ${book}
            </div>
            `
            : ""
        }

    `;
}
const themeBtn =
    document.getElementById("themeToggle");


function updateThemeButtonText() {

    const lang =
        document.getElementById("languageSelect").value;

    const isDark =
        document.body.classList.contains("dark-mode");

    themeBtn.textContent =
        isDark
            ? translations[lang].lightMode
            : translations[lang].darkMode;
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark);
    updateThemeButtonText();

});

window.addEventListener("DOMContentLoaded", () => {
    const generatePlanBtn =
        document.getElementById("generatePlanBtn");

    if (generatePlanBtn) {
        generatePlanBtn.addEventListener("click", (event) => {
            event.preventDefault();
            generatePlan();
        });
    }

    const isLocal =
        location.hostname === "localhost" ||
        location.hostname === "127.0.0.1";

        if (!isLocal) {

            const ollamaOption =
            document.querySelector(
                '#aiProvider option[value="ollama"]'
            );

        if (ollamaOption) {
            ollamaOption.remove();
        }

    document.getElementById(
        "aiProvider"
    ).value = "gemini";
}
    const savedLang =
        localStorage.getItem("language") || "en";

    document.getElementById("languageSelect").value =
        savedLang;

    const isDark =
        localStorage.getItem("theme") === "true";

    if (isDark) {
        document.body.classList.add("dark-mode");
    }

    changeLanguage();
});
let subjectCount = 1;

document.getElementById("addSubjectBtn")
    .addEventListener("click", () => {
        const currentLang =
    document.getElementById("languageSelect").value;

        subjectCount++;

        const container =
            document.getElementById(
                "subjectsContainer"
            );

        container.insertAdjacentHTML(
            "beforeend",
            `
            <h3 class="subject-title">
                📘 Subject ${subjectCount}
            </h3>

            <div class="subject-box">
                <h3 class="subject-title">
                    📘 ${translations[currentLang].subject}
                    ${subjectCount}
                </h3>
                <label class="subject-name-label">${translations[currentLang].subjectName}</label>
                <input
                    id="subject${subjectCount}"
                    type="text"
                    placeholder="${translations[currentLang].subjectName}">

                <label class="exam-date-label">${translations[currentLang].examDate}</label>
                <input
                    id="date${subjectCount}"
                    type="date">

                <label class="priority-label">
                    ${translations[currentLang].priority}
                </label>
                <select
    id="priority${subjectCount}"
    class="priority">
            <option value="High">
                ${translations[currentLang].high}
            </option>

            <option value="Medium">
                ${translations[currentLang].medium}
            </option>

            <option value="Low">
                ${translations[currentLang].low}
            </option>
        </select>

                <label class="prep-label">
            ${translations[currentLang].preparation}
        </label>

        <select
    id="prep${subjectCount}"
    class="preparation">
            <option value="Poor">
                ${translations[currentLang].poor}
            </option>

            <option value="Average">
                ${translations[currentLang].average}
            </option>

            <option value="Good">
                ${translations[currentLang].good}
            </option>
        </select>

            </div>
            `
        );
        changeLanguage();
    });
    const translations = {
    en: {
        title: "StudySprint AI",
        subtitle: "AI-powered personalized study planner",
        exam: "Exam Name",
        hours: "Study Hours Per Day",
        generate: "Generate Study Plan",
        addSubject: "Add Subject",
        subject: "Subject",
        subjectName: "Subject Name",
        examDate: "Exam Date",
        priority: "Priority",
        preparation: "Current Preparation Level",

        high: "High",
        medium: "Medium",
        low: "Low",

        poor: "Poor",
        average: "Average",
        good: "Good",

        examPlaceholder: "Enter Exam Name",
        hoursPlaceholder: "Study Hours Per Day",
        aiProvider: "AI Provider",
        localAI: "Local AI (Ollama)",
        generateBtn: "Generate AI Study Plan",
        addSubject: "➕ Add Subject",
        lightMode: "☀️ Light Mode",
        darkMode: "🌙 Dark Mode",
        openAI: "OpenAI (BYOK)",
        workspaceTitle: "Subject Workspaces",
        successQuote: "Success is the sum of small efforts repeated every day.",
        poweredBy: "Powered by StudySprint AI",
        personalizedPlan: "📚 Personalized Study Plan",
        studyPlan: "📚 Personalized Study Plan",
        progress: "📈 Progress",
        completed: "Completed",
        study: "Study",
        workspaces: "📚 Subject Workspaces",
        workspace: "Workspace",
        quote: "Success is the sum of small efforts repeated every day.",
        generatedBy: "🚀 Generated by StudySprint AI",
        deleteWorkspace: "Delete all data for",
        tipTitle: "AI Study Tip",

        notes: "Notes",
        resources: "Resources",
        searchNotes: "Search Notes",
        searchPlaceholder: "Search notes...",
        youtubeLink: "YouTube Link",
        youtubePlaceholder: "Paste YouTube link",
        pdfLink: "PDF Link",
        pdfPlaceholder: "Paste PDF link",
        bookName: "Book Name",
        bookPlaceholder: "Enter book name",
        saveWorkspace: "💾 Save Workspace",
        resourcePreview: "📚 Resource Preview",
        clearWorkspace: "🗑 Clear Workspace",

        conceptRevision: "Concept Revision",
        practiceQuestions: "Practice Questions",
        pyqs: "PYQs",
        quickRevision: "Quick Revision",

        dailyGoal: "Daily Goal",
        aiSuggestion: "AI Suggestion",
        expectedProgress: "Expected Progress",
        dailyGoal: "🎯 Daily Goal",
        aiSuggestion: "💡 AI Suggestion",
        expectedProgress: "📊 Expected Progress",

        tasksDone: "Tasks Done",

        start: "Start",
        quarterWay: "Quarter Way",
        halfWay: "Half Way",
        almostThere: "Almost There",
        completedLabel: "Completed",

        greatJob: "✨ Great job! Keep going, you're doing excellent! 🚀",
        feedback: "⭐ Give Feedback",
fetchError: "Failed to fetch",
loadingPlan: "Generating Study Plan...",
aiStudyTips: "AI Generated Study Tips",
youtubeResource: "🎥 YouTube Resource",
pdfResource: "📄 PDF Resource",
enterSubject: "Enter at least one subject first.",
fillExamHours: "Please fill Exam Name and Hours Per Day.",
workspaceSaved: "Workspace Saved"
    },

    hi: {
        title: "स्टडीस्प्रिंट एआई",
        subtitle: "AI आधारित व्यक्तिगत अध्ययन योजनाकार",
        exam: "परीक्षा का नाम",
        hours: "प्रतिदिन अध्ययन घंटे",
        generate: "अध्ययन योजना बनाएं",
        addSubject: "विषय जोड़ें",
        subject: "विषय",
        subjectName: "विषय का नाम",
        examDate: "परीक्षा तिथि",
        priority: "प्राथमिकता",
        preparation: "वर्तमान तैयारी स्तर",

        high: "उच्च",
        medium: "मध्यम",
        low: "कम",

        poor: "कमज़ोर",
        average: "औसत",
        good: "अच्छा",

        examPlaceholder: "परीक्षा का नाम दर्ज करें",
        hoursPlaceholder: "प्रतिदिन अध्ययन के घंटे",
        aiProvider: "एआई प्रदाता",
        localAI: "लोकल एआई (ओल्लामा)",
        generateBtn: "एआई अध्ययन योजना बनाएं",
        addSubject: "➕ विषय जोड़ें",
        lightMode: "☀️ लाइट मोड",
        darkMode: "🌙 डार्क मोड",
        openAI: "ओपनएआई (BYOK)",

        workspaceTitle: "विषय कार्यक्षेत्र",
        workspace: "कार्यक्षेत्र",
        study: "अध्ययन",
        successQuote: "सफलता छोटे-छोटे प्रयासों का योग है जो हर दिन दोहराए जाते हैं।",
        generatedBy: "स्टडीस्प्रिंट एआई द्वारा निर्मित",
        poweredBy: "स्टडीस्प्रिंट एआई द्वारा संचालित",
        personalizedPlan: "📚 व्यक्तिगत अध्ययन योजना",
        studyPlan: "📚 व्यक्तिगत अध्ययन योजना",
        progress: "📈 प्रगति",
        completed: "पूर्ण",
        study: "अध्ययन",
        workspaces: "📚 विषय कार्यक्षेत्र",
        workspace: "कार्यक्षेत्र",
        quote: "सफलता छोटे-छोटे प्रयासों का योग है जो हर दिन दोहराए जाते हैं।",
        generatedBy: "🚀 स्टडीस्प्रिंट एआई द्वारा निर्मित",
        deleteWorkspace: "का सारा डेटा हटाएँ",

        tipTitle: "एआई अध्ययन सुझाव",
        notes: "नोट्स",
        resources: "संसाधन",
        searchNotes: "नोट्स खोजें",
        searchPlaceholder: "नोट्स खोजें...",
        youtubeLink: "यूट्यूब लिंक",
        youtubePlaceholder: "यूट्यूब लिंक पेस्ट करें",
        pdfLink: "PDF लिंक",
        pdfPlaceholder: "PDF लिंक पेस्ट करें",
        bookName: "पुस्तक का नाम",
        bookPlaceholder: "पुस्तक का नाम दर्ज करें",
        saveWorkspace: "💾 कार्यक्षेत्र सहेजें",
        resourcePreview: "📚 संसाधन पूर्वावलोकन",
        clearWorkspace: "🗑 कार्यक्षेत्र साफ़ करें",
        conceptRevision: "सिद्धांत पुनरावृत्ति",
        practiceQuestions: "अभ्यास प्रश्न",
        pyqs: "पिछले वर्ष के प्रश्न",
        quickRevision: "त्वरित पुनरावृत्ति",

        dailyGoal: "दैनिक लक्ष्य",
        aiSuggestion: "एआई सुझाव",
        expectedProgress: "अपेक्षित प्रगति",
        dailyGoal: "🎯 दैनिक लक्ष्य",
        aiSuggestion: "💡 एआई सुझाव",
        expectedProgress: "📊 अपेक्षित प्रगति",

        tasksDone: "कार्य पूर्ण",

        start: "शुरुआत",
        quarterWay: "25% पूरा",
        halfWay: "आधा रास्ता",
        almostThere: "लगभग पूरा",
        completedLabel: "पूर्ण",

        greatJob: "✨ बहुत बढ़िया! ऐसे ही मेहनत करते रहें! 🚀",
        feedback: "⭐ प्रतिक्रिया दें",
fetchError: "डेटा प्राप्त करने में विफल",
loadingPlan: "अध्ययन योजना बनाई जा रही है...",
aiStudyTips: "AI अध्ययन सुझाव",
youtubeResource: "🎥 YouTube संसाधन",
pdfResource: "📄 PDF संसाधन",
enterSubject: "पहले कम से कम एक विषय दर्ज करें।",
fillExamHours: "कृपया परीक्षा का नाम और अध्ययन घंटे भरें।",
workspaceSaved: "कार्यक्षेत्र सहेजा गया"
    },

    te: {
        title: "స్టడీస్ప్రింట్ AI",
        subtitle: "AI ఆధారిత వ్యక్తిగత అధ్యయన ప్రణాళిక",
        exam: "పరీక్ష పేరు",
        hours: "రోజుకు చదివే గంటలు",
        generate: "స్టడీ ప్లాన్ రూపొందించండి",
        addSubject: "సబ్జెక్ట్ జోడించండి",
        subject: "సబ్జెక్ట్",
        subjectName: "సబ్జెక్ట్ పేరు",
        examDate: "పరీక్ష తేదీ",
        priority: "ప్రాధాన్యత",
        preparation: "ప్రస్తుత సిద్ధత స్థాయి",

        high: "అధిక",
        medium: "మధ్యస్థ",
        low: "తక్కువ",

        poor: "బలహీనంగా",
        average: "సగటు",
        good: "మంచిది",

        examPlaceholder: "పరీక్ష పేరు నమోదు చేయండి",
        hoursPlaceholder: "రోజుకు చదివే గంటలు",
        aiProvider: "AI ప్రొవైడర్",
        localAI: "లోకల్ AI (Ollama)",
        generateBtn: "AI అధ్యయన ప్రణాళిక రూపొందించండి",
        addSubject: "➕ సబ్జెక్ట్ జోడించండి",
        lightMode: "☀️ లైట్ మోడ్",
        darkMode: "🌙 డార్క్ మోడ్",
        openAI: "ఓపెన్ ఏఐ (BYOK)",

        workspaceTitle: "సబ్జెక్ట్ వర్క్‌స్పేస్‌లు",
        workspace: "వర్క్‌స్పేస్",
        study: "అధ్యయనం",
        successQuote: "ప్రతిరోజూ పునరావృతమయ్యే చిన్న ప్రయత్నాల సమాహారమే విజయం.",
        generatedBy: "స్టడీస్ప్రింట్ AI ద్వారా రూపొందించబడింది",
        poweredBy: "స్టడీస్ప్రింట్ AI ద్వారా నడుపబడుతోంది",
        personalizedPlan: "📚 వ్యక్తిగత అధ్యయన ప్రణాళిక",
        studyPlan: "📚 వ్యక్తిగత అధ్యయన ప్రణాళిక",
        progress: "📈 పురోగతి",
        completed: "పూర్తయింది",
        study: "అధ్యయనం",
        workspaces: "📚 విషయం కార్యస్థలాలు",
        workspace: "కార్యస్థలం",
        quote: "ప్రతిరోజూ పునరావృతమయ్యే చిన్న చిన్న ప్రయత్నాల సమాహారమే విజయం.",
        generatedBy: "🚀 స్టడీస్ప్రింట్ AI ద్వారా రూపొందించబడింది",
        deleteWorkspace: "సమస్త డేటాను తొలగించండి",
        tipTitle: "AI అధ్యయన సూచన",

        notes: "నోట్స్",
        resources: "వనరులు",
        searchNotes: "నోట్స్ వెతకండి",
        searchPlaceholder: "నోట్స్ వెతకండి...",
        youtubeLink: "యూట్యూబ్ లింక్",
        youtubePlaceholder: "యూట్యూబ్ లింక్ అతికించండి",
        pdfLink: "PDF లింక్",
        pdfPlaceholder: "PDF లింక్ అతికించండి",
        bookName: "పుస్తకం పేరు",
        bookPlaceholder: "పుస్తకం పేరు నమోదు చేయండి",
        saveWorkspace: "💾 వర్క్‌స్పేస్ సేవ్ చేయండి",
        resourcePreview: "📚 వనరుల ప్రివ్యూ",
        clearWorkspace: "🗑 వర్క్‌స్పేస్ క్లియర్ చేయండి",
        conceptRevision: "సిద్ధాంత పునశ్చరణ",
        practiceQuestions: "అభ్యాస ప్రశ్నలు",
        pyqs: "గత సంవత్సర ప్రశ్నలు",
        quickRevision: "త్వరిత పునశ్చరణ",

        dailyGoal: "రోజువారీ లక్ష్యం",
        aiSuggestion: "AI సూచన",
        expectedProgress: "అంచనా పురోగతి",
        dailyGoal: "🎯 రోజువారీ లక్ష్యం",
        aiSuggestion: "💡 AI సూచన",
        expectedProgress: "📊 అంచనా పురోగతి",

        tasksDone: "పూర్తైన పనులు",

        start: "ప్రారంభం",
        quarterWay: "25% పూర్తైంది",
        halfWay: "సగం పూర్తైంది",
        almostThere: "దాదాపు పూర్తైంది",
        completedLabel: "పూర్తైంది",

        greatJob: "✨ అద్భుతం! ఇలాగే కొనసాగించండి! 🚀",
        feedback: "⭐ అభిప్రాయం ఇవ్వండి",
fetchError: "డేటా పొందడంలో విఫలమైంది",
loadingPlan: "అధ్యయన ప్రణాళిక రూపొందించబడుతోంది...",
aiStudyTips: "AI అధ్యయన సూచనలు",
youtubeResource: "🎥 YouTube వనరు",
pdfResource: "📄 PDF వనరు",
enterSubject: "దయచేసి ముందుగా కనీసం ఒక సబ్జెక్ట్ నమోదు చేయండి.",
fillExamHours: "దయచేసి పరీక్ష పేరు మరియు రోజువారీ అధ్యయన గంటలు నమోదు చేయండి.",
workspaceSaved: "వర్క్‌స్పేస్ సేవ్ చేయబడింది"
    },

    od: {
        title: "ଷ୍ଟଡିସ୍ପ୍ରିଣ୍ଟ AI",
        subtitle: "AI ଦ୍ୱାରା ଚାଳିତ ବ୍ୟକ୍ତିଗତ ଅଧ୍ୟୟନ ଯୋଜନାକାରୀ",

        exam: "ପରୀକ୍ଷାର ନାମ",
        hours: "ପ୍ରତିଦିନ ଅଧ୍ୟୟନ ସମୟ",
        generate: "ଅଧ୍ୟୟନ ଯୋଜନା ତିଆରି କରନ୍ତୁ",

        addSubject: "➕ ବିଷୟ ଯୋଡନ୍ତୁ",
        subject: "ବିଷୟ",
        subjectName: "ବିଷୟର ନାମ",
        examDate: "ପରୀକ୍ଷା ତାରିଖ",
        priority: "ପ୍ରାଥମିକତା",
        preparation: "ବର୍ତ୍ତମାନ ପ୍ରସ୍ତୁତି ସ୍ତର",

        high: "ଉଚ୍ଚ",
        medium: "ମଧ୍ୟମ",
        low: "ନିମ୍ନ",

        poor: "ଦୁର୍ବଳ",
        average: "ମଧ୍ୟମ",
        good: "ଭଲ",

        examPlaceholder: "ପରୀକ୍ଷାର ନାମ ଲେଖନ୍ତୁ",
        hoursPlaceholder: "ପ୍ରତିଦିନ ଅଧ୍ୟୟନ ସମୟ",

        aiProvider: "AI ପ୍ରଦାନକାରୀ",
        localAI: "ଲୋକାଲ AI (Ollama)",

        generateBtn: "AI ଅଧ୍ୟୟନ ଯୋଜନା ତିଆରି କରନ୍ତୁ",

        lightMode: "☀️ ଲାଇଟ୍ ମୋଡ୍",
        darkMode: "🌙 ଡାର୍କ ମୋଡ୍",

        openAI: "OpenAI (BYOK)",

        workspaceTitle: "ବିଷୟ ୱର୍କସ୍ପେସ୍",

        successQuote: "ପ୍ରତିଦିନ ଛୋଟ ଛୋଟ ପ୍ରୟାସର ଯୋଗଫଳ ହେଉଛି ସଫଳତା।",

        poweredBy: "StudySprint AI ଦ୍ୱାରା ଚାଳିତ",

        personalizedPlan: "📚 ବ୍ୟକ୍ତିଗତ ଅଧ୍ୟୟନ ଯୋଜନା",
        studyPlan: "📚 ବ୍ୟକ୍ତିଗତ ଅଧ୍ୟୟନ ଯୋଜନା",

        progress: "📈 ପ୍ରଗତି",
        completed: "ସମ୍ପୂର୍ଣ୍ଣ",
        study: "ଅଧ୍ୟୟନ",

        workspaces: "📚 ବିଷୟ ୱର୍କସ୍ପେସ୍",
        workspace: "ୱର୍କସ୍ପେସ୍",

        quote: "ପ୍ରତିଦିନ ଛୋଟ ଛୋଟ ପ୍ରୟାସର ଯୋଗଫଳ ହେଉଛି ସଫଳତା।",

        generatedBy: "🚀 StudySprint AI ଦ୍ୱାରା ସୃଷ୍ଟ",

        deleteWorkspace: "ଏହି ବିଷୟର ସମସ୍ତ ତଥ୍ୟ ବିଲୋପ କରନ୍ତୁ",

        tipTitle: "AI ଅଧ୍ୟୟନ ପରାମର୍ଶ",

        notes: "ଟିପ୍ପଣୀ",
        resources: "ସମ୍ପଦ",

        searchNotes: "ଟିପ୍ପଣୀ ଖୋଜନ୍ତୁ",
        searchPlaceholder: "ଟିପ୍ପଣୀ ଖୋଜନ୍ତୁ...",

        youtubeLink: "YouTube ଲିଙ୍କ",
        youtubePlaceholder: "YouTube ଲିଙ୍କ ପେଷ୍ଟ କରନ୍ତୁ",

        pdfLink: "PDF ଲିଙ୍କ",
        pdfPlaceholder: "PDF ଲିଙ୍କ ପେଷ୍ଟ କରନ୍ତୁ",

        bookName: "ପୁସ୍ତକର ନାମ",
        bookPlaceholder: "ପୁସ୍ତକର ନାମ ଲେଖନ୍ତୁ",

        saveWorkspace: "💾 ୱର୍କସ୍ପେସ୍ ସଂରକ୍ଷଣ କରନ୍ତୁ",

        resourcePreview: "📚 ସମ୍ପଦ ପ୍ରିଭ୍ୟୁ",

        clearWorkspace: "🗑 ୱର୍କସ୍ପେସ୍ ସଫା କରନ୍ତୁ",

        conceptRevision: "ଧାରଣା ପୁନରାବୃତ୍ତି",
        practiceQuestions: "ଅଭ୍ୟାସ ପ୍ରଶ୍ନ",
        pyqs: "ପୂର୍ବବର୍ଷ ପ୍ରଶ୍ନ",
        quickRevision: "ଦ୍ରୁତ ପୁନରାବୃତ୍ତି",

        dailyGoal: "🎯 ଦୈନିକ ଲକ୍ଷ୍ୟ",

        aiSuggestion: "💡 AI ପରାମର୍ଶ",

        expectedProgress: "📊 ଆଶାକରା ପ୍ରଗତି",

        tasksDone: "ସମ୍ପୂର୍ଣ୍ଣ କାର୍ଯ୍ୟ",

        start: "ଆରମ୍ଭ",
        quarterWay: "ଚତୁର୍ଥାଂଶ ପଥ",
        halfWay: "ଅର୍ଦ୍ଧ ପଥ",
        almostThere: "ପ୍ରାୟ ସମ୍ପୂର୍ଣ୍ଣ",
        completedLabel: "ସମ୍ପୂର୍ଣ୍ଣ",

        greatJob: "✨ ଅତ୍ୟନ୍ତ ଭଲ! ଏଭଳି ଚାଲୁ ରଖନ୍ତୁ! 🚀",

        feedback: "⭐ ମତାମତ ଦିଅନ୍ତୁ",
fetchError: "ଡାଟା ଆଣିବାରେ ବିଫଳ",
loadingPlan: "ଅଧ୍ୟୟନ ଯୋଜନା ତିଆରି କରାଯାଉଛି...",
aiStudyTips: "AI ଅଧ୍ୟୟନ ପରାମର୍ଶ",
youtubeResource: "🎥 YouTube ସମ୍ବଳ",
pdfResource: "📄 PDF ସମ୍ବଳ",
enterSubject: "ପ୍ରଥମେ କମ୍ ସେ କମ୍ ଗୋଟିଏ ବିଷୟ ଲେଖନ୍ତୁ।",
fillExamHours: "ଦୟାକରି ପରୀକ୍ଷା ନାମ ଏବଂ ଦୈନିକ ଅଧ୍ୟୟନ ଘଣ୍ଟା ପୂରଣ କରନ୍ତୁ।",
workspaceSaved: "ୱର୍କସ୍ପେସ୍ ସେଭ୍ ହୋଇଛି"
    },
    bn: {
    title: "স্টাডিস্প্রিন্ট AI",
    subtitle: "AI-চালিত ব্যক্তিগত অধ্যয়ন পরিকল্পনাকারী",

    exam: "পরীক্ষার নাম",
    hours: "প্রতিদিন অধ্যয়নের সময়",
    generate: "অধ্যয়ন পরিকল্পনা তৈরি করুন",

    addSubject: "➕ বিষয় যোগ করুন",
    subject: "বিষয়",
    subjectName: "বিষয়ের নাম",
    examDate: "পরীক্ষার তারিখ",
    priority: "অগ্রাধিকার",
    preparation: "বর্তমান প্রস্তুতির স্তর",

    high: "উচ্চ",
    medium: "মাঝারি",
    low: "নিম্ন",

    poor: "দুর্বল",
    average: "গড়",
    good: "ভাল",

    examPlaceholder: "পরীক্ষার নাম লিখুন",
    hoursPlaceholder: "প্রতিদিন পড়ার সময়",

    aiProvider: "AI প্রদানকারী",
    localAI: "লোকাল AI (Ollama)",

    generateBtn: "AI অধ্যয়ন পরিকল্পনা তৈরি করুন",

    lightMode: "☀️ লাইট মোড",
    darkMode: "🌙 ডার্ক মোড",

    openAI: "OpenAI (BYOK)",

    workspaceTitle: "বিষয় ওয়ার্কস্পেস",

    successQuote: "সাফল্য হল প্রতিদিনের ছোট ছোট প্রচেষ্টার সমষ্টি।",

    poweredBy: "StudySprint AI দ্বারা পরিচালিত",

    personalizedPlan: "📚 ব্যক্তিগত অধ্যয়ন পরিকল্পনা",
    studyPlan: "📚 ব্যক্তিগত অধ্যয়ন পরিকল্পনা",

    progress: "📈 অগ্রগতি",
    completed: "সম্পন্ন",
    study: "অধ্যয়ন",

    workspaces: "📚 বিষয় ওয়ার্কস্পেস",
    workspace: "ওয়ার্কস্পেস",

    quote: "সাফল্য হল প্রতিদিনের ছোট ছোট প্রচেষ্টার সমষ্টি।",

    generatedBy: "🚀 StudySprint AI দ্বারা তৈরি",

    deleteWorkspace: "এর সমস্ত তথ্য মুছে ফেলুন",

    tipTitle: "AI অধ্যয়ন পরামর্শ",

    notes: "নোট",
    resources: "রিসোর্স",

    searchNotes: "নোট খুঁজুন",
    searchPlaceholder: "নোট খুঁজুন...",

    youtubeLink: "YouTube লিঙ্ক",
    youtubePlaceholder: "YouTube লিঙ্ক পেস্ট করুন",

    pdfLink: "PDF লিঙ্ক",
    pdfPlaceholder: "PDF লিঙ্ক পেস্ট করুন",

    bookName: "বইয়ের নাম",
    bookPlaceholder: "বইয়ের নাম লিখুন",

    saveWorkspace: "💾 ওয়ার্কস্পেস সংরক্ষণ করুন",

    resourcePreview: "📚 রিসোর্স প্রিভিউ",

    clearWorkspace: "🗑 ওয়ার্কস্পেস পরিষ্কার করুন",

    conceptRevision: "ধারণা পুনরাবৃত্তি",
    practiceQuestions: "অনুশীলনী প্রশ্ন",
    pyqs: "পূর্ববর্তী বছরের প্রশ্ন",
    quickRevision: "দ্রুত পুনরাবৃত্তি",

    dailyGoal: "🎯 দৈনিক লক্ষ্য",

    aiSuggestion: "💡 AI পরামর্শ",

    expectedProgress: "📊 প্রত্যাশিত অগ্রগতি",

    tasksDone: "সম্পন্ন কাজ",

    start: "শুরু",
    quarterWay: "এক-চতুর্থাংশ পথ",
    halfWay: "অর্ধেক পথ",
    almostThere: "প্রায় সম্পন্ন",
    completedLabel: "সম্পন্ন",

    greatJob: "✨ দারুণ কাজ! এভাবেই চালিয়ে যান, আপনি অসাধারণ করছেন! 🚀",

    feedback: "⭐ মতামত দিন",
fetchError: "ডেটা আনতে ব্যর্থ",
loadingPlan: "স্টাডি প্ল্যান তৈরি করা হচ্ছে...",
aiStudyTips: "AI স্টাডি টিপস",
youtubeResource: "🎥 ইউটিউব রিসোর্স",
pdfResource: "📄 PDF রিসোর্স",
enterSubject: "প্রথমে অন্তত একটি বিষয় লিখুন।",
fillExamHours: "অনুগ্রহ করে পরীক্ষার নাম এবং দৈনিক পড়ার সময় পূরণ করুন।",
workspaceSaved: "ওয়ার্কস্পেস সংরক্ষিত হয়েছে"
},
   mr: {
    title: "स्टडीस्प्रिंट AI",
    subtitle: "AI-आधारित वैयक्तिक अभ्यास नियोजक",

    exam: "परीक्षेचे नाव",
    hours: "दररोज अभ्यासाचे तास",
    generate: "अभ्यास योजना तयार करा",

    addSubject: "➕ विषय जोडा",
    subject: "विषय",
    subjectName: "विषयाचे नाव",
    examDate: "परीक्षेची तारीख",
    priority: "प्राधान्य",
    preparation: "सध्याची तयारी पातळी",

    high: "उच्च",
    medium: "मध्यम",
    low: "कमी",

    poor: "कमकुवत",
    average: "सरासरी",
    good: "चांगले",

    examPlaceholder: "परीक्षेचे नाव प्रविष्ट करा",
    hoursPlaceholder: "दररोज अभ्यासाचे तास",

    aiProvider: "AI प्रदाता",
    localAI: "स्थानिक AI (Ollama)",

    generateBtn: "AI अभ्यास योजना तयार करा",

    lightMode: "☀️ लाईट मोड",
    darkMode: "🌙 डार्क मोड",

    openAI: "OpenAI (BYOK)",

    workspaceTitle: "विषय कार्यक्षेत्रे",

    successQuote: "यश म्हणजे दररोज केलेल्या छोट्या प्रयत्नांची बेरीज आहे.",

    poweredBy: "StudySprint AI द्वारे समर्थित",

    personalizedPlan: "📚 वैयक्तिक अभ्यास योजना",
    studyPlan: "📚 वैयक्तिक अभ्यास योजना",

    progress: "📈 प्रगती",
    completed: "पूर्ण",
    study: "अभ्यास",

    workspaces: "📚 विषय कार्यक्षेत्रे",
    workspace: "कार्यक्षेत्र",

    quote: "यश म्हणजे दररोज केलेल्या छोट्या प्रयत्नांची बेरीज आहे.",

    generatedBy: "🚀 StudySprint AI द्वारे तयार",

    deleteWorkspace: "साठी सर्व डेटा हटवा",

    tipTitle: "AI अभ्यास सूचना",

    notes: "नोंदी",
    resources: "संसाधने",

    searchNotes: "नोंदी शोधा",
    searchPlaceholder: "नोंदी शोधा...",

    youtubeLink: "YouTube लिंक",
    youtubePlaceholder: "YouTube लिंक पेस्ट करा",

    pdfLink: "PDF लिंक",
    pdfPlaceholder: "PDF लिंक पेस्ट करा",

    bookName: "पुस्तकाचे नाव",
    bookPlaceholder: "पुस्तकाचे नाव प्रविष्ट करा",

    saveWorkspace: "💾 कार्यक्षेत्र जतन करा",

    resourcePreview: "📚 संसाधन पूर्वावलोकन",

    clearWorkspace: "🗑 कार्यक्षेत्र साफ करा",

    conceptRevision: "संकल्पना पुनरावलोकन",
    practiceQuestions: "सराव प्रश्न",
    pyqs: "मागील वर्षांचे प्रश्न",
    quickRevision: "जलद पुनरावलोकन",

    dailyGoal: "🎯 दैनंदिन उद्दिष्ट",

    aiSuggestion: "💡 AI सूचना",

    expectedProgress: "📊 अपेक्षित प्रगती",

    tasksDone: "पूर्ण केलेली कामे",

    start: "सुरुवात",
    quarterWay: "चतुर्थांश मार्ग",
    halfWay: "अर्धा मार्ग",
    almostThere: "जवळपास पूर्ण",
    completedLabel: "पूर्ण",

    greatJob: "✨ उत्तम काम! असेच सुरू ठेवा, तुम्ही उत्कृष्ट काम करत आहात! 🚀",

    feedback: "⭐ अभिप्राय द्या",
fetchError: "डेटा आणण्यात अयशस्वी",
loadingPlan: "अभ्यास योजना तयार केली जात आहे...",
aiStudyTips: "AI अभ्यास टिप्स",
youtubeResource: "🎥 YouTube संसाधन",
pdfResource: "📄 PDF संसाधन",
enterSubject: "कृपया प्रथम किमान एक विषय प्रविष्ट करा.",
fillExamHours: "कृपया परीक्षेचे नाव आणि दररोजचे अभ्यास तास भरा.",
workspaceSaved: "कार्यक्षेत्र जतन केले गेले"
},
gu: {
    title: "સ્ટડીસ્પ્રિન્ટ AI",
    subtitle: "AI આધારિત વ્યક્તિગત અભ્યાસ આયોજનકર્તા",

    exam: "પરીક્ષાનું નામ",
    hours: "દિવસના અભ્યાસ કલાકો",
    generate: "અભ્યાસ યોજના બનાવો",

    addSubject: "➕ વિષય ઉમેરો",
    subject: "વિષય",
    subjectName: "વિષયનું નામ",
    examDate: "પરીક્ષાની તારીખ",
    priority: "પ્રાથમિકતા",
    preparation: "વર્તમાન તૈયારી સ્તર",

    high: "ઉચ્ચ",
    medium: "મધ્યમ",
    low: "નીચું",

    poor: "નબળું",
    average: "સરેરાશ",
    good: "સારું",

    examPlaceholder: "પરીક્ષાનું નામ દાખલ કરો",
    hoursPlaceholder: "દિવસના અભ્યાસ કલાકો",

    aiProvider: "AI પ્રદાતા",
    localAI: "લોકલ AI (Ollama)",

    generateBtn: "AI અભ્યાસ યોજના બનાવો",

    lightMode: "☀️ લાઇટ મોડ",
    darkMode: "🌙 ડાર્ક મોડ",

    openAI: "OpenAI (BYOK)",

    workspaceTitle: "વિષય કાર્યસ્થળો",

    successQuote: "સફળતા એ દરરોજ કરાયેલા નાના પ્રયત્નોનું સરવાળું છે.",

    poweredBy: "StudySprint AI દ્વારા સંચાલિત",

    personalizedPlan: "📚 વ્યક્તિગત અભ્યાસ યોજના",
    studyPlan: "📚 વ્યક્તિગત અભ્યાસ યોજના",

    progress: "📈 પ્રગતિ",
    completed: "પૂર્ણ",
    study: "અભ્યાસ",

    workspaces: "📚 વિષય કાર્યસ્થળો",
    workspace: "કાર્યસ્થળ",

    quote: "સફળતા એ દરરોજ કરાયેલા નાના પ્રયત્નોનું સરવાળું છે.",

    generatedBy: "🚀 StudySprint AI દ્વારા જનરેટ કરાયેલ",

    deleteWorkspace: "માટેનો બધો ડેટા કાઢી નાખો",

    tipTitle: "AI અભ્યાસ સૂચન",

    notes: "નોંધો",
    resources: "સંસાધનો",

    searchNotes: "નોંધો શોધો",
    searchPlaceholder: "નોંધો શોધો...",

    youtubeLink: "YouTube લિંક",
    youtubePlaceholder: "YouTube લિંક પેસ્ટ કરો",

    pdfLink: "PDF લિંક",
    pdfPlaceholder: "PDF લિંક પેસ્ટ કરો",

    bookName: "પુસ્તકનું નામ",
    bookPlaceholder: "પુસ્તકનું નામ દાખલ કરો",

    saveWorkspace: "💾 કાર્યસ્થળ સાચવો",

    resourcePreview: "📚 સંસાધન પૂર્વદર્શન",

    clearWorkspace: "🗑 કાર્યસ્થળ સાફ કરો",

    conceptRevision: "સિદ્ધાંત પુનરાવર્તન",
    practiceQuestions: "અભ્યાસ પ્રશ્નો",
    pyqs: "પાછલા વર્ષોના પ્રશ્નો",
    quickRevision: "ઝડપી પુનરાવર્તન",

    dailyGoal: "🎯 દૈનિક લક્ષ્ય",

    aiSuggestion: "💡 AI સૂચન",

    expectedProgress: "📊 અપેક્ષિત પ્રગતિ",

    tasksDone: "પૂર્ણ થયેલા કાર્યો",

    start: "શરૂઆત",
    quarterWay: "ચોથાઈ માર્ગ",
    halfWay: "અડધો માર્ગ",
    almostThere: "લગભગ પૂર્ણ",
    completedLabel: "પૂર્ણ",

    greatJob: "✨ સરસ કામ! આમ જ ચાલુ રાખો, તમે ઉત્તમ કાર્ય કરી રહ્યા છો! 🚀",

    feedback: "⭐ પ્રતિસાદ આપો",
fetchError: "ડેટા મેળવવામાં નિષ્ફળ",
loadingPlan: "અભ્યાસ યોજના તૈયાર થઈ રહી છે...",
aiStudyTips: "AI અભ્યાસ સૂચનો",
youtubeResource: "🎥 YouTube સંસાધન",
pdfResource: "📄 PDF સંસાધન",
enterSubject: "કૃપા કરીને પહેલા ઓછામાં ઓછો એક વિષય દાખલ કરો.",
fillExamHours: "કૃપા કરીને પરીક્ષાનું નામ અને દૈનિક અભ્યાસ કલાકો ભરો.",
workspaceSaved: "વર્કસ્પેસ સેવ થયું"
},
pa: {
    title: "ਸਟਡੀਸਪ੍ਰਿੰਟ AI",
    subtitle: "AI ਅਧਾਰਿਤ ਨਿੱਜੀ ਅਧਿਐਨ ਯੋਜਕ",

    exam: "ਪਰੀਖਿਆ ਦਾ ਨਾਮ",
    hours: "ਰੋਜ਼ਾਨਾ ਪੜ੍ਹਾਈ ਦੇ ਘੰਟੇ",
    generate: "ਅਧਿਐਨ ਯੋਜਨਾ ਬਣਾਓ",

    addSubject: "➕ ਵਿਸ਼ਾ ਸ਼ਾਮਲ ਕਰੋ",
    subject: "ਵਿਸ਼ਾ",
    subjectName: "ਵਿਸ਼ੇ ਦਾ ਨਾਮ",
    examDate: "ਪਰੀਖਿਆ ਦੀ ਤਾਰੀਖ",
    priority: "ਤਰਜੀਹ",
    preparation: "ਮੌਜੂਦਾ ਤਿਆਰੀ ਪੱਧਰ",

    high: "ਉੱਚ",
    medium: "ਦਰਮਿਆਨਾ",
    low: "ਘੱਟ",

    poor: "ਕਮਜ਼ੋਰ",
    average: "ਔਸਤ",
    good: "ਚੰਗਾ",

    examPlaceholder: "ਪਰੀਖਿਆ ਦਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    hoursPlaceholder: "ਰੋਜ਼ਾਨਾ ਪੜ੍ਹਾਈ ਦੇ ਘੰਟੇ",

    aiProvider: "AI ਪ੍ਰਦਾਤਾ",
    localAI: "ਲੋਕਲ AI (Ollama)",

    generateBtn: "AI ਅਧਿਐਨ ਯੋਜਨਾ ਬਣਾਓ",

    lightMode: "☀️ ਲਾਈਟ ਮੋਡ",
    darkMode: "🌙 ਡਾਰਕ ਮੋਡ",

    openAI: "OpenAI (BYOK)",

    workspaceTitle: "ਵਿਸ਼ਾ ਵਰਕਸਪੇਸ",

    successQuote: "ਸਫਲਤਾ ਹਰ ਰੋਜ਼ ਕੀਤੇ ਛੋਟੇ-ਛੋਟੇ ਯਤਨਾਂ ਦਾ ਜੋੜ ਹੈ।",

    poweredBy: "StudySprint AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ",

    personalizedPlan: "📚 ਨਿੱਜੀ ਅਧਿਐਨ ਯੋਜਨਾ",
    studyPlan: "📚 ਨਿੱਜੀ ਅਧਿਐਨ ਯੋਜਨਾ",

    progress: "📈 ਤਰੱਕੀ",
    completed: "ਪੂਰਾ",
    study: "ਅਧਿਐਨ",

    workspaces: "📚 ਵਿਸ਼ਾ ਵਰਕਸਪੇਸ",
    workspace: "ਵਰਕਸਪੇਸ",

    quote: "ਸਫਲਤਾ ਹਰ ਰੋਜ਼ ਕੀਤੇ ਛੋਟੇ-ਛੋਟੇ ਯਤਨਾਂ ਦਾ ਜੋੜ ਹੈ।",

    generatedBy: "🚀 StudySprint AI ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਗਿਆ",

    deleteWorkspace: "ਲਈ ਸਾਰਾ ਡਾਟਾ ਮਿਟਾਓ",

    tipTitle: "AI ਅਧਿਐਨ ਸੁਝਾਅ",

    notes: "ਨੋਟਸ",
    resources: "ਸਰੋਤ",

    searchNotes: "ਨੋਟਸ ਖੋਜੋ",
    searchPlaceholder: "ਨੋਟਸ ਖੋਜੋ...",

    youtubeLink: "YouTube ਲਿੰਕ",
    youtubePlaceholder: "YouTube ਲਿੰਕ ਪੇਸਟ ਕਰੋ",

    pdfLink: "PDF ਲਿੰਕ",
    pdfPlaceholder: "PDF ਲਿੰਕ ਪੇਸਟ ਕਰੋ",

    bookName: "ਕਿਤਾਬ ਦਾ ਨਾਮ",
    bookPlaceholder: "ਕਿਤਾਬ ਦਾ ਨਾਮ ਦਰਜ ਕਰੋ",

    saveWorkspace: "💾 ਵਰਕਸਪੇਸ ਸੇਵ ਕਰੋ",

    resourcePreview: "📚 ਸਰੋਤ ਝਲਕ",

    clearWorkspace: "🗑 ਵਰਕਸਪੇਸ ਸਾਫ਼ ਕਰੋ",

    conceptRevision: "ਸੰਕਲਪ ਦੁਹਰਾਈ",
    practiceQuestions: "ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ",
    pyqs: "ਪਿਛਲੇ ਸਾਲਾਂ ਦੇ ਪ੍ਰਸ਼ਨ",
    quickRevision: "ਤੇਜ਼ ਦੁਹਰਾਈ",

    dailyGoal: "🎯 ਰੋਜ਼ਾਨਾ ਲਕਸ਼",

    aiSuggestion: "💡 AI ਸੁਝਾਅ",

    expectedProgress: "📊 ਅਨੁਮਾਨਿਤ ਤਰੱਕੀ",

    tasksDone: "ਪੂਰੇ ਕੀਤੇ ਕੰਮ",

    start: "ਸ਼ੁਰੂਆਤ",
    quarterWay: "ਚੌਥਾਈ ਰਾਹ",
    halfWay: "ਅੱਧਾ ਰਾਹ",
    almostThere: "ਲਗਭਗ ਪੂਰਾ",
    completedLabel: "ਪੂਰਾ",

    greatJob: "✨ ਬਹੁਤ ਵਧੀਆ! ਇਸੇ ਤਰ੍ਹਾਂ ਜਾਰੀ ਰੱਖੋ, ਤੁਸੀਂ ਸ਼ਾਨਦਾਰ ਕੰਮ ਕਰ ਰਹੇ ਹੋ! 🚀",

    feedback: "⭐ ਫੀਡਬੈਕ ਦਿਓ",
fetchError: "ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਅਸਫਲ",
loadingPlan: "ਅਧਿਐਨ ਯੋਜਨਾ ਤਿਆਰ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ...",
aiStudyTips: "AI ਅਧਿਐਨ ਸੁਝਾਅ",
youtubeResource: "🎥 YouTube ਸਰੋਤ",
pdfResource: "📄 PDF ਸਰੋਤ",
enterSubject: "ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਵਿਸ਼ਾ ਦਰਜ ਕਰੋ।",
fillExamHours: "ਕਿਰਪਾ ਕਰਕੇ ਪਰੀਖਿਆ ਦਾ ਨਾਮ ਅਤੇ ਰੋਜ਼ਾਨਾ ਅਧਿਐਨ ਘੰਟੇ ਭਰੋ।",
workspaceSaved: "ਵਰਕਸਪੇਸ ਸੇਵ ਹੋ ਗਿਆ"
}


};
function getPlanKey() {

    const exam =
        document.getElementById("exam").value.trim();

    const hours =
        document.getElementById("hours").value.trim();

    const data = [];

    document.querySelectorAll(".subject-box")
        .forEach((box, index) => {

            data.push({

                subject:
                    document.getElementById(
                        `subject${index + 1}`
                    )?.value || "",

                date:
                    document.getElementById(
                        `date${index + 1}`
                    )?.value || "",

                priority:
                    document.getElementById(
                        `priority${index + 1}`
                    )?.value || "",

                prep:
                    document.getElementById(
                        `prep${index + 1}`
                    )?.value || ""

            });

        });

    return JSON.stringify({
        exam,
        hours,
        data
    });
}
function changeLanguage() {

    const lang =
        document.getElementById("languageSelect").value;

    document.getElementById("title").textContent =
        translations[lang].title;

    document.getElementById("subtitle").textContent =
        translations[lang].subtitle;

    document.getElementById("examLabel").textContent =
        translations[lang].exam;

    document.getElementById("hoursLabel").textContent =
        translations[lang].hours;

    document.getElementById("generateTipsBtn").textContent =
        translations[lang].generateBtn;
    document.getElementById("addSubjectBtn").textContent =
    translations[lang].addSubject;

    document.getElementById("generatePlanBtn").textContent =
        translations[lang].generate;

    document.querySelectorAll(".subject-title").forEach((title, index) => {
    title.textContent =
        `📘 ${translations[lang].subject} ${index + 1}`;
});

document.querySelectorAll(".subject-name-label").forEach(label => {
    label.textContent =
        translations[lang].subjectName;
});

document.querySelectorAll(".exam-date-label").forEach(label => {
    label.textContent =
        translations[lang].examDate;
});

document.querySelectorAll(".priority-label").forEach(label => {
    label.textContent =
        translations[lang].priority;
});

document.querySelectorAll(".prep-label").forEach(label => {
    label.textContent =
        translations[lang].preparation;
});

document.querySelectorAll(".subject-name").forEach(input => {
    input.placeholder =
        translations[lang].subjectName;
});
document.querySelectorAll(".youtube-link").forEach(input => {
    input.placeholder =
        translations[lang].youtubePlaceholder;
});
document.querySelectorAll(".pdf-link").forEach(input => {
    input.placeholder =
        translations[lang].pdfPlaceholder;
});
document.querySelectorAll(".book-name").forEach(input => {
    input.placeholder =
        translations[lang].bookPlaceholder;
});


document.querySelectorAll(".subject-name").forEach(input => {
    input.placeholder =
        translations[lang].subjectName;
});

    document.getElementById("feedbackBtn").textContent =
        translations[lang].feedback;

    const feedbackText =
        document.getElementById("feedbackText");

    if (feedbackText) {
        feedbackText.textContent =
            translations[lang].feedback;
    }

    document.getElementById("addSubjectBtn").textContent =
        translations[lang].addSubject;

    document.getElementById("footerText").textContent =
        "🚀 " + translations[lang].poweredBy;



    document.getElementById("notesHeading").textContent =
    translations[lang].notes;

document.getElementById("resourcesHeading").textContent =
    translations[lang].resources;

document.querySelectorAll('[id^="subject"]').forEach(input => {
    input.placeholder =
        translations[lang].subjectName;
});

document.getElementById("searchNotesLabel").textContent =
    "🔍 " + translations[lang].searchNotes;

document.getElementById("workspaceNotesLabel").textContent =
    "📝 " + translations[lang].notes;

document.getElementById("youtubeLabel").textContent =
    "🎥 " + translations[lang].youtubeLink;

document.getElementById("pdfLabel").textContent =
    "📄 " + translations[lang].pdfLink;

document.getElementById("bookLabel").textContent =
    "📚 " + translations[lang].bookName;

document.getElementById("resourcePreviewTitle").textContent =
    translations[lang].resourcePreview;

document.getElementById("saveWorkspaceBtn").textContent =
    translations[lang].saveWorkspace;

document.getElementById("clearWorkspaceBtn").textContent =
    translations[lang].clearWorkspace;

document.getElementById("searchNotes").placeholder =
    translations[lang].searchPlaceholder;

document.getElementById("workspaceYoutube").placeholder =
    translations[lang].youtubePlaceholder;

document.getElementById("workspacePdf").placeholder =
    translations[lang].pdfPlaceholder;

document.getElementById("workspaceBook").placeholder =
    translations[lang].bookPlaceholder;

document.getElementById("footerText").textContent =
    "🚀 " + translations[lang].poweredBy;

    document.querySelectorAll('[id^="priority"]').forEach(select => {

      select.options[0].text =
         translations[lang].high;

      select.options[1].text =
         translations[lang].medium;

      select.options[2].text =
         translations[lang].low;
   });

   document.querySelectorAll('[id^="prep"]').forEach(select => {

      select.options[0].text =
         translations[lang].poor;

      select.options[1].text =
         translations[lang].average;

      select.options[2].text =
         translations[lang].good;
    });

    document.querySelector('#aiProvider option[value="gemini"]')
            .textContent =
                translations[lang].openAI;

    document.querySelectorAll(".subject-name-label")
            .forEach(el => {
                el.textContent =
                    translations[lang].subjectName;
            }   );

    document.getElementById("exam").placeholder =
        translations[lang].examPlaceholder;

    document.getElementById("hours").placeholder =
        translations[lang].hoursPlaceholder;

    document.getElementById("aiProviderLabel").innerText =
        translations[lang].aiProvider;

        updateThemeButtonText();

        const localOption = document.getElementById("localAiOption");

            if(localOption){
                localOption.textContent =
                translations[lang].localAI;
            }

            document.querySelectorAll(".subject-title")
                .forEach((title,index)=>{
                title.textContent =
        `       📘 ${translations[lang].subject} ${index+1}`;
            });

        document
    .querySelectorAll(".task-checkbox")
    .forEach(cb => {
        cb.dispatchEvent(
            new Event("change")
        );
    });

        document.querySelectorAll(".exam-date-label")
            .forEach(el => {
                el.textContent =
        translations[lang].examDate;
        });

        document.querySelectorAll(".priority-label")
                .forEach(el => {
                    el.textContent =
        translations[lang].priority;
        });

        document.querySelectorAll(".prep-label")
            .forEach(el => {
                 el.textContent =
        translations[lang].preparation;
        });


    localStorage.setItem("language", lang);
    if (
    document.querySelector(".task-checkbox")
) {
    generatePlan();
}
}
const aiProvider =
    document.getElementById("aiProvider");

if (aiProvider) {

    aiProvider.addEventListener(
        "change",
        function () {

            document.getElementById(
                "apiKeyContainer"
            ).style.display =
                this.value === "gemini"
                    ? "block"
                    : "none";

        }
    );
}
console.log("generateAITips loaded");
function generateAITips() {

    const lang =
        document.getElementById("languageSelect").value;

    const subjects = [];

    for (let i = 1; i <= subjectCount; i++) {

        const input =
            document.getElementById(`subject${i}`);

        if (!input) continue;

        const value =
            input.value.trim();

        if (value) {
            subjects.push(value);
        }
    }

    if (subjects.length === 0) {

        alert(
    lang === "hi"
        ? "पहले कम से कम एक विषय दर्ज करें।"
    : lang === "te"
        ? "ముందుగా కనీసం ఒక సబ్జెక్ట్ నమోదు చేయండి."
    : lang === "od"
        ? "ପ୍ରଥମେ କମ୍ ସେ କମ୍ ଗୋଟିଏ ବିଷୟ ଲେଖନ୍ତୁ।"
    : lang === "bn"
        ? "প্রথমে অন্তত একটি বিষয় লিখুন।"
    : lang === "mr"
        ? "कृपया प्रथम किमान एक विषय प्रविष्ट करा."
    : lang === "gu"
        ? "કૃપા કરીને પહેલા ઓછામાં ઓછો એક વિષય દાખલ કરો."
    : lang === "pa"
        ? "ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਵਿਸ਼ਾ ਦਰਜ ਕਰੋ।"
    : "Enter at least one subject first."
);

        return;
    }

    let output =
        `💡 ${translations[lang].tipTitle}\n\n`;

    subjects.forEach(subject => {

        const tips = [

    lang === "hi"
        ? `${subject} के लिए प्रतिदिन 2 घंटे अध्ययन करें।`
    : lang === "te"
        ? `${subject} కోసం ప్రతిరోజూ 2 గంటలు చదవండి.`
    : lang === "od"
        ? `${subject} ପାଇଁ ପ୍ରତିଦିନ ୨ ଘଣ୍ଟା ଅଧ୍ୟୟନ କରନ୍ତୁ।`
    : lang === "bn"
        ? `${subject} এর জন্য প্রতিদিন ২ ঘণ্টা অধ্যয়ন করুন।`
    : lang === "mr"
        ? `${subject} साठी दररोज २ तास अभ्यास करा.`
    : lang === "gu"
        ? `${subject} માટે દરરોજ ૨ કલાક અભ્યાસ કરો.`
    : lang === "pa"
        ? `${subject} ਲਈ ਹਰ ਰੋਜ਼ 2 ਘੰਟੇ ਪੜ੍ਹਾਈ ਕਰੋ।`
    : `Study ${subject} for 2 hours daily.`,



    lang === "hi"
        ? `${subject} के 20 प्रश्न रोज़ हल करें।`
    : lang === "te"
        ? `${subject} పై రోజుకు 20 ప్రశ్నలు సాధన చేయండి.`
    : lang === "od"
        ? `${subject} ର 20ଟି ପ୍ରଶ୍ନ ପ୍ରତିଦିନ ସମାଧାନ କରନ୍ତୁ।`
    : lang === "bn"
        ? `${subject} এর ২০টি প্রশ্ন প্রতিদিন সমাধান করুন।`
    : lang === "mr"
        ? `${subject} चे २० प्रश्न दररोज सोडवा.`
    : lang === "gu"
        ? `${subject} ના 20 પ્રશ્નો દરરોજ ઉકેલો.`
    : lang === "pa"
        ? `${subject} ਦੇ 20 ਪ੍ਰਸ਼ਨ ਹਰ ਰੋਜ਼ ਹੱਲ ਕਰੋ।`
    : `Solve 20 questions of ${subject} daily.`,



    lang === "hi"
        ? `${subject} के छोटे नोट्स बनाएं।`
    : lang === "te"
        ? `${subject} కోసం చిన్న నోట్స్ తయారు చేయండి.`
    : lang === "od"
        ? `${subject} ପାଇଁ ଛୋଟ ଛୋଟ ଟିପ୍ପଣୀ ତିଆରି କରନ୍ତୁ।`
    : lang === "bn"
        ? `${subject} এর জন্য সংক্ষিপ্ত নোট তৈরি করুন।`
    : lang === "mr"
        ? `${subject} साठी लहान नोट्स तयार करा.`
    : lang === "gu"
        ? `${subject} માટે ટૂંકી નોંધો બનાવો.`
    : lang === "pa"
        ? `${subject} ਲਈ ਛੋਟੇ ਨੋਟ ਬਣਾਓ।`
    : `Prepare short notes for ${subject}.`,



    lang === "hi"
        ? `${subject} के पिछले वर्षों के प्रश्न हल करें।`
    : lang === "te"
        ? `${subject} గత ప్రశ్నాపత్రాలు సాధన చేయండి.`
    : lang === "od"
        ? `${subject} ର ପୂର୍ବବର୍ଷର ପ୍ରଶ୍ନପତ୍ର ଅଭ୍ୟାସ କରନ୍ତୁ।`
    : lang === "bn"
        ? `${subject} এর পূর্ববর্তী বছরের প্রশ্ন অনুশীলন করুন।`
    : lang === "mr"
        ? `${subject} चे मागील वर्षांचे प्रश्न सोडवा.`
    : lang === "gu"
        ? `${subject} ના અગાઉના વર્ષોના પ્રશ્નોનો અભ્યાસ કરો.`
    : lang === "pa"
        ? `${subject} ਦੇ ਪਿਛਲੇ ਸਾਲਾਂ ਦੇ ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਅਭਿਆਸ ਕਰੋ।`
    : `Practice previous year questions of ${subject}.`

];

        output +=
            `📘 ${subject}\n${tips[Math.floor(Math.random() * tips.length)]}\n\n`;

    });

    alert(output);
}
function openFeedbackForm() {

    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfRVG1FBYap7IRtuy82rgunVGe87TBJZEniRuO65A-Lh-5Mxw/viewform?usp=publish-editor",
        "_blank"
    );

}

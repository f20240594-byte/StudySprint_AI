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
    alert("Please enter at least one subject.");
    return;
}
if (!exam || !hours) {

    alert(
        "Please fill Exam Name and Hours Per Day."
    );

    return;
}

try {

    document.getElementById("result").innerHTML = `
    
    <div class="loading-card">

        <div class="spinner"></div>

        <p>
            Generating Study Plan...
        </p>

    </div>
   
`;

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
    language: lang
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
    lang === "hi"
        ? dailyGoalsHi
        : lang === "te"
        ? dailyGoalsTe
        : dailyGoals;

const suggestionArray =
    lang === "hi"
        ? aiSuggestionsHi
        : lang === "te"
        ? aiSuggestionsTe
        : aiSuggestions;

const progressArray =
    lang === "hi"
        ? progressMessagesHi
        : lang === "te"
        ? progressMessagesTe
        : progressMessages;

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

    <h3>🤖 AI Generated Study Tips</h3>

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

            ❌ ${error.message}

        </div>

    `;

}

}

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
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark);
    const lang = document.getElementById("languageSelect").value;
    themeBtn.innerHTML =
    isDark
        ? (lang === "hi" ? "☀️ लाइट मोड" :
           lang === "te" ? "☀️ లైట్ మోడ్" :
           "☀️ Light Mode")
        : (lang === "hi" ? "🌙 डार्क मोड" :
           lang === "te" ? "🌙 డార్క్ మోడ్" :
           "🌙 Dark Mode");
});
window.addEventListener("DOMContentLoaded", () => {

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

                <label class="subject-name-label">Subject Name</label>
                <input
                    id="subject${subjectCount}"
                    type="text">

                <label class="exam-date-label">Exam Date</label>
                <input
                    id="date${subjectCount}"
                    type="date">

                <label class="priority-label">Priority</label>
                <select id="priority${subjectCount}">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <label class="prep-label">Preparation Level</label>
                <select id="prep${subjectCount}">
                    <option>Poor</option>
                    <option>Average</option>
                    <option>Good</option>
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
feedback: "⭐ Give Feedback"
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
feedback: "⭐ प्रतिक्रिया दें"
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
feedback: "⭐ అభిప్రాయం ఇవ్వండి"
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

    document.getElementById("generatePlanBtn").textContent =
        translations[lang].generate;

    document.getElementById("feedbackBtn").textContent =
        translations[lang].feedback;

    document.getElementById("addSubjectBtn").textContent =
        translations[lang].addSubject;

    document.getElementById("footerText").textContent =
        "🚀 " + translations[lang].poweredBy;
    
    

    document.getElementById("notesHeading").textContent =
    translations[lang].notes;

document.getElementById("resourcesHeading").textContent =
    translations[lang].resources;

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
   
    document.querySelector('#aiProvider option[value="openai"]')
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

        const themeBtn = document.getElementById("themeToggle");
        const isDark = document.body.classList.contains("dark-mode");
          themeBtn.textContent = isDark
        ? translations[lang].lightMode
        : translations[lang].darkMode;

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
                this.value === "openai"
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
                : `Study ${subject} for 2 hours daily.`,

            lang === "hi"
                ? `${subject} के 20 प्रश्न रोज़ हल करें।`
                : lang === "te"
                ? `${subject} పై రోజుకు 20 ప్రశ్నలు సాధన చేయండి.`
                : `Solve 20 questions of ${subject} daily.`,

            lang === "hi"
                ? `${subject} के छोटे नोट्स बनाएं।`
                : lang === "te"
                ? `${subject} కోసం చిన్న నోట్స్ తయారు చేయండి.`
                : `Prepare short notes for ${subject}.`,

            lang === "hi"
                ? `${subject} के पिछले वर्षों के प्रश्न हल करें।`
                : lang === "te"
                ? `${subject} గత ప్రశ్నాపత్రాలు సాధన చేయండి.`
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
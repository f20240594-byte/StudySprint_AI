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

    let html = `

        <h2>
            ${translations[lang].personalizedPlan}
        </h2>

        <div class="progress-container">

            <div class="progress-text">
    ${translations[lang].progress}: 0% ${translations[lang].completed}
</div>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    id="progressFill">
                </div>

            </div>

        </div>

    `;

    data.study_plan.forEach((day) => {

        html += `

            <div class="day-card">

                <h3 class="day-title">
                    📅 ${day.date}
                </h3>

        `;

        day.tasks.forEach((task) => {

            html += `

                <div class="plan-card">

                    <div class="plan-left">

                        <input
                            type="checkbox"
                            class="task-checkbox">

                        <span class="task-text">
                            ${task}
                        </span>

                    </div>
                    <div class="task-badge">
                       ${translations[lang].study}
                    </div>

                </div>

            `;

        });

        html += `
            </div>
        `;

    });

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

    const badge =
        checkbox
            .closest(".plan-card")
            .querySelector(".task-badge");

            if (checkbox.checked) {

                badge.innerHTML =
                    translations[lang].completed;

                badge.classList.add(
                    "completed-badge"
                );

            } else {

    const lang =
        document.getElementById("languageSelect").value;

    badge.innerHTML =
        translations[lang].study;

    badge.classList.remove(
        "completed-badge"
    );
}

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

            document.querySelector(".progress-text").innerHTML =
    `${translations[lang].progress}: ${percent}% ${translations[lang].completed}`;

            document.getElementById(
                "progressFill"
            ).style.width =
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
clearWorkspace: "🗑 Clear Workspace"
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
clearWorkspace: "🗑 कार्यक्षेत्र साफ़ करें"
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
clearWorkspace: "🗑 వర్క్‌స్పేస్ క్లియర్ చేయండి"
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
// Dashboard JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard
    initializeDashboard();
    
    // Add event listeners for navigation
    setupNavigation();
    
    // Setup dropdown functionality
    setupDropdowns();
    
    // Add smooth scrolling and animations
    setupAnimations();
});

function initializeDashboard() {
    console.log('Sunrise University Dashboard initialized');
    
    // Set current date in footer if needed
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer p');
    if (footerYear) {
        footerYear.innerHTML = `&copy; 2021-${currentYear} Sunrise University`;
    }
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Handle dropdown toggles
            if (this.classList.contains('dropdown-toggle')) {
                return; // Let dropdown handler manage this
            }
            
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.parentElement.classList.add('active');
            
            // Update page title based on clicked item
            const pageTitle = document.querySelector('.page-title');
            const itemText = this.querySelector('span').textContent;
            if (pageTitle) {
                pageTitle.textContent = itemText;
            }
            
            // Handle different navigation items
            const href = this.getAttribute('href');
            handleNavigation(href);
        });
    });
}

function setupDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.parentElement;
            const isActive = dropdown.classList.contains('active');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(dd => {
                if (dd !== dropdown) {
                    dd.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            if (isActive) {
                dropdown.classList.remove('active');
            } else {
                dropdown.classList.add('active');
            }
        });
    });
    
    // Handle dropdown menu item clicks
    const dropdownMenuItems = document.querySelectorAll('.dropdown-menu a');
    
    dropdownMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            // Add active class to parent dropdown
            this.closest('.dropdown').classList.add('active');
            
            // Update page title
            const pageTitle = document.querySelector('.page-title');
            const itemText = this.textContent.trim();
            if (pageTitle) {
                pageTitle.textContent = itemText;
            }
            
            // Handle navigation
            const href = this.getAttribute('href');
            handleNavigation(href);
        });
    });
}

function handleNavigation(href) {
    const contentArea = document.querySelector('.dashboard-content');
    
    switch(href) {
           
        case '#admission':
            showAdmissionContent(contentArea);
            break;
        case '#id-card':
            showIdCardContent(contentArea);
            break;
        case '#examination':
            showExaminationContent(contentArea);
            break;
        case '#results':
            showResultsContent(contentArea);
            break;
        case '#logout':
            handleLogout();
            break;
        default:
            
    }
}



function showAdmissionContent(contentArea) {
    contentArea.innerHTML = `
        <div class="admission-content">
            <h3>Admission Portal</h3>
            <p>Manage your admission details and documents.</p>
            <div class="admission-forms">
                <div class="form-section">
                    <h4>Personal Information</h4>
                    <p>Update your personal details</p>
                </div>
                <div class="form-section">
                    <h4>Academic Records</h4>
                    <p>View and manage academic history</p>
                </div>
                <div class="form-section">
                    <h4>Documents</h4>
                    <p>Upload required documents</p>
                </div>
            </div>
        </div>
    `;
}

function showIdCardContent(contentArea) {
const username = localStorage.getItem('username');

console.log("Am still working here");
let pdfName =  "";
if (username === 'surj4257') {
    pdfName = "pushpa.pdf";
} 

if (username === 'surj4265') {
    pdfName = "snjar.pdf";
} 

if (username === 'surj4255') {
        pdfName = "sayed.pdf";

} 

    contentArea.innerHTML = `
    <div class="id-card-content">
        <div class="print-id-card-section">
            <button class="print-btn" onClick="window.open('idCard/${pdfName}', '_blank')">Print ID Card</button>
        </div>
    </div>
`;
}

function showExaminationContent(contentArea) {
    contentArea.innerHTML = `
        <div class="examination-content">
            <h3>Examination Portal</h3>
            <p>Access examination schedules and information.</p>
            <div class="exam-info">
                <div class="exam-card">
                    <h4>Upcoming Exams</h4>
                    <p>No upcoming examinations</p>
                </div>
                <div class="exam-card">
                    <h4>Exam Schedule</h4>
                    <p>Check examination timetable</p>
                </div>
                <div class="exam-card">
                    <h4>Exam Guidelines</h4>
                    <p>View examination rules</p>
                </div>
            </div>
        </div>
    `;
}

function showResultsContent(contentArea) {
    const username = localStorage.getItem('username');
    let resultData = [];
    let recordCount = 2; // Default to 2 records
    
    // Determine which data to show based on username
    if (username === 'surj4257') {
        resultData = [
            {
                examination: 'December-2022',
                enrollment: 'SBU220180025',
                course: 'B.A. Hons.',
                stream: 'History (NER)',
                yearSem: '1 Sem',
                moMm: '210/300',
                result: 'Pass',
                pdf: 'pushpa1.pdf'
            },
            {
                examination: 'May-2023',
                enrollment: 'SBU220180025',
                course: 'B.A. Hons.',
                stream: 'History (NER)',
                yearSem: '2 Sem',
                moMm: '219/300',
                result: 'Pass',
                pdf: 'pushpa2.pdf'
            },
            {
                examination: 'December-2023',
                enrollment: 'SBU220180025',
                course: 'B.A. Hons.',
                stream: 'History (NER)',
                yearSem: '3 Sem',
                moMm: '211/300',
                result: 'Pass',
                pdf: 'pushpa3.pdf'
            },
            {
                examination: 'August-2024',
                enrollment: 'SBU220180025',
                course: 'B.A. Hons.',
                stream: 'History (NER)',
                yearSem: '4 Sem',
                moMm: '215/300',
                result: 'Pass',
                pdf: 'pushpa4.pdf'
            }
        ];
        recordCount = 4;
    } else if (username === 'surj4265') {
        resultData = [
            {
                examination: 'December-2022',
                enrollment: 'SRU220180027',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '1 Sem',
                moMm: '203/300',
                result: 'Pass',
                pdf: 'sanjar1.pdf'
            },
            {
                examination: 'May-2023',
                enrollment: 'SRU220180027',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '2 Sem',
                moMm: '217/300',
                result: 'Pass',
                pdf: 'sanjar2.pdf'
            },
            {
                examination: 'December-2023',
                enrollment: 'SRU220180027',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '3 Sem',
                moMm: '202/300',
                result: 'Pass',
                pdf: 'sanjar3.pdf'
            },
            {
                examination: 'August-2024',
                enrollment: 'SRU220180027',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '4 Sem',
                moMm: '213/300',
                result: 'Pass',
                pdf:'sanjar4.pdf'
            }
        ];
        recordCount = 4;
    } else if (username === 'surj4255') {
        resultData = [
            {
                examination: 'December-2022',
                enrollment: 'SRU220180028',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '1 Sem',
                moMm: '210/300',
                result: 'Pass',
                pdf: 'sayed1.pdf'
            },
            {
                examination: 'May-2023',
                enrollment: 'SRU220180028',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '2 Sem',
                moMm: '218/300',
                result: 'Pass',
                pdf: 'sayed2.pdf'
            },
            {
                examination: 'December-2023',
                enrollment: 'SRU220180028',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '3 Sem',
                moMm: '208/300',
                result: 'Pass',
                pdf: 'sayed3.pdf'
            },
            {
                examination: 'August-2024',
                enrollment: 'SRU220180028',
                course: 'B.A. Hons.',
                stream: 'History (NEP)',
                yearSem: '4 Sem',
                moMm: '205/300',
                result: 'Pass',
                pdf: 'sayed4.pdf'
            }
        ];
        recordCount = 4;
    }

    // Generate table rows from resultData
    const tableRows = resultData.map(result => `
        <tr>
            <td>${result.examination}</td>
            <td>${result.enrollment}</td>
            <td>${result.course}</td>
            <td>${result.stream}</td>
            <td>${result.yearSem}</td>
            <td>${result.moMm}</td>
            <td><span class="result-status pass">${result.result}</span></td>
            <td class="action-buttons">
                <button class="action-btn view-btn" title="View Details" onclick="window.open('pdfs/${result.pdf}', '_blank')">
                    <i class="fas fa-search"></i>
                </button>
                <button class="action-btn print-btn" title="Print" onclick="window.open('pdfs/${result.pdf}', '_blank')">
                    <i class="fas fa-print"></i>
                </button>
            </td>
        </tr>
    `).join('');

    contentArea.innerHTML = `
        <div class="results-content">
            <div class="result-summary-box">
                <div class="summary-header">
                    <h4>Result Summary</h4>
                    <span class="record-count">${recordCount} Records Found</span>
                </div>
            </div>
            
            <div class="results-table-container">
                <table class="examination-results-table">
                    <thead>
                        <tr>
                            <th>Examination</th>
                            <th>Enrollment</th>
                            <th>Course</th>
                            <th>Stream</th>
                            <th>Year/Sem</th>
                            <th>MO/MM</th>
                            <th>Result</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function handleLogout() {
    // Show logout confirmation
    if (confirm('Are you sure you want to logout?')) {
        // Show logout message
        const contentArea = document.querySelector('.dashboard-content');
        contentArea.innerHTML = `
            <div class="logout-message">
                <i class="fas fa-sign-out-alt" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                <h3>Logging out...</h3>
                <p>Please wait while we securely log you out.</p>
            </div>
        `;
        
        // Clear any stored user data
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'http://localhost:3000/login.html';
        }, 2000);
    }
}
function setupAnimations() {
    // Add smooth transitions for content changes
    const contentArea = document.querySelector('.dashboard-content');
    
    // Add fade out effect before content change
    function fadeOutContent() {
        contentArea.style.opacity = '0';
        contentArea.style.transform = 'translateY(20px)';
    }
    
    function fadeInContent() {
        contentArea.style.opacity = '1';
        contentArea.style.transform = 'translateY(0)';
    }
    
    // Override the content change functions to include animations
    const originalShowDashboardContent = showDashboardContent;
    const originalShowAdmissionContent = showAdmissionContent;
    const originalShowIdCardContent = showIdCardContent;
    const originalShowExaminationContent = showExaminationContent;
    const originalShowResultsContent = showResultsContent;
    
    showDashboardContent = function(contentArea) {
        fadeOutContent();
        setTimeout(() => {
            originalShowDashboardContent(contentArea);
            setTimeout(fadeInContent, 50);
        }, 200);
    };
    
    showAdmissionContent = function(contentArea) {
        fadeOutContent();
        setTimeout(() => {
            originalShowAdmissionContent(contentArea);
            setTimeout(fadeInContent, 50);
        }, 200);
    };
    
    showIdCardContent = function(contentArea) {
        fadeOutContent();
        setTimeout(() => {
            originalShowIdCardContent(contentArea);
            setTimeout(fadeInContent, 50);
        }, 200);
    };
    
    showExaminationContent = function(contentArea) {
        fadeOutContent();
        setTimeout(() => {
            originalShowExaminationContent(contentArea);
            setTimeout(fadeInContent, 50);
        }, 200);
    };
    
    showResultsContent = function(contentArea) {
        fadeOutContent();
        setTimeout(() => {
            originalShowResultsContent(contentArea);
            setTimeout(fadeInContent, 50);
        }, 200);
    };
}

// Add CSS for additional components
const additionalStyles = `
    .dashboard-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 30px;
    }
    
    .stat-card {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        border: 1px solid #e0e0e0;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .stat-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .stat-card i {
        font-size: 32px;
        color: #4caf50;
        margin-bottom: 10px;
    }
    
    .stat-card h4 {
        color: #333;
        margin-bottom: 5px;
    }
    
    .stat-card p {
        color: #666;
        font-size: 14px;
    }
    
    .admission-forms, .exam-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 30px;
    }
    
    .form-section, .exam-card {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        transition: transform 0.3s ease;
    }
    
    .form-section:hover, .exam-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
    
    .form-section h4, .exam-card h4 {
        color: #2e7d32;
        margin-bottom: 10px;
    }
    
    .print-id-card-section {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
        min-height: 400px;
        padding-top: 5px;
    }
    
    .print-btn {
        background: #337ab7;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        min-width: 120px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .print-btn:hover {
        background: #286090;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.25);
    }
    
    .print-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .id-card-preview {
        background: #fff;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .card-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 15px;
    }
    
    .card-logo {
        width: 40px;
        height: auto;
        margin-right: 15px;
    }
    
    .card-title h5 {
        color: #2e7d32;
        margin: 0;
        font-size: 16px;
    }
    
    .card-title p {
        color: #666;
        margin: 0;
        font-size: 12px;
    }
    
    .student-info p {
        margin: 8px 0;
        color: #333;
    }
    
    .card-actions {
        margin-top: 20px;
        display: flex;
        gap: 10px;
    }
    
    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    
    .btn-primary {
        background: #4caf50;
        color: white;
    }
    
    .btn-primary:hover {
        background: #45a049;
    }
    
    .btn-secondary {
        background: #f8f9fa;
        color: #666;
        border: 1px solid #e0e0e0;
    }
    
    .btn-secondary:hover {
        background: #e9ecef;
    }
    
    .result-summary-box {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        padding: 15px 20px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    
    .summary-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .summary-header h4 {
        color: #856404;
        margin: 0;
        font-size: 16px;
        font-weight: 600;
    }
    
    .record-count {
        color: #856404;
        font-size: 14px;
        font-weight: 500;
    }
    
    .examination-results-table {
        width: 100%;
        border-collapse: collapse;
        background: #fff;
        border: 1px solid #e0e0e0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-top: 20px;
        table-layout: auto;
    }
    
    .results-table-container {
        width: 100%;
        overflow-x: auto;
    }
    
    .results-content {
        width: 100%;
        padding: 0;
    }
    
    .examination-results-table th {
        background: #f8f9fa;
        padding: 18px 15px;
        text-align: left;
        font-weight: 600;
        color: #333;
        font-size: 15px;
        border-bottom: 2px solid #e0e0e0;
        white-space: nowrap;
    }
    
    .examination-results-table td {
        padding: 18px 15px;
        text-align: left;
        border-bottom: 1px solid #e0e0e0;
        font-size: 15px;
        color: #333;
        word-wrap: break-word;
    }
    
    .examination-results-table tr:hover {
        background: #f8f9fa;
    }
    
    .result-status {
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
        text-transform: uppercase;
    }
    
    .result-status.pass {
        background: #d4edda;
        color: #155724;
    }
    
    .action-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
    
    .action-btn {
        background: none;
        border: none;
        padding: 6px 8px;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.2s ease;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 32px;
        height: 32px;
    }
    
    .action-btn.view-btn {
        color: #ff9800;
    }
    
    .action-btn.view-btn:hover {
        background: #fff3e0;
        color: #f57c00;
    }
    
    .action-btn.print-btn {
        color: #4caf50;
    }
    
    .action-btn.print-btn:hover {
        background: #e8f5e8;
        color: #388e3c;
    }
    
    .results-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .results-table th,
    .results-table td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #e0e0e0;
    }
    
    .results-table th {
        background: #f8f9fa;
        font-weight: 600;
        color: #333;
    }
    
    .results-table tr:hover {
        background: #f8f9fa;
    }
    
    .status {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
    }
    
    .status.passed {
        background: #d4edda;
        color: #155724;
    }
    
    .results-summary {
        margin-top: 30px;
    }
    
    .summary-card {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        border: 1px solid #e0e0e0;
    }
    
    .summary-card h4 {
        color: #2e7d32;
        margin-bottom: 10px;
    }
    
    .percentage {
        font-size: 32px;
        font-weight: bold;
        color: #4caf50;
        margin: 10px 0;
    }
    
    .logout-message {
        text-align: center;
        color: #666;
    }
    
    .logout-message i {
        display: block;
        margin: 0 auto 20px;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet); 
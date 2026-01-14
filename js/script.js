let visiblemenu = false;

//function that hides and shows the menu

function showhidemenuu(){
    if(visiblemenu){
        document.getElementById('nav').classList =""
        visiblemenu =false;
    }else{
        document.getElementById('nav').classList ="responsive"
        visiblemenu =true;
    }
}

function select(){
    
    document.getElementById("nav").classList =""
    visiblemenu = false
}

let currentLanguage = 'es'; 

// Abrir/Cerrar Chat
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const chatContainer = document.getElementById('chatContainer');
    if (chatBox.style.display === 'flex') {
        chatBox.style.display = 'none';
        chatContainer.classList.remove('chat-active');
    } else {
        chatBox.style.display = 'flex';
        chatContainer.classList.add('chat-active');
    }
}

//MENÚ PRINCIPAL 
function setLanguage(lang) {
    currentLanguage = lang;
    
    let menuHTML = '';
    
    if (lang === 'es') {
        menuHTML = `
            <p>¡Idioma: Español 🇪🇸! <br>Elegí una opción o escribe tu consulta:</p>
            <div class="chat-options">
                <button onclick="sendMessage('Sobre mí')">👤 Sobre mí</button>
                <button onclick="sendMessage('Experiencia')">💼 Experiencia</button>
                <button onclick="sendMessage('Skills Técnicas')">🛠️ Hard Skills</button>
                <button onclick="sendMessage('Habilidades Blandas')">🤝 Soft Skills</button>
                <button onclick="sendMessage('Educación')">🎓 Educación</button>
                <button onclick="sendMessage('Cursos')">📚 Cursos</button>
                <button onclick="sendMessage('Idiomas')">🗣️ Idiomas</button>
                <button onclick="sendMessage('Descargar CV')">📥 Descargar CV</button>
                <button onclick="sendMessage('Contacto')">📧 Contacto</button>
            </div>`;
    } else {
        menuHTML = `
            <p>Language: English 🇺🇸! <br>Select an option or type your query:</p>
            <div class="chat-options">
                <button onclick="sendMessage('About Me')">👤 About Me</button>
                <button onclick="sendMessage('Experience')">💼 Experience</button>
                <button onclick="sendMessage('Technical Skills')">🛠️ Hard Skills</button>
                <button onclick="sendMessage('Soft Skills')">🤝 Soft Skills</button>
                <button onclick="sendMessage('Education')">🎓 Education</button>
                <button onclick="sendMessage('Courses')">📚 Courses</button>
                <button onclick="sendMessage('Languages')">🗣️ Languages</button>
                <button onclick="sendMessage('Download CV')">📥 Download Resume</button>
                <button onclick="sendMessage('Contact')">📧 Contact</button>
            </div>`;
    }

    addMessage(menuHTML, 'bot-message');
}

function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}

function sendMessage(text = null) {
    const inputField = document.getElementById('userInput');
    const messageText = text || inputField.value.trim();
    
    if (messageText === "") return;

    addMessage(messageText, 'user-message');
    inputField.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(messageText.toLowerCase());
        addMessage(botResponse, 'bot-message');
    }, 600);
}

function addMessage(htmlContent, className) {
    const chatContent = document.getElementById('chatContent');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerHTML = htmlContent;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}


function getBotResponse(input) {
    
    // MODO ESPAÑOL 
    if (currentLanguage === 'es') {
        
        // 1. SOBRE MÍ
        if (input.includes('sobre') || input.includes('perfil') || input.includes('mi')) {
            return "<strong>Sobre mí:</strong><br>Soy estudiante avanzado de la Licenciatura en Ciberseguridad y Desarrollador Front-End. Tengo sólida formación en seguridad, uso de herramientas como Kali Linux/Nmap y experiencia en auditorías y gestión de riesgos.";
        }

        // 2. EXPERIENCIA LABORAL
        if (input.includes('experiencia') || input.includes('trabajo')) {
            return "<strong>Experiencia Laboral:</strong><br><br>" +
                   "• <strong>Yel Solutions (2025):</strong> Security Administrator. Gestión de accesos, usuarios nominales y cumplimiento de políticas.<br>" +
                   "• <strong>Deloitte (2024):</strong> Consultor PCI Riesgo Cibernético.<br>" +
                   "• <strong>Pharmware (2023-24):</strong> Analista Validación IT (QA).<br>" +
                   "• <strong>Gerihome (2017-23):</strong> Soporte Técnico y Administrativo.";
        }

        // 3. HARD SKILLS
        if (input.includes('tecnica') || input.includes('técnica') || input.includes('hard') || input.includes('skill')) {
            return "🛠️ <strong>Hard Skills & Herramientas:</strong><br><br>" +
                   "• <strong>Lenguajes:</strong> PHP, PowerShell, Python, SQL, Java.<br>" +
                   "• <strong>Sistemas y Redes:</strong> Linux, Redes TCP/IP, Gestión de Accesos/Permisos.<br>" +
                   "• <strong>Ciberseguridad:</strong> Análisis de Vulnerabilidades, Criptografía, Gestión de Riesgos, Reportes.<br><br>" +
                   "<strong>Stack Principal:</strong><br>" +
                   "🔹 <em>Seguridad:</em> Kali Linux, Nmap, OpenSSL, Symantec.<br>" +
                   "🔹 <em>Dev:</em> Python, SQL, PHP, PowerShell.<br>";
        }

        // 4. SOFT SKILLS
        if (input.includes('blanda') || input.includes('soft')) {
            return "🤝 <strong>Soft Skills:</strong><br>" +
                   "✅ Adaptabilidad<br>" +
                   "✅ Capacidad de Organización<br>" +
                   "✅ Resolución de Problemas<br>" +
                   "✅ Autonomía<br>" +
                   "✅ Identificación de Fallos<br>" +
                   "✅ Orientación al Cliente<br>" +
                   "✅ Trabajo en Equipo";
        }

        // 5. EDUCACIÓN 
        if (input.includes('educacion') || input.includes('educación') || input.includes('titulo') || input.includes('universidad') || input.includes('estudio')) {
            return "🎓 <strong>Educación:</strong><br><br>" +
                   "<strong>LICENCIATURA EN CIBERSEGURIDAD</strong><br>" +
                   "Universidad Raúl Scalabrini Ortiz (UNSO)<br>" +
                   "2022 | En curso | Último año.<br><br>" +
                   "He adquirido una sólida formación en ciberseguridad, desarrollando habilidades en diversas herramientas y metodologías. Tengo experiencia en el uso de herramientas como Nmap, OpenSSL, Symantec Endpoint Protection, Kali linux, etc. las cuales he utilizado para realizar:<br><br>" +
                   "• Pruebas de penetración<br>" +
                   "• Análisis de vulnerabilidades<br>" +
                   "• Investigación de incidentes<br>" +
                   "• Gestión de riesgos<br>" +
                   "• Seguridad de redes<br>" +
                   "• Seguridad de endpoints<br>" +
                   "• Formación y concientización en seguridad<br>" +
                   "• Auditoría de seguridad";
        }

        // 6. CURSOS
        if (input.includes('curso') || input.includes('certif')) {
            return "📚 <strong>Cursos y Certificaciones:</strong><br><br>" +
                   "🏅 <strong>Auditor ISO 27001</strong> | Hackermentor (2024) | Finalizado<br>" +
                   "🏅 <strong>Bug Bounty</strong> | MercadoLibre (2024) | Finalizados<br>" +
                   "🏅 <strong>Fundamentos SCRUM</strong> | scrumstudy (2023) | Finalizados<br>" +
                   "🏅 <strong>Desarrollo Front-End</strong> | Coderhouse (2022) | Finalizados<br>" +
                   "🏅 <strong>Pentesting</strong> | Udemy (2021) | Finalizados<br>" +
                   "🏅 <strong>Java</strong> | Instituto Cetia (2021) | Finalizado";
        }

        // 7. IDIOMAS
        if (input.includes('idioma') || input.includes('ingles')) {
            return "🗣️ <strong>Idiomas:</strong><br><br>" +
                   "🇬🇧 <strong>INGLÉS: C1 (Avanzado)</strong><br>" +
                   "Certificado por EFSET y Liceo Británico Cultural.<br>" +
                   "(Lectura, escucha y oral: Nivel Intermedio/Avanzado).";
        }
        
        
        if (input.includes('contact') || input.includes('mail') || input.includes('info')) {
            return "📧 <strong>schulteis.tomas@gmail.com</strong><br>📍 Buenos Aires, Argentina.<br>¡Escribime para una entrevista!";
        }
        
       
        if (input.includes('cv') || input.includes('bajar') || input.includes('descargar')) {
            return "📄 <strong>Currículum Vitae:</strong><br>Hacé click para guardarlo:<br><br>👉 <a href='./document/Schulteis_Tomas_CV.pdf' download style='color:#4db5ff; font-weight:bold; text-decoration:underline;'>[DESCARGAR CV PDF]</a>";
        }

        
        return "🤔 Mmm, no tengo esa información específica.<br><br>Para consultas puntuales, contactá a Tomás:<br>📧 <strong>schulteis.tomas@gmail.com</strong>";
    }

    //MODO INGLÉS 
    if (currentLanguage === 'en') {
        
        if (input.includes('about')) return "<strong>About Me:</strong><br>Cybersecurity student (final year) and Front-End Developer. Solid background in security tools (Kali/Nmap), risk management and auditing.";
        
        if (input.includes('experience') || input.includes('work')) return "<strong>Experience:</strong><br>• Yel Solutions (2025): Security Admin.<br>• Deloitte (2024): PCI Consultant.<br>• Pharmware (2023-24): QA Analyst.<br>• Gerihome (2017-23): IT Support.";

        if (input.includes('hard') || input.includes('tech') || input.includes('skill')) {
             return "🛠️ <strong>Hard Skills:</strong><br>• Langs: PHP, PowerShell, Python, SQL, Java.<br>• Systems: Linux, TCP/IP, Access Mgmt.<br>• Security: Vuln Analysis, Cryptography, Risk Mgmt.<br><br><strong>Main Stack:</strong><br>🔹 Kali Linux, Nmap, OpenSSL, Python, SQL.";
        }

        if (input.includes('soft')) {
            return "🤝 <strong>Soft Skills:</strong><br>✅ Adaptability<br>✅ Organization<br>✅ Problem Solving<br>✅ Autonomy<br>✅ Troubleshooting<br>✅ Client Orientation<br>✅ Teamwork";
        }

        if (input.includes('education') || input.includes('study') || input.includes('studies')) {
            return "🎓 <strong>Education:</strong><br><br><strong>Bachelor in Cybersecurity</strong><br>Universidad Raúl Scalabrini Ortiz (UNSO)<br>2022 | In Progress | Final Year.<br><br>I have acquired solid training in cybersecurity, developing skills in various tools and methodologies. I have experience using tools like Nmap, OpenSSL, Symantec Endpoint Protection, Kali linux, etc. which I have used to perform:<br><br>• Penetration Testing<br>• Vulnerability Analysis<br>• Incident Investigation<br>• Risk Management<br>• Network Security<br>• Endpoint Security<br>• Security Awareness Training<br>• Security Auditing";
        }

        if (input.includes('course') || input.includes('certif')) {
            return "📚 <strong>Courses:</strong><br>🏅 Auditor ISO 27001 (Hackermentor, 2024)<br>🏅 Bug Bounty (MercadoLibre, 2024)<br>🏅 SCRUM Fundamentals (2023)<br>🏅 Front-End Dev (Coderhouse, 2022)<br>🏅 Pentesting (Udemy, 2021)<br>🏅 Java (Cetia, 2021)";
        }

        if (input.includes('language') || input.includes('english')) {
             return "🗣️ <strong>Languages:</strong><br><br>🇬🇧 <strong>ENGLISH: C1 (Advanced)</strong><br>Certified by EFSET & Liceo Británico Cultural.";
        }
        
        if (input.includes('contact') || input.includes('info')) return "📧 <strong>schulteis.tomas@gmail.com</strong><br>📍 Buenos Aires, Argentina.<br>Contact me!";
        
        // DESCARGAR CV INGLÉS
        if (input.includes('cv') || input.includes('resume') || input.includes('download')) return "📄 <strong>Resume / CV:</strong><br>Click to save:<br><br>👉 <a href='./document/Schulteis_Tomas_Resume.pdf' download style='color:#4db5ff; font-weight:bold; text-decoration:underline;'>[DOWNLOAD RESUME PDF]</a>";

        return "🤔 Hmm, I don't have that specific info.<br><br>Please contact Tomas directly:<br>📧 <strong>schulteis.tomas@gmail.com</strong>";
    }
}
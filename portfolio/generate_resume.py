import os
from fpdf import FPDF

class ResumePDF(FPDF):
    def __init__(self):
        super().__init__(orientation="P", unit="mm", format="letter")
        self.set_margins(15, 12, 15)
        self.set_auto_page_break(auto=True, margin=12)

    def section_header(self, title):
        self.ln(2.5)
        self.set_font("helvetica", "B", 10.5)
        self.set_text_color(0, 0, 0)
        self.cell(0, 4.5, title.upper(), ln=True)
        # horizontal line
        self.set_draw_color(0, 0, 0)
        self.set_line_width(0.2)
        y_pos = self.get_y() - 0.5
        self.line(15, y_pos, 201, y_pos)
        self.ln(1)

    def add_job(self, title, company, dates, bullets):
        # Row 1: Title (Bold) and Dates (Right-aligned)
        self.set_font("helvetica", "B", 9)
        self.cell(100, 4, title, ln=False)
        self.set_font("helvetica", "B", 9)
        self.cell(86, 4, dates, ln=True, align="R")
        
        # Row 2: Company (Italic)
        self.set_font("helvetica", "I", 8.5)
        self.cell(0, 3.5, company, ln=True)
        self.ln(0.5)
        
        # Bullets
        self.set_font("helvetica", "", 8.5)
        for bullet in bullets:
            self.set_x(18)
            # Use standard bullet point character
            self.cell(4, 3.5, "-", ln=False)
            self.multi_cell(172, 3.5, bullet)
        self.ln(1)

    def add_project(self, title, dates, link_text=None, link_url=None, bullets=None):
        self.set_font("helvetica", "B", 9)
        self.write(4, title)
        
        if link_url:
            self.write(4, " | ")
            self.set_font("helvetica", "BU", 9)
            self.set_text_color(0, 0, 238)
            self.write(4, link_text, link=link_url)
            self.set_text_color(0, 0, 0)
            
        self.set_font("helvetica", "B", 9)
        # Shift X to right align dates
        self.cell(0, 4, dates, ln=True, align="R")
        
        # Bullets
        self.set_font("helvetica", "", 8.5)
        for bullet in bullets:
            self.set_x(18)
            self.cell(4, 3.5, "-", ln=False)
            self.multi_cell(172, 3.5, bullet)
        self.ln(1)

def build_resume():
    pdf = ResumePDF()
    pdf.add_page()
    
    # ---------- HEADER ----------
    pdf.set_font("helvetica", "B", 18)
    pdf.cell(0, 7, "Harsh Srivastav", ln=True, align="C")
    
    pdf.set_font("helvetica", "", 8.5)
    pdf.cell(0, 3.5, "Tilak Nagar, Delhi", ln=True, align="C")
    pdf.ln(0.5)
    
    # Center-aligned contact details with links
    pdf.set_font("helvetica", "", 8.5)
    
    # Calculate widths for perfect spacing
    # Phone
    pdf.set_text_color(0, 0, 238)
    pdf.write(4, "9161955178", link="tel:9161955178")
    pdf.set_text_color(0, 0, 0)
    pdf.write(4, "   |   ")
    
    # Email
    pdf.set_text_color(0, 0, 238)
    pdf.write(4, "hsrivastav099@gmail.com", link="mailto:hsrivastav099@gmail.com")
    pdf.set_text_color(0, 0, 0)
    pdf.write(4, "   |   ")
    
    # LinkedIn
    pdf.set_text_color(0, 0, 238)
    pdf.write(4, "LinkedIn", link="https://www.linkedin.com/in/harshustle")
    pdf.set_text_color(0, 0, 0)
    pdf.write(4, "   |   ")
    
    # LeetCode
    pdf.set_text_color(0, 0, 238)
    pdf.write(4, "LeetCode", link="https://leetcode.com/u/harshustle/")
    pdf.set_text_color(0, 0, 0)
    pdf.write(4, "   |   ")
    
    # GitHub
    pdf.set_text_color(0, 0, 238)
    pdf.write(4, "GitHub", link="https://github.com/harshustle")
    pdf.set_text_color(0, 0, 0)
    
    pdf.ln(4)

    # ---------- EDUCATION ----------
    pdf.section_header("Education")
    pdf.set_font("helvetica", "B", 9)
    pdf.cell(120, 4, "B.Tech in Information Technology", ln=False)
    pdf.cell(66, 4, "Sep. 2021 -- May 2025", ln=True, align="R")
    
    pdf.set_font("helvetica", "I", 8.5)
    pdf.cell(0, 3.5, "APJ Abdul Kalam Technical University, Lucknow", ln=True)
    pdf.set_font("helvetica", "B", 8.5)
    pdf.cell(0, 3.5, "CGPA: 7.6/10", ln=True)
    
    # ---------- EXPERIENCE ----------
    pdf.section_header("Experience")
    pdf.add_job(
        "Frontend Developer", "Ravan.ai", "Mar 2026 -- Present",
        [
            "Developed responsive and scalable web applications using React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, and shadcn/ui.",
            "Integrated REST APIs and collaborated with backend developers to build dynamic, data-driven user interfaces.",
            "Worked with Git, GitHub, Postman, and Agile workflows to develop, review, test, and deploy production-ready features.",
            "Collaborated closely with UI/UX designers to deliver pixel-perfect, responsive, and user-friendly interfaces."
        ]
    )
    pdf.add_job(
        "AI Automation Engineer", "Ravan.ai", "Jun 2025 -- Mar 2026",
        [
            "Designed and deployed AI-powered automation workflows using Make.com, REST APIs, Webhooks, OpenAI API, and Gemini API.",
            "Built automation solutions for lead qualification, CRM synchronization, WhatsApp automation, and social media publishing.",
            "Integrated Google Sheets, Cloudinary, and third-party APIs to streamline business operations.",
            "Reduced manual operational effort by over 80% through scalable automation workflows."
        ]
    )
    
    # ---------- INTERNSHIP ----------
    pdf.section_header("Internship")
    pdf.add_job(
        "Web Development Intern", "Internship", "Mar 2024 -- May 2024",
        [
            "Developed responsive web applications using HTML, CSS, JavaScript, and React under senior developer guidance.",
            "Integrated real-time drone telemetry dashboards into web interfaces, improving user engagement by 20%.",
            "Collaborated with the development team to build reusable UI components and improve application performance."
        ]
    )

    # ---------- TECHNICAL SKILLS ----------
    pdf.section_header("Technical Skills")
    skills = [
        ("Languages", "Java, JavaScript, SQL, HTML5, CSS3"),
        ("Frontend", "React.js, Next.js, Tailwind CSS, shadcn/ui, Redux"),
        ("Backend", "Node.js, Express.js, REST APIs, JWT Authentication"),
        ("Databases", "MongoDB, MySQL"),
        ("Tools", "Git, GitHub, VS Code, Postman, Cursor"),
        ("Cloud/APIs", "REST APIs, JSON, Webhooks, Google Sheets API, Cloudinary API"),
        ("AI & Automation", "OpenAI API, Gemini API, Make.com, n8n, ChatGPT"),
        ("Computer Science", "OOP, DBMS, Operating Systems, Computer Networks"),
        ("Operating Systems", "Windows, macOS"),
        ("Soft Skills", "Communication, Leadership, Teamwork, Problem Solving")
    ]
    
    # Format in a compact 2-column or list format
    pdf.set_font("helvetica", "", 8.5)
    for category, items in skills:
        pdf.set_font("helvetica", "B", 8.5)
        pdf.write(3.5, f"{category}: ")
        pdf.set_font("helvetica", "", 8.5)
        pdf.write(3.5, f"{items}\n")
    pdf.ln(1)

    # ---------- PROJECTS ----------
    pdf.section_header("Projects")
    pdf.add_project(
        "Uber Clone (MERN)", "Dec 2024 -- Apr 2025", "GitHub", "https://github.com/harshustle/Uber-Website",
        [
            "Built a full-stack ride-booking platform using MongoDB, Express.js, React.js, and Node.js.",
            "Implemented JWT authentication, protected routes, role-based access control, and profile management.",
            "Developed RESTful APIs for ride booking, authentication, and user management.",
            "Integrated Socket.io for real-time ride updates between riders and captains."
        ]
    )
    pdf.add_project(
        "User Registration System (MERN)", "Aug 2024 -- Oct 2024", "GitHub", "https://github.com/harshustle/RegForm",
        [
            "Developed a secure authentication system using React.js, Express.js, MongoDB, JWT, and bcrypt.",
            "Implemented login, signup, password encryption, protected routes, and authentication middleware.",
            "Built responsive forms with real-time validation and error handling."
        ]
    )
    pdf.add_project(
        "Property Rental Platform (MVC)", "Jun 2024 -- Jul 2024", "Live", "https://wanderlust-3ie7.onrender.com/listings",
        [
            "Developed a property rental platform using MVC architecture with CRUD operations and secure authentication.",
            "Implemented property listings, booking workflow, image uploads, and responsive interfaces.",
            "Improved engagement by approximately 60% through optimized user experience."
        ]
    )
    pdf.add_project(
        "AI Social Media Automation", "Apr 2025 -- May 2025", None, None,
        [
            "Built AI-powered automation workflows using Make.com, OpenAI API, Google Sheets API, and REST APIs.",
            "Automated content generation, scheduling, and publishing across multiple social media platforms.",
            "Integrated Webhooks and third-party APIs to reduce manual work by over 90%.",
            "Designed reusable automation pipelines capable of handling high-volume business workflows."
        ]
    )

    # ---------- ACHIEVEMENTS ----------
    pdf.section_header("Achievements")
    achievements = [
        "Built 10+ full-stack web applications using the MERN stack.",
        "Automated business workflows using AI and REST APIs, reducing manual effort by 80%+.",
        "Developed production-ready frontend applications using React.js, Next.js, Tailwind CSS, and shadcn/ui.",
        "Integrated OpenAI API, Gemini API, Webhooks, Cloudinary API, and Google Sheets API into automation solutions.",
        "Continuously improving problem-solving skills through regular practice of Data Structures and Algorithms."
    ]
    
    pdf.set_font("helvetica", "", 8.5)
    for ach in achievements:
        pdf.set_x(18)
        pdf.cell(4, 3.5, "-", ln=False)
        pdf.multi_cell(172, 3.5, ach)

    output_dir = os.path.join("portfolio", "public")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "Harsh_Srivastav_Resume.pdf")
    pdf.output(output_path)
    print(f"Resume generated at: {output_path}")

if __name__ == "__main__":
    build_resume()

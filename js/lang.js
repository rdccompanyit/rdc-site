const translations = {
    pt: {
        title: "RDC Company",
        contactBtn: "Fale Conosco",
        heroHeadline: "Tecnologia com DNA da Vila",
        heroDescription:
            "Somos a RDC Company, especialistas em soluções digitais que funcionam de verdade. Da Rua de Cima pro seu negócio, sem enrolação, sem terceirização, só entrega real.",
        ctaBtn: "Solicite um Orçamento",
        servicesTitle: "O que a gente faz",
        serviceSitesTitle: "🖥️ Desenvolvimento de Sites",
        serviceSitesDesc: "Landing pages, institucionais, e-commerces — rápidos, bonitos e funcionais.",
        serviceDashTitle: "📊 Dashboards & BI",
        serviceDashDesc: "Transformamos dados em visualizações que ajudam na tomada de decisão.",
        serviceIATitle: "🤖 IA & Chatbots",
        serviceIADesc: "Automatizamos atendimento com inteligência generativa e bots multi-plataforma.",
        serviceRPATitle: "⚙️ RPA (Automação de Processos)",
        serviceRPADesc: "Criamos robôs que fazem o trabalho chato por você — planilhas, sistemas, web.",
        serviceMLTitle: "🧠 Modelos de Machine Learning",
        serviceMLDesc: "Predição, classificação, clustering... Se tiver dado, a gente modela.",
        serviceTimeTitle: "📈 Análise de Séries Temporais",
        serviceTimeDesc: "Forecast de vendas, previsão de demanda, alertas em tempo real com ARIMA, Prophet e LSTM.",
        finalCtaTitle: "Não sabe o que precisa?",
        finalCtaDesc:
            "Só manda no Zap. A gente traduz seu problema em código — rápido, direto e sem enrolação.\nVocê fala. A gente entrega.",
        finalCtaBtn: "Falar com um dev agora",
        footerText: "© 2025 RDC Company – Da Rua de Cima para o mundo. Todos os direitos reservados.",
    },

    en: {
        title: "RDC Company",
        contactBtn: "Contact Us",
        heroHeadline: "Technology with Local Roots",
        heroDescription:
            "We are RDC Company, specialists in digital solutions that actually work. From Rua de Cima to your business — no bullshit, no outsourcing, just results.",
        ctaBtn: "Request a Quote",
        servicesTitle: "What we do",
        finalCtaTitle: "Not sure what you need?",        
        serviceSitesTitle: "🖥️ Website Development",
        serviceSitesDesc: "Landing pages, institutional sites, e-commerces — fast, beautiful, and effective.",
        serviceDashTitle: "📊 Dashboards & BI",
        serviceDashDesc: "We turn data into visual insights that drive real decisions.",
        serviceIATitle: "🤖 AI & Chatbots",
        serviceIADesc: "Automated customer service with generative AI and cross-platform bots.",
        serviceRPATitle: "⚙️ RPA (Process Automation)",
        serviceRPADesc: "Bots that handle boring tasks for you — spreadsheets, systems, web routines.",
        serviceMLTitle: "🧠 Machine Learning Models",
        serviceMLDesc: "Prediction, classification, clustering... if there's data, we model it.",
        serviceTimeTitle: "📈 Time Series Analysis",
        serviceTimeDesc: "Sales forecasting, demand prediction, and real-time alerts using ARIMA, Prophet, and LSTM.",
        finalCtaDesc:
            "Just hit us on WhatsApp. We’ll translate your problem into code — fast, direct, no fluff.\nYou talk. We deliver.",
        finalCtaBtn: "Talk to a dev now",
        footerText: "© 2025 RDC Company – From Rua de Cima to the world. All rights reserved.",
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

window.onload = () => {
    const savedLang = localStorage.getItem("lang") || "pt";
    setLanguage(savedLang);
};

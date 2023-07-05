const pricingTable01 = [
    {
        title: "BASIC",
        subtitle: "Basic features",
        price: "$9.99",
        term: "monthly",
        plans: [
            `<strong>5</strong> Domains`,
            `<strong>2 GB</strong> File upload`,
            `<strong>20 GB</strong> Secure storage`,
            `<strong>Unlimited</strong> bandwidth`
        ],
        buttonTitle: "Choose plan",
        buttonLink: "/page/pricing-packages",
    },
    {
        title: "STANDARD",
        subtitle: "MOST POPULAR",
        price: "$19.99",
        term: "monthly",
        plans: [
            `<strong>10</strong> Domains`,
            `<strong>2 GB</strong> File upload`,
            `<strong>40 GB</strong> Secure storage`,
            `<strong>Unlimited</strong> bandwidth`
        ],
        buttonTitle: "Choose plan",
        buttonLink: "/page/pricing-packages",
        popular: {
            isPopular: true
        }
    },
    {
        title: "PREMIUM",
        subtitle: "ALL YOU MAY NEED",
        price: "$29.99",
        term: "monthly",
        plans: [
            `<strong>20</strong> Domains`,
            `<strong>4 GB</strong> File upload`,
            `<strong>60 GB</strong> Secure storage`,
            `<strong>Unlimited</strong> bandwidth`
        ],
        buttonTitle: "Choose plan",
        buttonLink: "/page/pricing-packages",
    },
]

const itensPlanBasic = () => (
    <>
        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Emissões de Proposta Comercial <strong>(20)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
        <i className="fas fa-check text-[#45b112]"></i> Modelos de Propostas Exclusivas <strong>(3)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Projetos e homologação <strong>(2)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Quantidade de Usuários <strong>(1)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Calculadora Solar
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Payback com regras lei n 14300
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Acesso Mobile
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Rastreio de Propostas
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Implementação e precificação de mão de obra
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Contrato de prestação de serviço
        </li>
    </>
)

const itensPlanLight = () => (
    <>
        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Emissões de Proposta Comercial <strong>(30)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Modelos de Propostas Exclusivas <strong>(3)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Projetos e homologação <strong>(2)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Quantidade de Usuários <strong>(3)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Calculadora Solar
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Payback com regras lei n 14300
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Acesso Mobile
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Rastreio de Propostas
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Implementação e precificação de mão de obra
        </li>
        
        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-close text-[#ce1414]"></i> Contrato de prestação de serviço
        </li>
    </>
)

const itensPlanPro = () => (
    <>
        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Emissões de Proposta Comercial <strong>(Ilimitado)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Modelos de Propostas Exclusivas <strong>(8)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Projetos e homologação <strong>(5)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Quantidade de Usuários <strong>(5)</strong>
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Calculadora Solar
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Payback com regras lei n 14300
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Acesso Mobile
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Rastreio de Propostas
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Implementação e precificação de mão de obra
        </li>

        <li className="text-[#828282] mb-[10px] last:mb-0 text-start">
            <i className="fas fa-check text-[#45b112]"></i> Contrato de prestação de serviço
        </li>
    </>
)

const pricingTable02 = [
    {
        icon: "line-icon-Boy",
        title: "Gratuito",
        price: "R$0",
        term: "POR MÊS",
        plans: ['Buscas de kits', 'Emissão proposta comercial	'],
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",
    },
    {
        icon: "line-icon-Business-Mens",
        title: "START",
        price: "R$66,90",
        term: "POR MÊS",
        plans: ['Buscas de kits', 'Emissão proposta comercial	', 'Unlimited variations'],
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",
    },
    {
        icon: "line-icon-Business-ManWoman",
        title: "LIGHT",
        price: "R$97,00",
        term: "POR MÊS",
        plans: ['Buscas de kits', 'Emissão proposta comercial	'],
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "#"
    },
    {
        icon: "line-icon-Business-ManWoman",
        title: "PRO",
        price: "R$147,00",
        term: "POR MÊS",
        plans: ['Buscas de kits', 'Emissão proposta comercial	'],
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "#",
    }
]

const pricingTable03MonthData = [
    {
        icon: "line-icon-Boy",
        title: "Start",
        price: "R$89,00",
        plans: itensPlanBasic(),
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",

    },
    {
        icon: "line-icon-Business-ManWoman",
        title: "Light",
        price: "R$129,00",
        plans: itensPlanLight(),
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",
    },
    {
        icon: "line-icon-Business-Mens",
        title: "Pro",
        price: "R$196,00",
        plans: itensPlanPro(),
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",
        popular: {
            isPopular: true
        }
    },
]
const pricingTable03YearData = [
    {
        icon: "line-icon-Boy",
        title: "Start",
        price: "R$66,90",
        priceCondition: '/mês',
        plans: itensPlanBasic(),
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",

    },
    {
        icon: "line-icon-Business-ManWoman",
        title: "Light",
        price: "R$97,00",
        priceCondition: '/mês',
        plans: itensPlanLight(),
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",
    },
    {
        icon: "line-icon-Business-Mens",
        title: "Pro",
        price: "R$147,00",
        priceCondition: '/mês',
        plans: itensPlanPro(),
        buttonTitle: "CONTRATAR PLANO",
        buttonLink: "/page/pricing-packages",
        popular: {
            isPopular: true
        }
    },
]

const pricingTable04 = [
    {
        title: "BASIC PLAN",
        subtitle: "Core features",
        price: "$29",
        term: "PER YEAR",
        plans: [
            "Pixel perfect design", "Personal applications", "Step by step support"
        ],
        buttonTitle: "Choose Package",
        buttonLink: "/page/pricing-packages",
    },
    {
        title: "STANDARD PLAN",
        subtitle: "Most popular",
        price: "$39",
        term: "PER YEAR",
        plans: [
            "Pixel perfect design", "Personal applications", "Responsive app layout", "Step by step support"

        ],
        buttonTitle: "Choose Package",
        buttonLink: "/page/pricing-packages",
        popular: {
            isPopular: true,
        }
    },
    {
        title: "PREMIUM PLAN",
        subtitle: "Huge features",
        price: "$49",
        term: "PER YEAR",
        plans: [
            "Pixel perfect design", "Personal applications", "Step by step support"

        ],
        buttonTitle: "Choose Package",
        buttonLink: "/page/pricing-packages",
    }
]

export { pricingTable01, pricingTable02, pricingTable03MonthData, pricingTable03YearData, pricingTable04 }